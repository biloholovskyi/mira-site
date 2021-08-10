import React, {useState} from 'react'

import Footer from "../../components/footer/footer";
import SchoolHeader from "./schoolHeader/schoolHeader";
import SchoolContent from "./schoolContent/schoolContent";

import * as Style from './styled'

const School = () => {
  const [schoolInfo, setSchoolInfo] = useState([
    {
      cat: 'cat1',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit111.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus\n' +
        '                      egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,\n' +
        '                      fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.\n' +
        '                      Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt\n' +
        '                      nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse\n' +
        '                    platea dictumst.'
    },
    {
      cat: 'cat2',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit222.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus\n' +
        '                      egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,\n' +
        '                      fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.\n' +
        '                      Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt\n' +
        '                      nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse\n' +
        '                    platea dictumst.'
    },
    {
      cat: 'cat2',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.222',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus\n' +
        '                      egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,\n' +
        '                      fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.\n' +
        '                      Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt\n' +
        '                      nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse\n' +
        '                    platea dictumst.'
    },
    {
      cat: 'cat4',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit444.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus\n' +
        '                      egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,\n' +
        '                      fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.\n' +
        '                      Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt\n' +
        '                      nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse\n' +
        '                    platea dictumst.'
    },
    {
      cat: 'cat5',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit555.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus\n' +
        '                      egestas, lobortis dui id, mattis augue. Aliquam ornare consequat lectus ac rhoncus. Cras libero orci,\n' +
        '                      fringilla eget maximus ac, mattis nec ex. Etiam malesuada diam eget ante luctus, ut rhoncus est aliquam.\n' +
        '                      Vivamus placerat augue ut felis hendrerit, in blandit velit posuere. Nunc rutrum est urna, eu tincidunt\n' +
        '                      nunc malesuada quis. Sed pretium mollis justo, eget elementum lacus pulvinar vitae. In hac habitasse\n' +
        '                    platea dictumst.'
    }
  ]);


  return (
    <>
      <Style.Wrapper>
        <SchoolHeader/>

        <SchoolContent data={schoolInfo}/>
      </Style.Wrapper>

      <Footer/>
    </>
  )
}

export default School