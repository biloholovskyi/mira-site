import React from "react";

import * as Style from './styled'

import icon from './media/sign.svg'
import text from './media/text.svg'

const Logo = ({style575}) => {

  return (
    <Style.Wrapper to={'/'} style575={style575}>
      <img className={'icon'} src={icon} alt="mira"/>
      <img className={'text'} src={text} alt="mira"/>
    </Style.Wrapper>
  )
}

export default Logo