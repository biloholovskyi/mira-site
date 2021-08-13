import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from "react-bootstrap";

import Footer from "../../components/footer/footer";
import DefaultTitle from "../../components/defaultTitle/defaultTitle";
import SocialList from "../../components/socialList/socialList";
import ContactsForm from "./contactsForm/contactsForm";

 import * as Style from './styled'
import axios from "axios";
import ServerSettings from "../../service/serverSettings";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  const getAllContacts = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/contacts/`)
      .then(res => {
        setContacts(res.data)
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getAllContacts().catch(error => console.error(error));
  }, [])

	return (
	  <>
      <Style.Wrapper>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <DefaultTitle text={'Контакты'}/>

              <Style.ContactsBlock>
                {
                  contacts.map((item ,key) => {
                    return (
                      <div key={key} className="item">
                        <div className="name">{item.name}</div>
                        <a href={`mailto:${item.link}`} className="contact">{item.link}</a>
                      </div>
                    )
                  })
                }

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
      <div style={{display: 'none'}} id="tickers_top" />
      <div style={{display: 'none'}} id="tickers_bottom" />
    </>
	)
}

export default Contacts