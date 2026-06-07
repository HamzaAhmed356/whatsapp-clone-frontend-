import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ConversationCard from "./conversationCard";
import { useContext } from "react";
import { AccountContext } from "../Context/accountProvider";
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Conversation = ({ text }) => {
  const { account, socket, setActiveUsers } = useContext(AccountContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers();
      const filteredUsers = response.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase()),
      );

      setUsers(filteredUsers);
    };
    fetchData();
  }, [text]);
  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      //will return active users from socket.io index.js
      setActiveUsers(users);
    });
  }, [account, socket, setActiveUsers]);

  return (
    <Container>
      {users.map(
        (user) =>
          account.sub !== user.sub && (
            <ConversationCard key={user._id} user={user} />
          ),
      )}
    </Container>
  );
};

export default Conversation;
