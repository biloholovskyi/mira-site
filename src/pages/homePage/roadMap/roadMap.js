import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import TimeLine from "./timeLine/timeLine";

import * as Style from './styled'

const RoadMap = () => {
  return (
    <Style.Wrapper>
      <Container>
        <Row>
          <Col>
            <h3>Дорожная карта <br/> развития проекта</h3>
          </Col>
        </Row>
      </Container>

      <TimeLine/>
    </Style.Wrapper>
  )
}

export default RoadMap;