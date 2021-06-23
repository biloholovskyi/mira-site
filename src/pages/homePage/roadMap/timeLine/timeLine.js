import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import * as Style from './styled'

const TimeLine = () => {
  return (
    <Style.Wrapper>
      <Style.Line/>

      <Container>
        <Row>
          <Col>
            <Style.DotWrapper>
              <div className="dot dot--active">
                <div className="dotText">
                  <div className="name">Август 2021</div>
                  <div className="text">Запуск платформы Mira</div>
                </div>
              </div>
              <div className="dot dot--top">
                <div className="dotText">
                  <div className="name">Сентябрь 2021</div>
                  <div className="text">Открытие Mira University</div>
                </div>
              </div>
              <div className="dot">
                <div className="dotText">
                  <div className="name">Октябрь 2021</div>
                  <div className="text">Запуск авто/квартирной программы</div>
                </div>
              </div>
              <div className="dot dot--top">
                <div className="dotText">
                  <div className="name">Сентябрь 2021</div>
                  <div className="text">Запуск мобильных приложений MIRA</div>
                </div>
              </div>
              <div className="dot">
                <div className="dotText">
                  <div className="name">Декабрь 2021</div>
                  <div className="text">Открытие MIRA Market</div>
                </div>
              </div>
              <div className="dot dot--top">
                <div className="dotText">
                  <div className="name">Январь 2021</div>
                  <div className="text">Запуск MIRANET</div>
                </div>
              </div>
            </Style.DotWrapper>
          </Col>
        </Row>
      </Container>
    </Style.Wrapper>
  )
}

export default TimeLine;