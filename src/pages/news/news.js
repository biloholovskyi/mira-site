import React from 'react'
import {Container, Row, Col} from "react-bootstrap";

import DefaultTitle from "../../components/defaultTitle/defaultTitle";
import NewsCart from "./newsCart/newsCart";
import Pagination from "../../components/pagination/pagination";

import * as Style from './styled'

const News = () => {
	return (
		<Style.Wrapper>
      <Container>
        <Row>
          <Col>
            <DefaultTitle text={'новости'} style={{marginBottom: 60}}/>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
          <Col lg={3}>
            <NewsCart/>
          </Col>
        </Row>
      </Container>
      <Pagination style={{marginTop: 20}}/>
		</Style.Wrapper>
	)
}

export default News