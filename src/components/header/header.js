import React from "react";

import Logo from "../logo/logo";
import ButtonsBlock from "./buttonsBlock/buttonsBlock";
import Menu from "./menu/menu";
import MobileBlock from "./mobileBlock/mobileBlock";

import * as Style from './styled'

const Header = () => {
  return (
    <Style.HeaderWrapper>
      <MobileBlock/>
      <Logo/>
      <Menu/>
      <ButtonsBlock/>
    </Style.HeaderWrapper>
  )
}

export default Header;