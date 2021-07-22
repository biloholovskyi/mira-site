import React from "react";
import Slider from "react-slick";
import {Container, Row, Col} from "react-bootstrap";

import DefaultTitle from "../../../components/defaultTitle/defaultTitle";
import SliderItem from "./sliderItem/sliderItem";

import * as Style from './styled'
// import './slider.scss'

const Partners = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <Style.Wrapper className={'content-block'}>
      <Container>
        <Row>
          <Col>
            <DefaultTitle
              text={'Наши партнеры'}
              style={{marginBottom: 64}}
              media={
                `
                  @media (max-width: 475px) {
                    max-width: 200px;
                  }
                `
              }/>

            <Slider {...settings} className={'partners-slider'}>
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>
              <SliderItem/>
            </Slider>
          </Col>
        </Row>
      </Container>
    </Style.Wrapper>
  )
}

export default Partners;