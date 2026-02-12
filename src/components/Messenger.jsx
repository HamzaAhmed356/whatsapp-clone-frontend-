import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./account/loginDialog";
import { AccountContext } from "../Context/accountProvider";
import { useContext } from "react";
import ChatDialogue from "./Chat/chatDialogue";

const Component = styled(Box)`
  background-color: #bbbbbba1;
  height: 100vh;
`;
const LoginHeader = styled(AppBar)`
  height: 250px;
  background-color: #25d366;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Component>
        <LoginHeader>
          <Toolbar>{account ? <ChatDialogue /> : <LoginDialog />}</Toolbar>
        </LoginHeader>
      </Component>
    </>
  );
};

export default Messenger;
