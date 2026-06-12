import { Box, Typography, styled, useMediaQuery, IconButton, Avatar } from "@mui/material";
import { MoreVert, Search, ArrowBack } from "@mui/icons-material";
import { AccountContext } from "../../../Context/accountProvider";
import { useContext } from "react";

const Component = styled(Box)`
  height: 44px;
  background-color: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;
const Image = styled(Avatar)({
  height: 40,
  width: 40,
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
  const { activeUsers, setPerson } = useContext(AccountContext);
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Component>
      {isMobile && (
        <IconButton onClick={() => setPerson({})} style={{ padding: 4, marginRight: 8, color: "#54656f" }}>
          <ArrowBack />
        </IconButton>
      )}
      <Image src={person.picture} alt={person.name} />
      <Box>
        <Name>{person.name}</Name>
        <OnlineStatus>
          {activeUsers.find((user) => user.sub === person.sub)
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
