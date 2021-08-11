import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import {Container, Row, Col} from "react-bootstrap";

import DefaultTitle from "../../../components/defaultTitle/defaultTitle";
import SliderItem from "./sliderItem/sliderItem";

import * as Style from './styled'
import axios from "axios";
import ServerSettings from "../../../service/serverSettings";
//import './slider.scss'

const Partners = () => {
  const [slide, setSlide] =useState([]);

  const getSlider = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/slider/`)
      .then(res => {
        setSlide(res.data)
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getSlider().catch(error => console.error(error));
  }, [])

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
              {
                slide.map((item, k) => {
                  return (
                    <SliderItem key={k} item={item}/>
                  )
                })
              }
            </Slider>
          </Col>
        </Row>
      </Container>
    </Style.Wrapper>
  )
}

export default Partners;