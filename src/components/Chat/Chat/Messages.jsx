import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { newMessage } from "../../../services/api";
import ChatFooter from "./ChatFooter";
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
  const { account } = useContext(AccountContext);
  const [value, setValue] = useState("");

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

      await newMessage(message);
      setValue("");
    }
  };

  useEffect(() => {
    const getMessageDetails = async () => {
      const messages = await getMessage(conversation._id);
      console.log("messages", messages);
    };
    conversation._id && getMessageDetails();
  }, [conversation._id, person._id]);
  return (
    <Wrapper>
      <Component></Component>
      <ChatFooter sendText={sendText} setValue={setValue} value={value} />
    </Wrapper>
  );
};
export default Messages;
