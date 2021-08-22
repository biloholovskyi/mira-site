import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import DefaultTitle from "../../../components/defaultTitle/defaultTitle";

import * as Style from './styled'

const MainDesc = ({mainContent}) => {
  return (
    <Style.Wrapper className={'content-block'}>
      <Container>
        <Row>
          <Col lg={{offset: 5, span: 7}}>
            <DefaultTitle
              text='Легкий вход на рынок инвестиций для каждого'
              style={{
                marginBottom: '40px'
              }}
            />
            <p>Инвестиционный фонд MIRA Capital начал свою работу в 2015 году в виде закрытого клуба инвесторов с
              порогом входа от 100 000$. Компания MIRA работает на биржевых площадках с различными финансовыми
              инструментами (более 20 инструментов), а также зарекомендовала себя как надежного private-equity брокера с
              прямыми выходами на американские и европейские IPO/Pre-IPO фонды.</p>
          </Col>
        </Row>
      </Container>

      <div className="tickers">
        <div className="top" id={'tickers_top'}>
          <div className="tickers-item">NASDAQ</div>
          <div className="tickers-item">MOEX</div>
          <div className="tickers-item">NYSE</div>
          <div className="tickers-item">CME</div>
        </div>
        <div className="bottom" id={'tickers_bottom'}>
          <div className="tickers-item">BINANCE</div>
          <div className="tickers-item">FOREX</div>
          <div className="tickers-item">FREEDOM FINANCE</div>
        </div>
      </div>

    </Style.Wrapper>
  )
}

export default MainDesc