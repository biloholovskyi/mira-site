import React from 'react'

import MainInput from "../../../components/inputs/mainInput/mainInput";

import * as Style from './styled'

import search from './media/search.svg'
import {Container, Row, Col} from "react-bootstrap";

const SchoolHeader = ({setSearchTerm}) => {
	return (
		<Style.Wrapper>
     <Container>
       <Row>
        <Col>
          <h2 className="school-title">Школа инвестирования</h2>

          <MainInput
            style={{
              width: 'max-content',
              margin: '40px auto 0!important'
            }}

            styleInput={{
              width: 768
            }}

            type={'text'}
            placeholder={'Введите ключевое слово'}
            icon={search}
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
        </Col>
       </Row>
     </Container>
		</Style.Wrapper>
	)
}

export default SchoolHeader