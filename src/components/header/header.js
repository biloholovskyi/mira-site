import React from "react";

import Logo from "../logo/logo";
import ButtonsBlock from "./buttonsBlock/buttonsBlock";
import Menu from "./menu/menu";

import * as Style from './styled'

const Header = () => {
  return (
    <Style.HeaderWrapper>
      <Logo/>
      <Menu/>
      <ButtonsBlock/>
    </Style.HeaderWrapper>
  )
}

export default Header;