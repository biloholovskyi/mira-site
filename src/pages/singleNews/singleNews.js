import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";

import {SingleNewsWrap, Text, NewsImg} from './styled';
import DefaultTitle from "../../components/defaultTitle/defaultTitle";
import Footer from "../../components/footer/footer";
import axios from "axios";
import ServerSettings from "../../service/serverSettings";
import SocialList from "../../components/socialList/socialList";

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

  // формат даты
  const formatDate = (string) => {
    let options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(string).toLocaleDateString(['ru'], options);
  }

  return (
    <>
      <SingleNewsWrap>
        <Container>
          <Row>
            <Col>
              <DefaultTitle text={currentNews.name} style={{marginBottom: 40, fontSize: 28}}/>
              <div className="desc">Bringing code closer to reality</div>
              <div className="news_info">
                <div className="left">
                  <div className="top">Опубликовано</div>
                  <div className="bottom">{formatDate(currentNews.created_at)}</div>
                </div>

                <SocialList/>

              </div>
            </Col>
          </Row>
        </Container>
        <NewsImg className={'lg_img'} src={currentNews.file} alt="image"/>
        <Container>
          <Row>
            <Col>
              <Text dangerouslySetInnerHTML={{ __html: currentNews.text }}/>
            </Col>
          </Row>
          <Row>
            <NewsImg className={'md_img'} src={currentNews.file} alt="image"/>
          </Row>
          <Row>
            <NewsImg className={'sm_img'} src={currentNews.file} alt="image"/>
          </Row>
        </Container>
      </SingleNewsWrap>
      {/*<Footer/>*/}
    </>
  )
}

export default SingleNews;