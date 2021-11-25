import React, {useEffect, useState} from "react"
import {Container, Row, Col} from "react-bootstrap";

import MainBlock from "./mainBlock/mainBlock";
import MainDesc from "./mainDesc/mainDesc";
import DefaultTitle from "../../components/defaultTitle/defaultTitle";
import MainButton from "../../components/buttons/mainButton/mainButton";
import RoadMap from "./roadMap/roadMap";

import * as Style from './styled'

import fire from './media/fire.svg'

import depositFon from './media/image.png'
import autoFon from './media/image-phone.png'
import autoFon2 from './media/image-phone-small.png'
import autoFon3 from './media/image-phone2.png'
import estate from './media/image-estate.png'
import estate2 from './media/image-estate2.png'
import estate3 from './media/image-estate-small.png'
import marketImg from './media/market.png'
import universityImg from './media/university.png'

const HomePage = () => {
  const listenScrollEvent = (event) => {
    if (window.scrollY > 300) {
      const tickerTop = document.getElementById('tickers_top')
      const tickerBottom = document.getElementById('tickers_bottom')
      tickerTop.style.transform = 'translateX(' + window.scrollY * -0.1 + 'px)';
      tickerBottom.style.transform = 'translateX(' + (window.scrollY - 3200) * 0.1 + 'px)';
    }
    if (window.scrollY > 1300) {
      const image = document.getElementById('first');
      image.classList.add('show');
    }
    if (window.scrollY > 2100) {
      const bigImage = document.getElementById('second');
      const smallImage = document.getElementById('small');
      bigImage.classList.add('show');
      smallImage.classList.add('show');
    }
    if (window.scrollY > 2800) {
      const bigImage2 = document.getElementById('third');
      const smallImage2 = document.getElementById('small2');
      bigImage2.classList.add('show');
      smallImage2.classList.add('show');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <Style.Wrapper>
      <MainBlock/>
      <MainDesc/>

      <>
        {/* mira deposit */}
        <Style.TextAndImage className={'content-block'}>
          <Container>
            <Row>
              <Col lg={6}>
                <div className="text">

                  <DefaultTitle
                    text='Mira deposit'
                    style={{
                      marginBottom: '40px'
                    }}
                  />

                  <p className="desc">Первые начисления дивидендов поступают через 72 часа по МСК после ввода депозита в
                    работу. Сумма депозита от 100$. По истечению 1 года программа заканчивает свою работу и ежедневные
                    проценты перестают начисляться. Позже будет доступен лимит по депозитам на суммы $15 000, $20 000,
                    $35000, $50 000, $100 000</p>



                  <div className="info">
                    <div className="info-item">
                      <div className="name">Сумма депозита</div>
                      <div className="value">от $100</div>
                    </div>

                    <div className="info-item">
                      <div className="name">Ставка</div>
                      <div className="value">до 0.8-1.1%</div>
                    </div>

                    <MainButton
                      func={() => window.open('https://www.mira.fund/signup')}
                      text={'Оформить программу'}
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
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={depositFon} alt="image" className="image image-first" id={'first'}/>
              </Col>
            </Row>
          </Container>
        </Style.TextAndImage>
        {/* mira deposit */}

        {/* mira university */}
        <Style.TextAndImage className={'content-block'}>
          <Container className={'no-relative'}>
            <Row className={'no-relative'}>
              <div className={'col-lg-6 col-12 order-2 order-lg-1'}>
                <div className="text text-z">

                  <DefaultTitle
                    text='Mira university'
                    style={{
                      marginBottom: '40px'
                    }}
                  />

                  <p className="desc">MIRA University  - университет будущего. Это больше, чем онлайн образование, это актуальные знания, применимые как в жизни, так и в работе.
                    Занятия происходят в дуальной форме, где теория неотделима от практики. Благодаря этому, вы сможете окупить стоимость курса ещё во время обучения.
                    <br/><br/>Программа «Профессия - ТРЕЙДЕР» уже была опробована на фокус-группах и зарекомендовала себя как сильная, конкурентоспособная база для дальнейшей работы на бирже.
                  </p>



                  <div className="info">
                    <div className="info-item">
                      <div className="name">Стоимость курса</div>
                      <div className="value">от $70</div>
                    </div>


                    <MainButton
                      func={() => window.open('https://mira.school/kurs')}
                      text={'Хочу стать трейдером!'}
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
                  </div>
                </div>
              </div>
              <div className={'col-lg-6 col-12 order-1 order-lg-2 no-relative'} >
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={universityImg} alt="image" className="university-img" id={'first'}/>
              </div>
            </Row>
          </Container>
        </Style.TextAndImage>
        {/* mira university */}

        {/* mira market */}
        <Style.TextAndImage className={'content-block'}>
          <Container>
            <Row>
              <Col lg={6} className={'relative'}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={marketImg} alt="image" className="full-img" id={'first'}/>
              </Col>
              <Col lg={6}>
                <div className="text">

                  <DefaultTitle
                    text='Mira market'
                    style={{
                      marginBottom: '40px'
                    }}
                  />

                  <p className="desc">Внутренняя платформа MIRA, на которой партнёры компании могут покупать различные товары и услуги за внутреннюю валюту MIRA.
                    <br/><br/>Основная цель MIRA Marketplace - обеспечить качественными товарами популярных брендов и марок членов финансовой экосистемы MIRA.</p>



                  <div className="info">
                    <div className="info-item">
                      <div className="name">Первый взнос</div>
                      <div className="value">от 35%</div>
                    </div>

                    <div className="info-item">
                      <div className="name">Срок получения</div>
                      <div className="value">от 100 дней</div>
                    </div>

                    <MainButton
                      func={() => window.open('https://mira.fund/signup')}
                      text={'Оформить программу'}
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
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Style.TextAndImage>
        {/* mira market */}

        {/* mira auto */}
        <Style.TextAndImage bg={'#212121'}>
          <Container>
            <Row>
              <Col lg={6} className={'col-relative col-own'}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={autoFon2} alt="image" className="image-small" id={'small'}/>
                <img src={autoFon} alt="image" className="image image-phone" id={'second'}/>
              </Col>

              <Col lg={6}>
                <div className="text">
                  <div className="fast">
                    <img src={fire} alt="fire"/>
                    <div className="fast-text">Скоро</div>
                  </div>

                  <DefaultTitle
                    text={'Mira AUTO'}
                    style={{
                      marginBottom: '40px'
                    }}
                  />

                  <p className="desc">{'Компания MIRA предлагает авто-программу MIRA Auto, по которой вы сможете приобрести автомобиль за 35% от его розничной стоимости.'}</p>

                  <div className="info">
                    {/*<div className="info-item">*/}
                    {/*  <div className="name">Первый взнос</div>*/}
                    {/*  <div className="value">от 30%</div>*/}
                    {/*</div>*/}

                    {/*<div className="info-item">*/}
                    {/*  <div className="name">Срок получения</div>*/}
                    {/*  <div className="value">100 дней</div>*/}
                    {/*</div>*/}

                    {/*<MainButton*/}
                    {/*  func={() => window.open('https://www.mira.fund')}*/}
                    {/*  text={'Оформить программу'}*/}
                    {/*  type={'lg'}*/}
                    {/*  media={*/}
                    {/*    `*/}
                    {/*    @media (max-width: 575px) {*/}
                    {/*      width: 100%;*/}
                    {/*      text-align: center;*/}
                    {/*    }*/}
                    {/*  `*/}
                    {/*  }*/}
                    {/*/>*/}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Style.TextAndImage>
        {/* /mira auto */}

        {/* mira estate */}
        <Style.TextAndImage>
          <Container>
            <Row>
              <Col lg={6}>
                <div className="text">
                  <div className="fast">
                    <img src={fire} alt="fire"/>
                    <div className="fast-text">Скоро</div>
                  </div>

                  <DefaultTitle
                    text={'Mira estate'}
                    style={{
                      marginBottom: '40px'
                    }}
                  />

                  <p className="desc">{'Компания MIRA предлагает квартирную программу MIRA Estate, по которой вы сможете приобрести квартиру/дом своей мечты за 35% от цены.'}</p>

                  <div className="info info-start">
                    {/*<div className="info-item">*/}
                    {/*  <div className="name">Первый взнос</div>*/}
                    {/*  <div className="value">от 30%</div>*/}
                    {/*</div>*/}

                    {/*<div className="info-item">*/}
                    {/*  <div className="name">Срок получения</div>*/}
                    {/*  <div className="value">100 дней</div>*/}
                    {/*</div>*/}
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={estate3} alt="image" className="image-small-keys" id={'small2'}/>
                <img src={estate} alt="image" className="image image-third" id={'third'}/>
              </Col>
            </Row>
          </Container>
        </Style.TextAndImage>
        {/* /mira estate */}
      </>

      <RoadMap/>

      {/*<Partners/>*/}

      {/*<Footer/>*/}
    </Style.Wrapper>
  )
}

export default HomePage;