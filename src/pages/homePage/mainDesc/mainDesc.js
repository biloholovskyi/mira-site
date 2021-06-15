import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import DefaultTitle from "../../../components/defaultTitle/defaultTitle";

import * as Style from './styled'

import tickers from './media/tickers.svg'

const MainDesc = () => {
  return (
    <Style.Wrapper>
      <Container>
        <Row>
          <Col lg={{offset: 5, span: 7}}>
            <DefaultTitle
              text={'Легкий вход <br> на рынок инвестиций <br> для каждого'}
              style={{
                marginBottom: '40px'
              }}
            />
            <p>Компания Мира работает на разных биржевых площадках с различными финансовыми инструментами (более 20
              инструментов). За счет надежной диверсификации портфеля MIRA, держатели индекса MIRA получают пассивную
              прибыль до 1% в день с высоким уровнем защиты капитала.</p>
          </Col>
        </Row>
      </Container>
      <img src={tickers} alt="tickers" className={'tickers'}/>
    </Style.Wrapper>
  )
}

export default MainDesc