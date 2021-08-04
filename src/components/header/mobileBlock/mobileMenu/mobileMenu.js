import React from 'react'

import {NavLink} from 'react-router-dom';

import * as Style from './styled'

const MobileMenu = ({updateMobileMenu}) => {

  const hideMenu = () => {
    updateMobileMenu(false)
  }

	return (
		<Style.Wrapper>
      <NavLink  onClick={hideMenu} to={"/about"}>О проекте</NavLink>
      <NavLink  onClick={hideMenu} to={"/news"}>Новости</NavLink>
      <NavLink  onClick={hideMenu} to={"/school"}>Школа инвестирования</NavLink>
      <NavLink  onClick={hideMenu} to={"/contacts"}>Контакты</NavLink>
      <NavLink  onClick={hideMenu} to={"/documents"}>Документы</NavLink>
      <NavLink  onClick={hideMenu} to={"#"}>Войти</NavLink>
      <NavLink  onClick={hideMenu} to={"#"} className={'button'}>Зарегистрироваться</NavLink>
		</Style.Wrapper>
	)
}

export default MobileMenu