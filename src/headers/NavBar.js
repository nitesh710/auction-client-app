import React from "react";
import { PrimaryNav, MenuLink, Menu, Hamburger } from "./NavElements";
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/signup" activestyle="true" className="hover:text-white">
            Sign Up
          </MenuLink>
          <MenuLink to="/login" activestyle="true" className="hover:text-white">
            Login
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar