import React from "react"
import {Container, Row, Col} from "react-bootstrap";

import MainBlock from "./mainBlock/mainBlock";
import MainDesc from "./mainDesc/mainDesc";
import DefaultTitle from "../../components/defaultTitle/defaultTitle";
import MainButton from "../../components/buttons/mainButton/mainButton";

import * as Style from './styled'

import imgDeposit from './media/image.png'

const HomePage = () => {
  return (
    <Style.Wrapper>
      <MainBlock/>
      <MainDesc/>

      {/* mira deposit */}
      <Style.TextAndImage>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="text">
                <DefaultTitle
                  text={'Mira deposit'}
                  style={{
                    marginBottom: '40px'
                  }}
                />

                <p className="desc">Инвестирование в базовый индекс MIRA Index позволяет вам надежно и и с высоким
                  уровнем дохода разместить средства в лучшие финансовые активы десятилетия:</p>

                <div className="item">Криптовалюты (трейдинг внутри дня, фарминг, стейкинг)</div>
                <div className="item">Фондовый рынок (акции крупных производственных компаний, IT-стартапов)</div>
                <div className="item">Инвестиции в IT-стартапы на ранней стадии перед выходом на Pre-IPO/IPO</div>
                <div className="item">Торги на рынке FOREX</div>
                <div className="item">Заработок на программах обучения Mira University</div>

                <div className="info">
                  <div className="info-item">
                    <div className="name">Сумма депозита</div>
                    <div className="value">от $100</div>
                  </div>

                  <div className="info-item">
                    <div className="name">Ставка</div>
                    <div className="value">до 231%</div>
                  </div>

                  <MainButton text={'Оформить депозит'} type={'lg'}/>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img src={imgDeposit} alt="image" className="image image-first"/>
            </Col>
          </Row>
        </Container>
      </Style.TextAndImage>
      {/* /mira deposit */}
    </Style.Wrapper>
  )
}

export default HomePage;