import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";

import MainButton from "../../../components/buttons/mainButton/mainButton";
import FullScreenVideo from "./fullScreenVideo/fullScreenVideo";

import * as Style from './styled'
import play from './media/play.svg'

const MainBlock = () => {
  const [showVideo, setShowVideo] = useState(false);

  const showFullVideo = () => {
    setShowVideo(!showVideo)
  }

  return (
    <Style.Wrapper>
      <Style.ParalaxImg/>
      <Style.Gradient/>
      <Container>
        <Row>
          <Col lg={7}>
            <Style.Title>Дарим финансовую независимость каждому</Style.Title>
            <Style.ButtonsBlock>
              <MainButton
                text={'Зарегистрироваться'}
                type={'lg'}
                media={
                  `
                    @media (max-width: 575px) {
                      width: 100%;
                      text-align: center;
                    }
                  `
                }
              />
              <Style.WatchButton
                onClick={showFullVideo}
              >
                <img src={play} alt="play"/>
                <div className="text">Смотреть видео</div>
              </Style.WatchButton>
            </Style.ButtonsBlock>
          </Col>
        </Row>
      </Container>
      {
        showVideo && (
          <FullScreenVideo
            close={showFullVideo}
          />
        )
      }
    </Style.Wrapper>
  )
}

export default MainBlock