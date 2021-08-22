import React, {useState, useEffect} from "react";

import Logo from "../logo/logo";
import ButtonsBlock from "./buttonsBlock/buttonsBlock";
import Menu from "./menu/menu";
import MobileBlock from "./mobileBlock/mobileBlock";

import * as Style from './styled'

const Header = () => {
  const [header, setHeader] = useState(false);

  // for change header style
  const listenScrollEvent = (event) => {
    if (window.scrollY < 100) {
      return setHeader(false)
    } else if (window.scrollY > 100) {
      return setHeader(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <Style.HeaderWrapper fixedHeader={header}>
      <MobileBlock/>
      <Logo/>
      {/*<Menu fixedHeader={header}/>*/}
      <ButtonsBlock/>
    </Style.HeaderWrapper>
  )
}

export default Header;