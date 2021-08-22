import React, {useEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";

import * as Style from './styled'
import axios from "axios";
import ServerSettings from "../../../../service/serverSettings";

const TimeLine = () => {
  const [roadMap, setRoadMap] =useState([]);

  const getRoadMap = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/maps/`)
      .then(res => {
        setRoadMap(res.data)
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getRoadMap().catch(error => console.error(error));
  }, [])

  return (
    <Style.Wrapper>
      <Style.Line/>

      <Container>
        <Row>
          <Col>
            <Style.DotWrapper>
              <div className={`dot dot--active`}>
                <div className="dotText">
                  <div className="name">Август 2021</div>
                  <div className="text">Запуск платформы Mira</div>
                </div>
              </div>

              <div className={`dot`}>
                <div className="dotText">
                  <div className="name">Сентябрь 2021</div>
                  <div className="text">Открытие Mira University</div>
                </div>
              </div>

              <div className={`dot`}>
                <div className="dotText">
                  <div className="name">Октябрь 2021</div>
                  <div className="text">Запуск авто/квартирной программы</div>
                </div>
              </div>

              <div className={`dot`}>
                <div className="dotText">
                  <div className="name">Ноябрь 2021</div>
                  <div className="text">Запуск мобильных приложений MIRA</div>
                </div>
              </div>

              <div className={`dot`}>
                <div className="dotText">
                  <div className="name">Декабрь 2021</div>
                  <div className="text">Открытие MIRA Market</div>
                </div>
              </div>

              <div className={`dot`}>
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