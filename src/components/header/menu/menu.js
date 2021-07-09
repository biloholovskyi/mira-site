import React from "react";

import * as Style from './styled'

const Menu = ({fixedHeader}) => {
  return (
    <Style.Nav fixedHeader={fixedHeader}>
      <Style.Item href={'#'}>О проекте</Style.Item>
      <Style.Item href={'#'}>Новости</Style.Item>
      <Style.Item href={'#'}>Школа инвестирования</Style.Item>
      <Style.Item href={'#'}>Контакты</Style.Item>
    </Style.Nav>
  )
}

export default Menu;