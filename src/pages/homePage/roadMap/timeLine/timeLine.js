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
              {/*<div className={`dot dot--active`}>*/}
              {/*  <div className="dotText">*/}
              {/*    <div className="name">Сентябрь 2021</div>*/}
              {/*    <div className="text">Запуск MIRA</div>*/}
              {/*  </div>*/}
              {/*</div>*/}


              {/*<div className={`dot`}>*/}
              {/*  <div className="dotText">*/}
              {/*    <div className="name">Октябрь 2021</div>*/}
              {/*    <div className="text">Старт инвестиционной академии Mira University</div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              <div className={`dot dot--active`}>
                <div className="dotText">
                  <div className="name">Ноябрь 2021</div>
                  <div className="text">Mira Marketplace, Запуск брокера Mira Trade</div>
                </div>
              </div>

              <div className={`dot`}>
                <div className="dotText">
                  <div className="name">Декабрь 2021</div>
                  <div className="text">Запуск бизнес – клуба Mira Net, Подведение итого года, конференция «Человек года»</div>
                </div>
              </div>

              <div className={`dot`}>
                <div className="dotText">
                  <div className="name">Февраль 2022</div>
                  <div className="text">Mira auto</div>
                </div>
              </div>

              <div className={`dot`}>
                <div className="dotText">
                  <div className="name">Март 2022</div>
                  <div className="text">Запуск Криптовалютной биржи Mira Exchange</div>
                </div>
              </div>

              <div className={`dot`}>
                <div className="dotText">
                  <div className="name">Апрель 2022</div>
                  <div className="text">Mira Home</div>
                </div>
              </div>

              <div className={`dot`}>
                <div className="dotText">
                  <div className="name">Май 2022</div>
                  <div className="text">Старт Финтех акселератора Mira Lab</div>
                </div>
              </div>

              {/*<div className={`dot`}>*/}
              {/*  <div className="dotText">*/}
              {/*    <div className="name">Июнь 2022</div>*/}
              {/*    <div className="text">Mira Indigo</div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/*<div className={`dot`}>*/}
              {/*  <div className="dotText">*/}
              {/*    <div className="name">Август 2022</div>*/}
              {/*    <div className="text">Запуск Mira AI</div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/*<div className={`dot`}>*/}
              {/*  <div className="dotText">*/}
              {/*    <div className="name">Сентябрь 2022</div>*/}
              {/*    <div className="text">Годовщина Mira, праздник для всех</div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/*<div className={`dot`}>*/}
              {/*  <div className="dotText">*/}
              {/*    <div className="name">Ноябрь 2022</div>*/}
              {/*    <div className="text">{'Крипто <анк'}</div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/*<div className={`dot`}>*/}
              {/*  <div className="dotText">*/}
              {/*    <div className="name">Февраль 2022</div>*/}
              {/*    <div className="text">Начало строительства университета Mira</div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </Style.DotWrapper>
          </Col>
        </Row>
      </Container>
    </Style.Wrapper>
  )
}

export default TimeLine;