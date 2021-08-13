import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from "react-bootstrap";

import DefaultTitle from "../../components/defaultTitle/defaultTitle";
import NewsCart from "./newsCart/newsCart";
import Pagination from "../../components/pagination/pagination";
import Footer from "../../components/footer/footer";

import * as Style from './styled'
import axios from "axios";
import ServerSettings from "../../service/serverSettings";


const News = () => {
  const [newsArray, setNewsArray] = useState([])
  const [paginationPages, setPaginationPages] = useState(1);
  const [paginationPageActive, setPaginationPageActive] = useState(1);
  const [news, setNews] = useState([]);

  const getAllNews = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/news/`)
      .then(res => {
        setNews(res.data)
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getAllNews().catch(error => console.error(error));
  }, [])

  useEffect(() => {
    // количество всех страниц
    const pageNumbers = Math.ceil(news.length / 16);
    console.log(pageNumbers)
    setNewsArray(news)
    setPaginationPages(pageNumbers)
  }, [news])

  const newsRender = newsArray.slice(16 * (paginationPageActive - 1), 16 * paginationPageActive).map((item, key) => {
    return (
      <Col lg={3} key={key}>
        <NewsCart data={item}/>
      </Col>
    )
  })

  const switchPage = (number) => {
    setPaginationPageActive(number)
  }

  return (
    <>
      <Style.Wrapper>
        <Container>
          <Row>
            <Col>
              <DefaultTitle text={'новости'} style={{marginBottom: 60}}/>
            </Col>
          </Row>
          <Row>
            {newsRender}
          </Row>
        </Container>
        <Pagination style={{marginTop: 20}} pages={paginationPages} activePage={paginationPageActive} switchFunc={switchPage}/>
      </Style.Wrapper>
      {/*<Footer/>*/}
      <div style={{display: 'none'}} id="tickers_top" />
      <div style={{display: 'none'}} id="tickers_bottom" />
    </>
  )
}

export default News