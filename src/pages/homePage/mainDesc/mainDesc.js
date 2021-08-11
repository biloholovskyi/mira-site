import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import DefaultTitle from "../../../components/defaultTitle/defaultTitle";

import * as Style from './styled'

import tickers from './media/tickers.svg'
import tickers1 from './media/tickers1.svg'
import tickers2 from './media/tickers2.svg'
import tickers3 from './media/tickers3.svg'
import tickers4 from './media/tickers4.svg'
import tickers5 from './media/tickers5.svg'
import tickers6 from './media/tickers6.svg'

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
          <img src={tickers1} alt="tickers" className={'tickers-item'}/>
          <img src={tickers2} alt="tickers" className={'tickers-item'}/>
          <img src={tickers3} alt="tickers" className={'tickers-item'}/>
        </div>
        <div className="bottom" id={'tickers_bottom'}>
          <img src={tickers6} alt="tickers" className={'tickers-item'}/>
          <img src={tickers4} alt="tickers" className={'tickers-item'}/>
          <img src={tickers5} alt="tickers" className={'tickers-item'}/>
        </div>
      </div>
    </Style.Wrapper>
  )
}

export default MainDesc