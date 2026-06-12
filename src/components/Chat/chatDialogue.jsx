import { Dialog, Box, styled, useMediaQuery } from "@mui/material";
import ChatBox from "./Chat/chatBox";
import EmptyChat from "./Chat/emptyChat";
import { useContext } from "react";
import { AccountContext } from "../../Context/accountProvider";
import Menu from "./Menu/Menu";

const DialogCss = {
  height: "calc(100% - 38px)",
  width: "100%",
  maxWidth: "1600px",
  margin: "19px auto",
  borderRadius: "4px",
  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
  overflow: "hidden",
  maxHeight: "100%",
  display: "flex",
  flexDirection: "row",
  "@media (max-width: 900px)": {
    margin: 0,
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: 0,
  }
};

const Component = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Left = styled(Box)(({ isMobile, show }) => ({
  minWidth: isMobile ? "100%" : "450px",
  width: isMobile ? "100%" : "30%",
  height: "100%",
  display: isMobile ? (show ? "block" : "none") : "block",
  overflowY: "auto",
}));

const Right = styled(Box)(({ isMobile, show }) => ({
  width: isMobile ? "100%" : "70%",
  minWidth: isMobile ? "100%" : "300px",
  height: "100%",
  borderLeft: isMobile ? "none" : "1px solid rgba(0, 0, 0, 0.14)",
  display: isMobile ? (show ? "block" : "none") : "block",
}));

const ChatDialogue = () => {
  const { person } = useContext(AccountContext);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const hasActiveChat = person && person.picture !== undefined;

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
          <Left isMobile={isMobile} show={!hasActiveChat}>
            <Menu />
          </Left>
          {/*right */}
          <Right isMobile={isMobile} show={hasActiveChat}>
            {hasActiveChat ? <ChatBox /> : <EmptyChat />}
          </Right>
        </Component>
      </Dialog>
    </>
  );
};
export default ChatDialogue;
