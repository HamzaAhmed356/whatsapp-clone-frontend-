import { Box, styled } from "@mui/material";

const Component = styled(Box)`
  background: url("https://cdn.prod.website-files.com/62396affb4902b847d57a975/6447c56a51c36d7cd2950602_Website_Blog_Feature-Image_How-to-use-WA-Web-for-Business-p-1080.png");
  height: 93vh;
  overflow:hidden
  width: 100%;
  background-size: 130%;
  background-position:center;
  background-repeat:no-repeat;
  display:flex;
  align-items:center;
  justify-content:center
`;
const Wrapper = styled(Box)`
  color: #27362b;
  margin-top: 320px;
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
