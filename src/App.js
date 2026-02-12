import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./Context/accountProvider";
const App = () => {
  const clientid = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  return (
    <>
      <GoogleOAuthProvider clientId={clientid}>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </>
  );
};
export default App;
