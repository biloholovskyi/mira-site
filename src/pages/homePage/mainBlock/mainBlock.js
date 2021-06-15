import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import MainButton from "../../../components/buttons/mainButton/mainButton";

import * as Style from './styled'

import play from './media/play.svg'

const MainBlock = () => {
  return (
    <Style.Wrapper>
      <Style.Gradient/>
      <Container>
        <Row>
          <Col lg={7}>
            <Style.Title>Дарим финансовую независимость каждому</Style.Title>
            <Style.ButtonsBlock>
              <MainButton text={'Зарегистрироваться'} type={'lg'}/>
              <Style.WatchButton>
                <img src={play} alt="play"/>
                <div className="text">Смотреть видео</div>
              </Style.WatchButton>
            </Style.ButtonsBlock>
          </Col>
        </Row>
      </Container>
    </Style.Wrapper>
  )
}

export default MainBlock