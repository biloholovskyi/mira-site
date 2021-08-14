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
              text={mainContent.sub_title}
              style={{
                marginBottom: '40px'
              }}
            />
            <p>{mainContent.desc}</p>
          </Col>
        </Row>
      </Container>

      <div className="tickers">
        <div className="top" id={'tickers_top'}>
          <div className="tickers-item">DEEX</div>
          <div className="tickers-item">Canyon River</div>
          <div className="tickers-item">Binance</div>
          <div className="tickers-item">MOEX</div>
        </div>
        <div className="bottom" id={'tickers_bottom'}>
          <div className="tickers-item">NYSE</div>
          <div className="tickers-item">Interactive Brokers</div>
          <div className="tickers-item">Tickmill</div>
        </div>
      </div>

    </Style.Wrapper>
  )
}

export default MainDesc