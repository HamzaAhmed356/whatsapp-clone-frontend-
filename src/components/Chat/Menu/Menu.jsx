import Conversation from "../../conversation";
import { Box } from "@mui/material";
import { useState } from "react";

//components
import Header from "./Header";
import Search from "./Search";

const Menu = () => {
  const [text, setText] = useState("");
  return (
    <Box>
      <Header />
      <Search text={setText} />
      <Conversation text={text} />
    </Box>
  );
};
export default Menu;
