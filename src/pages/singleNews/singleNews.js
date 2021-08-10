import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import {SingleNewsWrap, Text, NewsImg} from './styled';
import DefaultTitle from "../../components/defaultTitle/defaultTitle";
import Footer from "../../components/footer/footer";

const SingleNews = () => {
  return (
    <>
      <SingleNewsWrap>
        <Container>
          <Row>
            <Col>
              <DefaultTitle text={'9 советов онлайн-продавцам для жаркого лета'} style={{marginBottom: 40, fontSize: 28}}/>
            </Col>
          </Row>
          <Row>
            <NewsImg src="http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg" alt="image"/>
          </Row>
          <Row>
            <Col>
              <Text>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <ul>
                  <li>Lorem Ipsum passages</li>
                  <li>Lorem Ipsum passages</li>
                  <li>Lorem Ipsum passages</li>
                  <li>Lorem Ipsum passages</li>
                </ul>
                <DefaultTitle text={'9 советов онлайн'} style={{marginBottom: 15, fontSize: 16}}/>
                <ol>
                  <li>Lorem Ipsum passages</li>
                  <li>Lorem Ipsum passages</li>
                  <li>Lorem Ipsum passages</li>
                  <li>Lorem Ipsum passages</li>
                </ol>
              </Text>
            </Col>
          </Row>
        </Container>
      </SingleNewsWrap>
      {/*<Footer/>*/}
    </>
  )
}

export default SingleNews;