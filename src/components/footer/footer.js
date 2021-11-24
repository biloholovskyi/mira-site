import React, {useEffect, useLayoutEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";

import Logo from "../logo/logo";
import FooterNav from "./footerNav/footerNav";
import MainButton from "../buttons/mainButton/mainButton";
import SocialList from "../socialList/socialList";

import * as Style from './styled'

import fon from './media/footer.svg'
import twitter from '../socialList/media/twitter.svg'
import linkedin from '../socialList/media/linkedin.svg';
import facebook from '../socialList/media/facebook.svg'
import whatsapp from '../socialList/media/watsap.svg'
import telegram from '../socialList/media/telegram.svg'

import ServerSettings from "../../service/serverSettings";

const Footer = () => {
  const [document, setDocument] = useState([]);

  // ширини экрана
  const [window, setWindow] = useState(0);

  const getDocuments = async () => {
    // axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    // axios.defaults.xsrfCookieName = 'csrftoken';
    //
    // const server = new ServerSettings();
    //
    // await axios.get(`${server.getApi()}api/documents/`)
    //   .then(res => {
    //     setDocument(res.data)
    //   }).catch(error => console.error(error))
  }

  useEffect(() => {
    // getDocuments().catch(error => console.error(error));
  }, [])

  // получаем ширину картинки
  const fonWith = () => {
    // получаем ширину внутреннего контейнера
    const innerContainerW = document.getElementById('footer-fon-wrapper').offsetWidth;
    console.log(window.innerWidth)
  }

  useLayoutEffect(() => {
    // window.addEventListener('resize', () => console.log('loh'))
  }, []);

  return (
    <Style.Footer className={'content-block'}>
      <Container>
        <Row>
          <Col lg={{span: 4}}>
            <Style.FooterFonWrapper id={'footer-fon-wrapper'}>
              <Style.FooterFon src={fon} alt={'fon'}/>
            </Style.FooterFonWrapper>
          </Col>
          <Col lg={{span: 8}}>
            <Style.FooterInfo>
              <Style.FooterNavWrapper>
                <Logo style575={{
                  logo: `
                    width: 39px;
                    height: 31.12px;
                    margin-right: 18.84px;
                  `,
                  text: `
                    width: 88.47px;
                    height: 29.98px; 
                  `
                }}/>
                {/*<FooterNav/>*/}
              </Style.FooterNavWrapper>
              <Style.FooterRightBlock>
                <h3>Начните зарабатывать вместе с Mira</h3>
                <MainButton
                  func={() => window.open('https://www.mira.fund')}
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
              </Style.FooterRightBlock>
            </Style.FooterInfo>

            <Style.FooterBottom>
              <div className="copyright">
                <div className="name">Copyright © 2021 MIRA</div>
                <div className="link">
                  {/*{*/}
                  {/*  document.map((i ,k) => {*/}
                  {/*    return (*/}
                  {/*      <a key={k} href={i.file}>{i.name}</a>*/}
                  {/*    )*/}
                  {/*  })*/}
                  {/*}*/}
                  <a target={'_blank'} href={'https://mira.fund/user_agreement_MIRA.pdf'}>Пользовательское соглашение</a>
                  <a target={'_blank'} href={'https://mira.fund/privacy_policy_MIRA.pdf'}>Политика конфиденциальности</a>
                </div>
              </div>

              <SocialList/>
            </Style.FooterBottom>
          </Col>
        </Row>
      </Container>
    </Style.Footer>
  )
}

export default Footer;