import { Box, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useContext, useEffect } from "react";
import { AccountContext } from "../Context/accountProvider";
import { getConversation, setConversation } from "../services/api";
const Card = styled(Box)`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  cursor: pointer;
  border-bottom: 1px solid #f2f2f2;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f2f5;
  }
`;

const UserInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

const Username = styled(Typography)`
  font-weight: 500;
  font-size: 16px;
  color: #111b21;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LastMessage = styled(Typography)`
  font-size: 13px;
  color: #667781;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 2px;
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
  }, [messageFlag, account.sub, user.sub]);
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
