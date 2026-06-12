import { useContext } from "react";
import { AccountContext } from "../../../Context/accountProvider";
import { Box, styled, Avatar } from "@mui/material";
import { Chat as MessageIcon } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";

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
const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 8px;
    color: #616161;
  }
  & :first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;
const Header = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <Component>
        <Image src={account.picture} alt={account.name} />

        <Wrapper>
          <MessageIcon />
          <HeaderMenu />
        </Wrapper>
      </Component>
    </>
  );
};
export default Header;
