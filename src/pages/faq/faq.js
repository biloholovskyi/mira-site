import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";

import MainTextArea from "./selfComponents/mainTextArea/mainTextArea";
import MainButton from "./selfComponents/mainButton/mainButton";
import SearchPanel from './searchPanel/searchPanel';
import SingleTab from "./singleTab/singleTab";

import {FaqWrap, TabHead, TabBody, AddQuestion} from './styled';

import ServerSettings from "../../service/serverSettings";
const api = new ServerSettings();

const Faq = () => {

  const [tabs, setTabs] = useState([]);
  const [questions, setQuestions] = useState([])
  const [tabStatus, setTabStatus] = useState('all');

  useEffect(() => {
    getAllCategory().catch(error => console.error(error))
  }, [])


  useEffect(() => {
    // если активны все категории выводим все вопросы
    if(tabStatus === 'all') {
      let questionsList = []

      tabs.forEach(tab => {
        questionsList = [...questionsList, ...tab.questions]
      })

      setQuestions(questionsList);
    } else {
      // находим список вопросов по id категории
      const index = tabs.findIndex(tab => parseInt(tab.id) === parseInt(tabStatus));

      if(index > -1) {
        setQuestions(tabs[index].questions)
      }
    }
  }, [tabStatus])

  // список табов
  const tabsName = tabs.map(item => {
    return (
      <button
        key={item.id}
        onClick={(e) => changeTab(e, item.id)}
      >
        {item.name}
      </button>
    )
  })

  // список вопросов
  const questionsRender = questions.map((question, key) => {
    return <SingleTab key={key} question={question}/>
  })

  // change allCategoryTab
  const changeTab = (e, tab) => { 
    setTabStatus(tab);
    document.querySelector('.btn-active').classList.remove('btn-active');
    e.target.classList.add('btn-active');
  };

  // получаем список всех категорий
  const getAllCategory = async () => {
    axios.get(`${api.getApi()}api/faq/`)
      .then(res => {
        setTabs(res.data)
      })
      .catch(error => console.error(error))
  }

  return(
    <Container>
      <Row>
        <Col>
          <FaqWrap>
            <div className="title">Помощь</div>
            <SearchPanel/>

            <TabHead>
              <button onClick={(e) => changeTab(e, 'all')} className={'btn-active'}>Все категории</button>
              {tabsName}
            </TabHead>
            <TabBody>
              {questionsRender}
            </TabBody>
            <AddQuestion>
              <div className="title">Остались вопросы? Напишите нам</div>
              <form>
                <MainTextArea
                  label={'Ваш вопрос'}
                  name={'question'}
                />

                <MainButton
                  text={'Отправить'}
                  colorBg={true}
                />
              </form>
            </AddQuestion>
          </FaqWrap>
        </Col>
      </Row>
    </Container>
  )
}

export default Faq;