import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, Send } from "@mui/icons-material";
import { AttachFile } from "@mui/icons-material";
import { Mic } from "@mui/icons-material";
import { useState } from "react";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  width: 96%;
  align-items: center;
  z-index: -2;
  padding: 0 15px;

  & > * {
    margin: 5px;
    color: #919191;
  }
`;
const IconWrapperleft = styled(Box)`
  z-index: 2;
  & > svg {
    margin: 5px;
  }
`;
const InputField = styled(InputBase)`
  background-color: #ffffff;
  border-radius: 18px;
  width: calc(94% - 420px);
  padding-left: 14px;
  position: absolute;
  padding-left: 80px;
  padding-right: 50px;
  height: 40px;
  margin-bottom: 10px;
`;
const MicIcon = styled(Mic)`
  z-index: 2;
  margin-right: 20px;
  margin-left: auto;
`;
const ChatFooter = ({ sendText, setValue, value }) => {
  return (
    <Container>
      <IconWrapperleft>
        <EmojiEmotionsOutlined />
        <AttachFile />
      </IconWrapperleft>
      <InputField
        placeholder="Type a message"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => sendText(e)}
        value={value}
      />
      <MicIcon />
    </Container>
  );
};
export default ChatFooter;
