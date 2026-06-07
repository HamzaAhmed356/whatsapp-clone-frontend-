import { styled, Dialog, ListItem, List, Box } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../Context/accountProvider";
import { useContext } from "react";
import { addUser } from "../../services/api";
const DialogCss = {
  height: "95%",
  width: "70vw",
  marginTop: "10%",
  maxWidth: "90%",
  boxShadow: "none",
  overFlow: "none",
  maxHeight: "100%",
};
const LiCss = styled(List)`
  & > li {
    font-size: 18px;
    margin-top: 10px;
  }
  margin-top: 30px;
`;

const LoginDialog = () => {
  const { setaccount } = useContext(AccountContext);
  const onLoginSuccess = (res) => {
    const decoded = jwtDecode(res.credential);
    setaccount(decoded);
    addUser(decoded);
  };
  const onLoginError = () => {};

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: DialogCss }} hideBackdrop={true}>
        <Box>
          <LiCss>
            <ListItem>1. Chat with Gmails</ListItem>
            <ListItem>2. Login WIth Google</ListItem>
            <ListItem>3. Login With GitHub </ListItem>
          </LiCss>
        </Box>
        <Box>
          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
        </Box>
      </Dialog>
    </>
  );
};

export default LoginDialog;
