import React from 'react'
import {Container, Row, Col} from "react-bootstrap";

import Footer from "../../components/footer/footer";
import DefaultTitle from "../../components/defaultTitle/defaultTitle";
import SocialList from "../../components/socialList/socialList";
import ContactsForm from "./contactsForm/contactsForm";

 import * as Style from './styled'

const Contacts = () => {
	return (
	  <>
      <Style.Wrapper>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <DefaultTitle text={'Контакты'}/>

              <Style.ContactsBlock>
                <div className="item">
                  <div className="name">Партнерам</div>
                  <a href={'mailto:partners@mira.com'} className="contact">partners@mira.com</a>
                </div>

                <div className="item">
                  <div className="name">Поддержка</div>
                  <a href={'mailto:support@mira.com'} className="contact">support@mira.com</a>
                </div>

                <div className="item">
                  <div className="name">СМИ и реклама</div>
                  <a href={'mailto:media@mira.com'} className="contact">media@mira.com</a>
                </div>

                <div className="item">
                  <div className="name">Другие вопросы</div>
                  <a href={'mailto:hello@mira.com'} className="contact">hello@mira.com</a>
                </div>

                <div className="item item--social">
                  <div className="name">Наши соцсети</div>

                  <SocialList/>
                </div>
              </Style.ContactsBlock>
            </Col>

            <Col xl={6} lg={6} md={12} sm={12}>
              <ContactsForm/>
            </Col>
          </Row>
        </Container>
      </Style.Wrapper>
      {/*<Footer/>*/}
    </>
	)
}

export default Contacts