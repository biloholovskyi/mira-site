import React from "react";

import MainButton from "../../buttons/mainButton/mainButton";

import * as Style from './styled'

const ButtonsBlock = () => {
  return (
    <Style.Wrapper>
      <button className="enter">Войти</button>
      <MainButton text={'Зарегистрироваться'}/>
    </Style.Wrapper>
  )
}

export default ButtonsBlock;