import { styled, Dialog, ListItem, List, Box, Typography } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../Context/accountProvider";
import { useContext } from "react";
import { addUser } from "../../services/api";

const DialogCss = {
  height: "auto",
  width: "65vw",
  maxWidth: "850px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
  borderRadius: "8px",
  padding: "48px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  "@media (max-width: 900px)": {
    width: "100vw",
    height: "100vh",
    maxHeight: "100vh",
    maxWidth: "100vw",
    borderRadius: 0,
    marginTop: 0,
    flexDirection: "column",
    justifyContent: "center",
    padding: "24px",
    gap: "32px",
  }
};

const LeftSection = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 55%;
  @media (max-width: 900px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const RightSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  @media (max-width: 900px) {
    min-width: 100%;
  }
`;

const Title = styled(Typography)`
  font-size: 28px;
  font-weight: 300;
  color: #41525d;
  margin-bottom: 20px;
  font-family: 'Outfit', sans-serif;
`;

const StyledList = styled(List)`
  margin-top: 16px;
  padding-left: 20px;
  & > li {
    font-size: 16px;
    color: #3b4a54;
    padding: 8px 0;
    line-height: 1.5;
    display: list-item;
    list-style-type: decimal;
  }
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
    <Dialog open={true} PaperProps={{ sx: DialogCss }} hideBackdrop={true}>
      <LeftSection>
        <Box display="flex" alignItems="center" gap="14px" mb={2}>
          <svg viewBox="0 0 24 24" width="40" height="40" fill="#00a884">
            <path d="M12.031 2c-5.514 0-9.998 4.477-9.998 9.978 0 2.007.593 3.868 1.61 5.432l-1.099 4.029 4.148-1.083c1.545.922 3.336 1.462 5.253 1.462 5.514 0 10-4.477 10-9.978 0-5.501-4.486-9.978-10.014-9.978zm0 18.067c-1.802 0-3.486-.519-4.919-1.416l-.353-.223-2.451.64.654-2.392-.245-.386c-.991-1.565-1.562-3.415-1.562-5.362 0-4.456 3.635-8.077 8.083-8.077 4.45 0 8.083 3.621 8.083 8.077 0 4.456-3.633 8.077-8.083 8.077z"/>
          </svg>
          <Title variant="h1" style={{ margin: 0, fontSize: "24px", fontWeight: 600, color: "#111b21" }}>
            WHATSAPP WEB CLONE
          </Title>
        </Box>
        <Typography variant="body1" style={{ color: "#54656f", fontSize: "16px", marginTop: "12px" }}>
          Use WhatsApp Clone on your computer to connect and chat in real-time.
        </Typography>
        <StyledList>
          <ListItem disablePadding>
            Secure login with your Google account credentials.
          </ListItem>
          <ListItem disablePadding>
            Auto-synchronization of contacts and online statuses.
          </ListItem>
          <ListItem disablePadding>
            Send messages, files, and links instantly.
          </ListItem>
        </StyledList>
      </LeftSection>
      <RightSection>
        <Box style={{ background: "#f8f9fa", padding: "32px", borderRadius: "12px", border: "1px dashed #e1e9eb", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width: "100%", boxSizing: "border-box" }}>
          <Typography variant="subtitle2" style={{ color: "#8696a0", fontSize: "12px", textTransform: "uppercase", fontWeight: 600, letterSpacing: "1px" }}>
            Account Sign-in
          </Typography>
          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
        </Box>
      </RightSection>
    </Dialog>
  );
};

export default LoginDialog;
