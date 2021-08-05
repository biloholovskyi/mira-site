import React from 'react'
import {Container, Row, Col} from "react-bootstrap";

import * as Style from './styled'

const SchoolContent = () => {
  const openAccordItem = (e) => {
    e.currentTarget.classList.toggle('open')
  }

  return (
    <Style.Wrapper>
      <Container>
        <Row>
          <Col>
            <Style.TabWrapper>
              <Style.TabItem active>Все рубрики</Style.TabItem>
              <Style.TabItem>Криптовалюты</Style.TabItem>
              <Style.TabItem>Ценные бумаги</Style.TabItem>
              <Style.TabItem>Акции</Style.TabItem>
              <Style.TabItem>Биржи</Style.TabItem>
              <Style.TabItem>Россия</Style.TabItem>
              <Style.TabItem>Сельское хозяйство</Style.TabItem>
            </Style.TabWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <Style.AccordItem onClick={(e) => openAccordItem(e)}>
              <div className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Style.AccordIndicator>
                  <div className="item"/>
                  <div className="item"/>
                </Style.AccordIndicator><
                /div>
              <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus
                egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,
                fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.
                Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt
                nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse
                platea dictumst.
              </div>
            </Style.AccordItem>

            <Style.AccordItem onClick={(e) => openAccordItem(e)}>
              <div className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Style.AccordIndicator>
                  <div className="item"/>
                  <div className="item"/>
                </Style.AccordIndicator><
                /div>
              <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus
                egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,
                fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.
                Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt
                nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse
                platea dictumst.
              </div>
            </Style.AccordItem>

            <Style.AccordItem onClick={(e) => openAccordItem(e)}>
              <div className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Style.AccordIndicator>
                  <div className="item"/>
                  <div className="item"/>
                </Style.AccordIndicator><
                /div>
              <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus
                egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,
                fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.
                Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt
                nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse
                platea dictumst.
              </div>
            </Style.AccordItem>

            <Style.AccordItem onClick={(e) => openAccordItem(e)}>
              <div className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Style.AccordIndicator>
                  <div className="item"/>
                  <div className="item"/>
                </Style.AccordIndicator><
                /div>
              <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus
                egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,
                fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.
                Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt
                nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse
                platea dictumst.
              </div>
            </Style.AccordItem>
          </Col>
        </Row>
      </Container>
    </Style.Wrapper>
  )
}

export default SchoolContent