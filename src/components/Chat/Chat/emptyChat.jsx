import { Box, styled } from "@mui/material";

const Component = styled(Box)`
  background: #f8f9fa url("https://cdn.prod.website-files.com/62396affb4902b847d57a975/6447c56a51c36d7cd2950602_Website_Blog_Feature-Image_How-to-use-WA-Web-for-Business-p-1080.png") no-repeat center;
  background-size: contain;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Wrapper = styled(Box)`
  color: #27362b;
  text-align: center;
  margin-top: 180px;
  background: rgba(255, 255, 255, 0.85);
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(4px);
`;
const EmptyChat = () => {
  return (
    <>
      <Component>
        <Wrapper>
          <p>
            <b>Welcome To Whatsapp Web Clone</b>
            <p>Your Selected Chats Will Show Here</p>
          </p>
        </Wrapper>
      </Component>
    </>
  );
};
export default EmptyChat;
