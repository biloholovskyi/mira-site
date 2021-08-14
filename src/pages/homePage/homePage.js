import React, {useEffect, useState} from "react"
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
import axios from "axios";
import ServerSettings from "../../service/serverSettings";

const HomePage = () => {
  const [mainContent, setMainContent] = useState({});
  const [miraDeposit, setMiraDeposit] = useState({});
  const [miraAuto, setMiraAuto] = useState({});
  const [miraEstate, setMiraEstate] = useState({});

  const getMainContent = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/main/`)
      .then(res => {
        setMainContent(res.data[0])
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getMainContent().catch(error => console.error(error));
  }, [])

  const getAllPrograms = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/programs/`)
      .then(res => {
        setMiraDeposit(res.data[0])
        setMiraAuto(res.data[1])
        setMiraEstate(res.data[2])
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getAllPrograms().catch(error => console.error(error));
  }, [])

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
      <MainBlock mainContent={mainContent}/>
      <MainDesc mainContent={mainContent}/>

      <>
        {/* mira deposit */}
        <Style.TextAndImage  className={'content-block'}>
          <Container>
            <Row>
              <Col lg={6}>
                <div className="text">
                  {
                    miraDeposit.announcement === 'True' && (
                      <div className="fast">
                        <img src={fire} alt="fire"/>
                        <div className="fast-text">Скоро</div>
                      </div>
                    )
                  }

                  <DefaultTitle
                    text={miraDeposit.title}
                    style={{
                      marginBottom: '40px'
                    }}
                  />

                  <p className="desc">{miraDeposit.short_text}</p>

                  <h4 className="small-title">{miraDeposit.title_conditions}</h4>

                  {
                    miraDeposit.list_conditions && miraDeposit.list_conditions.split('\n').map(item => {
                      return <div className="item">{item}</div>
                    })
                  }

                  <div className="info">
                    {
                      miraDeposit.sum !== null && (
                        <div className="info-item">
                          <div className="name">Сумма депозита</div>
                          <div className="value">от ${miraDeposit.sum}</div>
                        </div>
                      )
                    }
                    {
                      miraDeposit.rate !== null && (
                        <div className="info-item">
                          <div className="name">Ставка</div>
                          <div className="value">до {miraDeposit.rate}%</div>
                        </div>
                      )
                    }

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
              <Col lg={6}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={miraDeposit.img} alt="image" className="image image-first" id={'first'}/>
              </Col>
            </Row>
          </Container>
        </Style.TextAndImage>
        {/* mira deposit */}

        {/* mira auto */}
        <Style.TextAndImage bg={'#212121'}>
          <Container>
            <Row>
              <Col lg={6} className={'col-relative col-own'}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={miraAuto.small_img} alt="image" className="image-small" id={'small'}/>
                <img src={miraAuto.img} alt="image" className="image image-phone" id={'second'}/>
              </Col>

              <Col lg={6}>
                <div className="text">
                  {
                    miraAuto.announcement === 'True' && (
                      <div className="fast">
                        <img src={fire} alt="fire"/>
                        <div className="fast-text">Скоро</div>
                      </div>
                    )
                  }

                  <DefaultTitle
                    text={miraAuto.title}
                    style={{
                      marginBottom: '40px'
                    }}
                  />

                  <p className="desc">{miraAuto.short_text}</p>

                  <h4 className="small-title">{miraAuto.title_conditions}</h4>

                  {
                    miraAuto.list_conditions && miraAuto.list_conditions.split('\n').map(item => {
                      return <div className="item">{item}</div>
                    })
                  }

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
                  {
                    miraEstate.announcement === 'True' && (
                      <div className="fast">
                        <img src={fire} alt="fire"/>
                        <div className="fast-text">Скоро</div>
                      </div>
                    )
                  }

                  <DefaultTitle
                    text={miraEstate.title}
                    style={{
                      marginBottom: '40px'
                    }}
                  />

                  <p className="desc">{miraEstate.short_text}</p>

                  <h4 className="small-title">{miraEstate.title_conditions}</h4>

                  {
                    miraEstate.list_conditions && miraEstate.list_conditions.split('\n').map(item => {
                      return <div className="item">{item}</div>
                    })
                  }

                  <div className="info info-start">
                    <div className="info-item">
                      <div className="name">Первый взнос</div>
                      <div className="value">{miraEstate.first_installment}%</div>
                    </div>

                    <div className="info-item">
                      <div className="name">Срок получения</div>
                      <div className="value">{miraEstate.term}</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={miraEstate.small_img} alt="image" className="image-small-keys" id={'small2'}/>
                <img src={miraEstate.img} alt="image" className="image image-third" id={'third'}/>
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