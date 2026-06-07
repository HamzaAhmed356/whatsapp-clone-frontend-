import { useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
import { newMessage } from "../../../services/api";
import ChatFooter from "./ChatFooter";
import Message from "./Message";
import { useContext, useState } from "react";
import { AccountContext } from "../../../Context/accountProvider";
import { getMessage } from "../../../services/api";
const Wrapper = styled(Box)`
  background-image: url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png);
  background-size: 50%;
`;
const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Messages = ({ person, conversation }) => {
  const { account, socket, messageFlag, setMessageFlag } =
    useContext(AccountContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const [incomingMessage, setIncomingMessage] = useState(null);
  const scrollRef = useRef();
  useEffect(() => {
    if (
      incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId)
    ) {
      setMessages((prev) => [...prev, incomingMessage]);
    }
  }, [incomingMessage, conversation]);
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  });
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  const [file, setFile] = useState();
  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      //13 code is enter press
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };
      socket.current.emit("sendMessage", message);

      await newMessage(message);
      setValue("");
      setMessageFlag(!messageFlag);
    }
  };

  useEffect(() => {
    const getMessageDetails = async () => {
      const data = await getMessage(conversation._id);
      setMessages(data);
    };
    conversation._id && getMessageDetails();
  }, [conversation._id, person._id, messageFlag]);
  return (
    <Wrapper>
      <Component ref={scrollRef}>
        {messages && messages.map((message) => <Message message={message} />)}
      </Component>
      <ChatFooter
        sendText={sendText}
        setValue={setValue}
        value={value}
        setFile={setFile}
        file={file}
        conversationId={conversation._id}
        senderId={account.sub}
        receiverId={person.sub}
      />
    </Wrapper>
  );
};
export default Messages;
