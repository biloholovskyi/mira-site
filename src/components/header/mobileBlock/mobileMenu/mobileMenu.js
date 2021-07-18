import React from 'react'

import * as Style from './styled'

const MobileMenu = () => {
	return (
		<Style.Wrapper>
      <a href="#">О проекте</a>
      <a href="#">Новости</a>
      <a href="#">Школа инвестирования</a>
      <a href="#">Контакты</a>
      <a href="#">Войти</a>
      <a href="#" className={'button'}>Зарегистрироваться</a>
		</Style.Wrapper>
	)
}

export default MobileMenu