import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, Send, Upload } from "@mui/icons-material";
import { AttachFile } from "@mui/icons-material";
import { Mic } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { UploadFile } from "../../../services/api";
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
//props comes from Messages.jsx
const ChatFooter = ({
  sendText,
  setValue,
  value,
  setFile,
  file,
  conversationId,
  senderId,
  receiverId,
}) => {
  useEffect(() => {
    //for uploading pdfs or files
    const getImage = async () => {
      if (file) {
        const data = new FormData();

        data.append("file", file);
        data.append("conversationId", conversationId);
        data.append("senderId", senderId);
        data.append("receiverId", receiverId);
        data.append("name", file.name);
        const response = await UploadFile(data);
        console.log(response);
      }
    };
    getImage();
  }, [file]);

  const onFileChange = (e) => {
    //e.target.value contain file path
    console.log(e);
    //e.target.files[0] file at index 0
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };
  return (
    <Container>
      <IconWrapperleft>
        <EmojiEmotionsOutlined />
        <label htmlFor="attachFile">
          <AttachFile />
        </label>
        <input
          type="file"
          id="attachFile"
          style={{ display: "none" }}
          onChange={(e) => onFileChange(e)}
        />
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
