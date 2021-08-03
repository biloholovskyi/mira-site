import React from "react";

import {Item, Nav} from './styled'

const Menu = ({fixedHeader}) => {
  return (
    <Nav fixedHeader={fixedHeader}>
      <Item to={'#'}>О проекте</Item>
      <Item to={'/news'}>Новости</Item>
      <Item to={'#'}>Школа инвестирования</Item>
      <Item to={'#'}>Контакты</Item>
      <Item to={'/documents'}>Документы</Item>
    </Nav>
  )
}

export default Menu;