import React, {useState} from "react";

import MobileMenu from "./mobileMenu/mobileMenu";

import * as Style from "./styled";

const MobileBlock = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <Style.Wrapper show={mobileMenu}>
      <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
        <div className="item"/>
        <div className="item"/>
        <div className="item"/>
      </div>
      <div className="delimiter"/>

      {
        mobileMenu && <MobileMenu/>
      }
    </Style.Wrapper>
  )
}

export default MobileBlock;