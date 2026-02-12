import { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setaccount] = useState(null);
  const [person, setPerson] = useState({});
  return (
    <AccountContext.Provider value={{ account, setaccount, person, setPerson }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
