import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";

import {SingleNewsWrap, Text, NewsImg} from './styled';
import DefaultTitle from "../../components/defaultTitle/defaultTitle";
import Footer from "../../components/footer/footer";
import axios from "axios";
import ServerSettings from "../../service/serverSettings";

const SingleNews = ({newsId}) => {
  const [currentNews, setCurrentNews] = useState([]);


  const getAllNews = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/news/`)
      .then(res => {
        const news = res.data.find(u => u.id.toString() === newsId.toString())
        setCurrentNews(news)
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getAllNews().catch(error => console.error(error));
  }, [])
  return (
    <>
      <SingleNewsWrap>
        <Container>
          <Row>
            <Col>
              <DefaultTitle text={currentNews.name} style={{marginBottom: 40, fontSize: 28}}/>
            </Col>
          </Row>
          <Row>
            <NewsImg src={currentNews.file} alt="image"/>
          </Row>
          <Row>
            <Col>
              <Text dangerouslySetInnerHTML={{ __html: currentNews.text }}/>
            </Col>
          </Row>
        </Container>
      </SingleNewsWrap>
      {/*<Footer/>*/}
    </>
  )
}

export default SingleNews;