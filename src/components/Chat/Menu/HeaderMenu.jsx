import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";

const Menus = styled(Menu)`
  margin-top: 30px;
`;
const MenuItems = styled(MenuItem)`
  font-size: 14px;
  color: #4a4a4a;
`;
const HeaderMenu = () => {
  const [open, setOpen] = useState(null);
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };
  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menus
        anchorEl={open}
        keepMounted
        getContentAnchorE1={null}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItems onClick={handleClose}>Profile</MenuItems>
        <MenuItems onClick={handleClose}>My account</MenuItems>
        <MenuItems onClick={handleClose}>Logout</MenuItems>
      </Menus>
    </>
  );
};
export default HeaderMenu;
