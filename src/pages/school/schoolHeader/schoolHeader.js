import React from 'react'

import MainInput from "../../../components/inputs/mainInput/mainInput";

import * as Style from './styled'

import search from './media/search.svg'

const SchoolHeader = () => {
	return (
		<Style.Wrapper>
      <h2 className="school-title">Школа инвестирования</h2>

      <MainInput
        style={{
          width: 'max-content',
          marginTop: 40
        }}

        styleInput={{
          width: 768
        }}

        type={'text'}
        placeholder={'Введите ключевое слово'}
        icon={search}
      />
		</Style.Wrapper>
	)
}

export default SchoolHeader