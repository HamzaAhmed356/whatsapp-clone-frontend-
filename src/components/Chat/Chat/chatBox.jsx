import { Box } from "@mui/material";
import Messages from "./Messages";
import ChatHeader from "./ChatHeader";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../Context/accountProvider";
import { getConversation } from "../../../services/api";

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetials = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      console.log("conversation data", data);
      setConversation(data);
    };
    getConversationDetials();
  }, [person.sub, account.sub]);
  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};
export default ChatBox;
