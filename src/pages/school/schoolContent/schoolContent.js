import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from "react-bootstrap";

import * as Style from './styled'

const SchoolContent = ({data, searchTerm, setSearchTerm, tabs}) => {
  const [tabStatus, setTabStatus] = useState('all')
  const [catName, setCatName] = useState([
    {name: 'cat1'},
    {name: 'cat2'},
    {name: 'cat4'},
    {name: 'cat5'},
  ])
  const findCat = data.find(u => u.cat === tabStatus);

  const changeTab = (e, tab) => {
    setTabStatus(tab);
    document.querySelector('.tabs-active').classList.remove('tabs-active');
    e.target.classList.add('tabs-active');
  }

  const openAccordItem = (e) => {
    e.currentTarget.classList.toggle('open')
  }

  useEffect(() => {
    if(tabs && tabs.length > 0) {
      setCatName(tabs)
    }
  }, [tabs])

  return (
    <Style.Wrapper>
      <Container>
        <Row>
          <Col>
            <Style.TabWrapper>
              <Style.TabItem onClick={(e) => changeTab(e, 'all')} className={'tabs-active'}>Все рубрики</Style.TabItem>
              {
                catName.map((item, key) => {
                  return (
                    <Style.TabItem key={key} onClick={(e) => changeTab(e, `${item.name}`)}>{item.name}</Style.TabItem>
                  )
                })
              }
            </Style.TabWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            {
              tabStatus === 'all'
                ? (
                  <>
                    {
                      data.filter((item)=> {
                        if(searchTerm === '') {
                          return item
                        } else if (item.question.toLowerCase().includes(searchTerm.toLowerCase())){
                          return item
                        }
                      }).map((i, key) => {
                        return (
                          <Style.AccordItem key={key} onClick={(e) => openAccordItem(e)}>
                            <div className="title">
                              {i.question}
                              <Style.AccordIndicator>
                                <div className="item"/>
                                <div className="item"/>
                              </Style.AccordIndicator>
                            </div>
                            <div className="text">{i.answer}</div>
                          </Style.AccordItem>
                        )
                      })
                    }
                  </>
                ) : tabStatus === findCat.cat
                ? (
                  <>
                    {
                      data.filter((item)=> {
                        if(searchTerm === '') {
                          return item
                        } else if (item.question.toLowerCase().includes(searchTerm.toLowerCase())){
                          return item
                        }
                      }).map((item, key) => {
                        if (item.cat === findCat.cat) {
                          return (
                            <Style.AccordItem key={key} onClick={(e) => openAccordItem(e)}>
                              <div className="title">
                                {item.question}
                                <Style.AccordIndicator>
                                  <div className="item"/>
                                  <div className="item"/>
                                </Style.AccordIndicator>
                              </div>
                              <div className="text">{item.answer}
                              </div>
                            </Style.AccordItem>
                          )
                        }
                      })
                    }
                  </>
                ) : null
            }
          </Col>
        </Row>
      </Container>
    </Style.Wrapper>
  )
}

export default SchoolContent