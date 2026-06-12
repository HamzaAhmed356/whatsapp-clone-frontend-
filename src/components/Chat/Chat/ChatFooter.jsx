import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined } from "@mui/icons-material";
import { AttachFile } from "@mui/icons-material";
import { Mic } from "@mui/icons-material";
import { useEffect } from "react";
import { UploadFile } from "../../../services/api";
const Container = styled(Box)`
  height: 55px;
  background: #f0f2f5;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  gap: 12px;
`;
const IconWrapperleft = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #54656f;
  & > svg, & > label > svg {
    cursor: pointer;
    font-size: 24px;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #008069;
    }
  }
`;
const InputField = styled(InputBase)`
  background-color: #ffffff;
  border-radius: 8px;
  flex: 1;
  padding: 0 12px;
  font-size: 15px;
  height: 40px;
  border: 1px solid transparent;
  &:focus-within {
    border-color: #008069;
  }
`;
const MicIcon = styled(Mic)`
  color: #54656f;
  cursor: pointer;
  font-size: 24px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #008069;
  }
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
  }, [file, conversationId, senderId, receiverId]);

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
