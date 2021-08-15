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
              {
                roadMap.map((item, k) => {
                  const active = k === 0 && 'dot--active';
                  const top = k % 2 && 'dot--top';

                  return (
                    <div key={k} className={`dot ${active} ${top}`}>
                      <div className="dotText">
                        <div className="name">{item.date}</div>
                        <div className="text">{item.title}</div>
                      </div>
                    </div>
                  )
                })
              }
            </Style.DotWrapper>
          </Col>
        </Row>
      </Container>
    </Style.Wrapper>
  )
}

export default TimeLine;