import React from "react";

import MainButton from "../../buttons/mainButton/mainButton";

import * as Style from './styled'

const ButtonsBlock = () => {
  return (
    <Style.Wrapper>
      <button className="enter" onClick={() => window.open('https://www.mira.fund')}>Войти</button>
      <MainButton func={() => window.open('https://www.mira.fund')} text={'Зарегистрироваться'}/>
    </Style.Wrapper>
  )
}

export default ButtonsBlock;