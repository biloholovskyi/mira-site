import React from 'react'

import {NavLink} from 'react-router-dom';

import * as Style from './styled'

const MobileMenu = ({updateMobileMenu}) => {

  const hideMenu = () => {
    updateMobileMenu(false)
  }

	return (
		<Style.Wrapper>
      <NavLink  onClick={hideMenu} to={"#"}>О проекте</NavLink>
      <NavLink  onClick={hideMenu} to={"#"}>Новости</NavLink>
      <NavLink  onClick={hideMenu} to={"#"}>Школа инвестирования</NavLink>
      <NavLink  onClick={hideMenu} to={"#"}>Контакты</NavLink>
      <NavLink  onClick={hideMenu} to={"/documents"}>Документы</NavLink>
      <NavLink  onClick={hideMenu} to={"#"}>Войти</NavLink>
      <NavLink  onClick={hideMenu} to={"#"} className={'button'}>Зарегистрироваться</NavLink>
		</Style.Wrapper>
	)
}

export default MobileMenu