import React from "react";

import {Item, Nav} from './styled'

const Menu = ({fixedHeader}) => {
  return (
    <Nav fixedHeader={fixedHeader}>
      <Item to={'/about'}>О проекте</Item>
      <Item to={'/news'}>Новости</Item>
      <Item to={'/school'}>Школа инвестирования</Item>
      <Item to={'/contacts'}>Контакты</Item>
      <Item to={'/documents'}>Документы</Item>
    </Nav>
  )
}

export default Menu;