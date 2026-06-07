import { Box, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useContext, useEffect } from "react";
import { AccountContext } from "../Context/accountProvider";
import { getConversation, setConversation } from "../services/api";
const Card = styled(Box)`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 12px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;

  &:hover {
    background-color: #f5f6f6;
  }
`;

const UserInfo = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Username = styled(Typography)`
  font-weight: 500;
  font-size: 15px;
`;

const LastMessage = styled(Typography)`
  font-size: 13px;
  color: #667781;
`;

const ConversationCard = ({ user }) => {
  const { setPerson, account, messageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({});
  useEffect(() => {
    const getConversationDatails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversationDatails();
  }, [messageFlag]);
  const getUser = async () => {
    console.log(account.sub, user.sub, "creater");
    //user clicked person // account login person
    await setConversation({ senderId: account.sub, receiverId: user.sub });
    setPerson(user);
  };
  return (
    <Card onClick={() => getUser()}>
      <Avatar
        src={user.picture}
        alt={user.name}
        sx={{ width: 48, height: 48 }}
      />
      <UserInfo>
        <Username>{user.name}</Username>
        <LastMessage>{message?.text}</LastMessage>
      </UserInfo>
    </Card>
  );
};

export default ConversationCard;
