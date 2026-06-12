import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";
import { useState, useContext } from "react";
import { AccountContext } from "../../../Context/accountProvider";

const Menus = styled(Menu)`
  margin-top: 30px;
`;
const MenuItems = styled(MenuItem)`
  font-size: 14px;
  color: #4a4a4a;
`;
const HeaderMenu = () => {
  const [open, setOpen] = useState(null);
  const { setaccount, setPerson } = useContext(AccountContext);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };
  const handleLogout = () => {
    setaccount(null);
    setPerson({});
    handleClose();
  };
  return (
    <>
      <MoreVert onClick={handleClick} style={{ cursor: "pointer" }} />
      <Menus
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItems onClick={handleClose}>Profile</MenuItems>
        <MenuItems onClick={handleClose}>My account</MenuItems>
        <MenuItems onClick={handleLogout}>Logout</MenuItems>
      </Menus>
    </>
  );
};
export default HeaderMenu;
