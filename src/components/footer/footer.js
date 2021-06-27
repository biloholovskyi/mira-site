import React, {useEffect, useLayoutEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";

import Logo from "../logo/logo";
import FooterNav from "./footerNav/footerNav";
import MainButton from "../buttons/mainButton/mainButton";

import * as Style from './styled'

import fon from './media/footer.svg'
import twitter from './media/twitter.svg'
import linkedin from './media/linkedin.svg';
import facebook from './media/facebook.svg'
import whatsapp from './media/watsap.svg'
import telegram from './media/telegram.svg'

const Footer = () => {
  // ширини экрана
  const [window, setWindow] = useState(0);

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
    <Style.Footer>
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
                <FooterNav/>
              </Style.FooterNavWrapper>
              <Style.FooterRightBlock>
                <h3>Начните зарабатывать вместе с Mira</h3>
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
              </Style.FooterRightBlock>
            </Style.FooterInfo>

            <Style.FooterBottom>
              <div className="copyright">
                <div className="name">Copyright © 2021 MIRA</div>
                <div className="link">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#">Пользовательское соглашение</a>
                  <div className="delimit">/</div>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#">Политика конфиденциальности</a>
                </div>
              </div>

              <Style.FooterSocial>
                <Style.FooterSocialItem href={'#'}>
                  <img src={twitter} alt="social"/>
                </Style.FooterSocialItem>

                <Style.FooterSocialItem href={'#'}>
                  <img src={linkedin} alt="social"/>
                </Style.FooterSocialItem>

                <Style.FooterSocialItem href={'#'}>
                  <img src={facebook} alt="social"/>
                </Style.FooterSocialItem>

                <Style.FooterSocialItem href={'#'}>
                  <img src={whatsapp} alt="social"/>
                </Style.FooterSocialItem>

                <Style.FooterSocialItem href={'#'}>
                  <img src={telegram} alt="social"/>
                </Style.FooterSocialItem>
              </Style.FooterSocial>
            </Style.FooterBottom>
          </Col>
        </Row>
      </Container>
    </Style.Footer>
  )
}

export default Footer;