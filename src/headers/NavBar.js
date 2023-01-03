import React from "react";
import { PrimaryNav, MenuLink, Menu, Hamburger } from "./NavElements";
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/signup" activeStyle className="hover:text-white">
            Sign Up
          </MenuLink>
          <MenuLink to="/login" activeStyle className="hover:text-white">
            Login
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar