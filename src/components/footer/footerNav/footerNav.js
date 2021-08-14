import React from "react";

import * as Style from './styled'

const FooterNav = () => {
  return (
    <Style.Nav>
      {/*<Style.Item href={'/about'}>О проекте</Style.Item>*/}
      <Style.Item href={'/news'}>Новости</Style.Item>
      <Style.Item href={'/faq'}>Вопросы-Ответы</Style.Item>
      {/*<Style.Item href={'/school'}>Школа инвестирования</Style.Item>*/}
      <Style.Item href={'/documents'}>Документы</Style.Item>
      <Style.Item href={'/contacts'}>Контакты</Style.Item>
    </Style.Nav>
  )
}

export default FooterNav;