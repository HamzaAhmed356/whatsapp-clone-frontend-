import { Box } from "@mui/material";
import { Typography, styled } from "@mui/material";
import { MoreVert, Search } from "@mui/icons-material";
import { AccountContext } from "../../../Context/accountProvider";
import { useContext } from "react";
const Component = styled(Box)`
  height: 44px;
  background-color: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;
const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: 50,
});
const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const OnlineStatus = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
`;
const Right = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 16px;
    font-size: 22px;
  }
`;
const ChatHeader = ({ person }) => {
  const { activeUsers } = useContext(AccountContext);

  return (
    <Component>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <OnlineStatus>
          {activeUsers.find((user) => user.sub == person.sub)
            ? "Online"
            : "offline"}
        </OnlineStatus>
      </Box>
      <Right>
        <Search />
        <MoreVert />
      </Right>
    </Component>
  );
};
export default ChatHeader;
