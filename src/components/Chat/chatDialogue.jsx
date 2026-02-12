import { Dialog, Box, styled } from "@mui/material";
import ChatBox from "./Chat/chatBox";
import EmptyChat from "./Chat/emptyChat";
import { useContext, useState } from "react";
import { AccountContext } from "../../Context/accountProvider";
import Menu from "./Menu/Menu";
const DialogCss = {
  height: "100%",
  width: "100%",
  margin: "20px",
  marginTop: "60px",
  borderRadius: "none",
  maxWidth: "100%",
  boxShadow: "none",
  overFlow: "none",
  maxHeight: "100%",
};

const Component = styled(Box)`
  display: flex;
`;
const Left = styled(Box)`
  min-width: 450px;
`;
const Right = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialogue = () => {
  const { person } = useContext(AccountContext);
  const [profile, setProfile] = useState(person.picture);

  return (
    <>
      <Dialog
        open={true}
        PaperProps={{ sx: DialogCss }}
        hideBackdrop={true}
        maxWidth={"md"}
      >
        <Component>
          {/*left */}
          <Left>
            <Menu />
          </Left>
          {/*right */}
          <Right>
            {person.picture != undefined ? <ChatBox /> : <EmptyChat />}
          </Right>
        </Component>
      </Dialog>
    </>
  );
};
export default ChatDialogue;
