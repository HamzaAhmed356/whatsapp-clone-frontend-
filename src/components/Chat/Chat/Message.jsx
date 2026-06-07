import { Box, Typography, styled } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../../Context/accountProvider";

const Own = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin: 5px 0;
`;

const Wrapper = styled(Box)(({ own }) => ({
  background: own ? "#dcf8c6" : "#ffffff",
  margin: own ? "0px 10px 0px 0px" : "0 0 0 10px",
  padding: "8px 12px",
  borderRadius: "10px",
  maxWidth: "60%",
  boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
  wordBreak: "break-word",
}));

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  text-align: right;
  margin-top: 3px;
`;

const Message = ({ message }) => {
  const { account } = useContext(AccountContext);
  const isOwn = message.senderId === account.sub;

  return (
    <Own style={{ justifyContent: isOwn ? "flex-end" : "flex-start" }}>
      <Wrapper own={isOwn}>
        <Typography variant="body2">{message.text}</Typography>
        <Time>
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Time>
      </Wrapper>
    </Own>
  );
};

export default Message;
