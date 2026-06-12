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
  background-size: 30%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const Component = styled(Box)`
  flex: 1;
  overflow-y: auto;
  padding: 12px 24px;
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
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [file, setFile] = useState();
  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      const textValue = value.trim();
      if (!textValue) return; // Prevent empty messages

      const tempId = Date.now().toString() + Math.random().toString();
      let tempMessage = {
        _id: tempId,
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: textValue,
        createdAt: Date.now(),
        status: "sending"
      };

      // Optimistically append the message to the list immediately
      setMessages((prev) => [...prev, tempMessage]);
      setValue("");

      // Emit message to socket
      socket.current.emit("sendMessage", tempMessage);

      try {
        // Post message to the database
        await newMessage({
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: textValue,
        });

        // Update local state to "sent" once saved in DB
        setMessages((prev) =>
          prev.map((msg) =>
            msg._id === tempId ? { ...msg, status: "sent" } : msg
          )
        );
      } catch (error) {
        // Set to "failed" on server error
        setMessages((prev) =>
          prev.map((msg) =>
            msg._id === tempId ? { ...msg, status: "failed" } : msg
          )
        );
      }

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
      <Component>
        {messages && messages.map((message) => <Message key={message._id || message.createdAt} message={message} />)}
        <div ref={scrollRef} />
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
