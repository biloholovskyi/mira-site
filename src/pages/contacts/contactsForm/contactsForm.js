import React from 'react'

import MainInput from "../../../components/inputs/mainInput/mainInput";
import MainTextArea from "../../../components/inputs/mainInput/mainTextArea/mainTextArea";
import MainButton from "../../../components/buttons/mainButton/mainButton";

import * as Style from './styled'

const ContactsForm = () => {
	return (
		<Style.Wrapper>
		  <Style.Form>
        <MainInput
          label={'Ваше имя'}
          name={'name'}
          // margin-bottom
          mb={'32px'}
          type={'text'}
        />
        <MainInput
          label={'Ваш Email'}
          name={'email'}
          // margin-bottom
          mb={'32px'}
          type={'email'}
        />

        <MainTextArea
          label={'Ваш вопрос'}
          name={'email'}
          // margin-bottom
          mb={'32px'}
        />

        <div className="form-text">Нажимая кнопку “Отправить” вы принимаете условия соглашения и политики обработки персональных данных</div>

        <button className={'form-button'} type={'submit'}>Зарегистрироваться</button>
      </Style.Form>
		</Style.Wrapper>
	)
}

export default ContactsForm