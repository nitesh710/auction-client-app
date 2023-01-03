import React from "react";
import { PrimaryNav, MenuLink, Menu, Hamburger } from "./NavElements";
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/signup" activeStyle>
            Sign Up
          </MenuLink>
          <MenuLink to="/login" activeStyle>
            Login
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar