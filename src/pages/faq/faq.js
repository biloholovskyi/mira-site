import React, {useState, useEffect} from 'react'
import axios from "axios";

import SchoolHeader from "../school/schoolHeader/schoolHeader";
import SchoolContent from "../school/schoolContent/schoolContent";

import * as Style from '../school/styled'

import ServerSettings from "../../service/serverSettings";
const api = new ServerSettings();

const Faq = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [schoolInfo, setSchoolInfo] = useState([
    {
      cat: 'cat1',
      question: 'Lorem1 ipsum dolor sit amet, consectetur adipiscing elit111.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus\n' +
        '                      egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,\n' +
        '                      fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.\n' +
        '                      Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt\n' +
        '                      nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse\n' +
        '                    platea dictumst.'
    },
    {
      cat: 'cat2',
      question: 'Lorem2 ipsum dolor sit amet, consectetur adipiscing elit222.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus\n' +
        '                      egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,\n' +
        '                      fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.\n' +
        '                      Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt\n' +
        '                      nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse\n' +
        '                    platea dictumst.'
    },
    {
      cat: 'cat2',
      question: 'Lorem3 ipsum dolor sit amet, consectetur adipiscing elit.222',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus\n' +
        '                      egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,\n' +
        '                      fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.\n' +
        '                      Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt\n' +
        '                      nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse\n' +
        '                    platea dictumst.'
    },
    {
      cat: 'cat4',
      question: 'Lorem4 ipsum dolor sit amet, consectetur adipiscing elit444.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus\n' +
        '                      egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,\n' +
        '                      fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.\n' +
        '                      Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt\n' +
        '                      nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse\n' +
        '                    platea dictumst.'
    },
    {
      cat: 'cat5',
      question: 'Lorem5 ipsum dolor sit amet, consectetur adipiscing elit555.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus\n' +
        '                      egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,\n' +
        '                      fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.\n' +
        '                      Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt\n' +
        '                      nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse\n' +
        '                    platea dictumst.'
    }
  ]);
  const [tabs, setTabs] = useState([])

  useEffect(() => {
    getAllCategory().catch(error => console.error(error))
  }, [])

  // получаем список всех категорий
  const getAllCategory = async () => {
    axios.get(`${api.getApi()}api/faq/`)
      .then(res => {
        const array = [];
        const arrayTabs = []

        res.data.forEach(item => {
          arrayTabs.push({name: item.name})

          item.questions.forEach(quest => {
            const obj = {
              cat: item.name,
              question: quest.name,
              answer: quest.answer
            }

            array.push(obj)
          })
        })

        setSchoolInfo(array)
        setTabs(arrayTabs)
      })
      .catch(error => console.error(error))
  }


  return (
    <>
      <Style.Wrapper>
        <SchoolHeader
          setSearchTerm={setSearchTerm}
          title={'Помощь'}
        />

        <SchoolContent
          data={schoolInfo}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          tabs={tabs}
        />
      </Style.Wrapper>

      <div style={{display: 'none'}} id="tickers_top" />
      <div style={{display: 'none'}} id="tickers_bottom" />
    </>
  )
}

export default Faq