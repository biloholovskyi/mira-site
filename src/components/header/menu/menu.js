import React from "react";

import {Item, Nav} from './styled'

const Menu = ({fixedHeader}) => {
  return (
    <Nav fixedHeader={fixedHeader}>
      {/*<Item to={'/about'}>О проекте</Item>*/}
      <Item to={'/news'}>Новости</Item>
      <Item to={'/faq'}>Вопросы-Ответы</Item>
      {/*<Item to={'/school'}>Школа инвестирования</Item>*/}
      <Item to={'/documents'}>Документы</Item>
      <Item to={'/contacts'}>Контакты</Item>
    </Nav>
  )
}

export default Menu;