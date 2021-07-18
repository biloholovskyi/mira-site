import React, {useEffect} from "react"
import {Container, Row, Col} from "react-bootstrap";

import MainBlock from "./mainBlock/mainBlock";
import MainDesc from "./mainDesc/mainDesc";
import DefaultTitle from "../../components/defaultTitle/defaultTitle";
import MainButton from "../../components/buttons/mainButton/mainButton";
import Footer from "../../components/footer/footer";
import RoadMap from "./roadMap/roadMap";
import Partners from "./partners/partners";

import * as Style from './styled'

import imgDeposit from './media/image.png'
import imgPhone from './media/image-phone2.png'
import imgPhoneSmall from './media/image-phone-small.png'
import fire from './media/fire.svg'
import imgEstate from './media/image-estate2.png'
import imgEstateSmall from './media/image-estate-small.png'

const HomePage = () => {

  const listenScrollEvent = (event) => {
    if(window.scrollY > 300) {
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

      {/* mira deposit */}
      <Style.TextAndImage className={'content-block'}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="text">
                <DefaultTitle
                  text={'Mira deposit'}
                  style={{
                    marginBottom: '40px'
                  }}
                />

                <p className="desc">Инвестирование в базовый индекс MIRA Index позволяет вам надежно и и с высоким
                  уровнем дохода разместить средства в лучшие финансовые активы десятилетия:</p>

                <div className="item">Криптовалюты (трейдинг внутри дня, фарминг, стейкинг)</div>
                <div className="item">Фондовый рынок (акции крупных производственных компаний, IT-стартапов)</div>
                <div className="item">Инвестиции в IT-стартапы на ранней стадии перед выходом на Pre-IPO/IPO</div>
                <div className="item">Торги на рынке FOREX</div>
                <div className="item">Заработок на программах обучения Mira University</div>

                <div className="info">
                  <div className="info-item">
                    <div className="name">Сумма депозита</div>
                    <div className="value">от $100</div>
                  </div>

                  <div className="info-item">
                    <div className="name">Ставка</div>
                    <div className="value">до 231%</div>
                  </div>

                  <MainButton
                    text={'Оформить депозит'}
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
              <img src={imgDeposit} alt="image" className="image image-first" id={'first'}/>
            </Col>
          </Row>
        </Container>
      </Style.TextAndImage>
      {/* /mira deposit */}

      {/* mira auto */}
      <Style.TextAndImage bg={'#212121'}>
        <Container>
          <Row>
            <Col lg={6} className={'col-relative col-own'}>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img src={imgPhoneSmall} alt="image" className="image-small" id={'small'}/>
              <img src={imgPhone} alt="image" className="image image-phone" id={'second'}/>
            </Col>

            <Col lg={6}>
              <div className="text">
                <DefaultTitle
                  text={'Mira AUTO'}
                  style={{
                    marginBottom: '40px'
                  }}
                />

                <p className="desc">Компания MIRA предлагает авто-программу MIRA Auto, по которой вы сможете приобрести
                  автомобиль за 35% от его розничной стоимости в течение 100 дней.</p>

                <h4 className="small-title">Условия для активации Авто-программы:</h4>

                <div className="item">Личный уровень 5 (1 линия 5 человек, сумма личного депозита 3000 MRC</div>
                <div className="item">Сумма личного депозита 1 линии 8000 MRC</div>
                <div className="item">Сумма общей структуры 40000 MRC</div>

                <div className="info">
                  <div className="info-item">
                    <div className="name">Первый взнос</div>
                    <div className="value">от 30%</div>
                  </div>

                  <div className="info-item">
                    <div className="name">Срок получения</div>
                    <div className="value">100 дней</div>
                  </div>

                  <MainButton
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

                <p className="desc">Компания MIRA предлагает квартирную программу MIRA Estate, по которой вы сможете
                  приобрести квартиру/дом своей мечты за 35% от цены в течение всего 100 дней.</p>

                <h4 className="small-title">Условия для активации Квартирной программы:</h4>

                <div className="item">Личный уровень 8 (1 линия 5 человек, сумма личного депозита 10000 MRC</div>
                <div className="item">1 линия 30000 MRC</div>
                <div className="item">Cтруктура 500000 MRC</div>

                <div className="info info-start">
                  <div className="info-item">
                    <div className="name">Первый взнос</div>
                    <div className="value">35%</div>
                  </div>

                  <div className="info-item">
                    <div className="name">Срок получения</div>
                    <div className="value">100 дней</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img src={imgEstateSmall} alt="image" className="image-small-keys" id={'small2'}/>
              <img src={imgEstate} alt="image" className="image image-third" id={'third'}/>
            </Col>
          </Row>
        </Container>
      </Style.TextAndImage>
      {/* /mira estate */}

      <RoadMap/>

      <Partners/>

      <Footer/>
    </Style.Wrapper>
  )
}

export default HomePage;