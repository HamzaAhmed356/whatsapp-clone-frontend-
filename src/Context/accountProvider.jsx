import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setaccount] = useState(null); //logged in user
  const [person, setPerson] = useState({}); //selected user for chat
  const [activeUsers, setActiveUsers] = useState([]); //for online offline status
  const [messageFlag, setMessageFlag] = useState(false); //used in conversation and messages.jsx
  const socket = useRef();
  useEffect(() => {
    const socketUrl = process.env.REACT_APP_SOCKET_URL || "http://localhost:3002";
    socket.current = io(socketUrl);
  }, []);
  return (
    <AccountContext.Provider
      value={{
        account,
        setaccount,
        person,
        setPerson,
        activeUsers,
        setActiveUsers,
        socket,
        messageFlag,
        setMessageFlag,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
