import React, {useEffect, useRef, useState} from "react";
import YouTube from 'react-youtube'; // https://www.npmjs.com/package/react-youtube

import {FaqAnswer, FaqTitle, Question} from "../styled";

const SingleTab = ({question, video}) => {
  const [showStatus, setShowStatus] = useState(false)

  // ссылка на селект
  const selectEl = useRef(null);
  // ссылка на весь врапер
  const wrapperEl = useRef(null)

  // открываем/закриваем select
  const showOptions = () => {
    setShowStatus(!showStatus)
  }

  // закрытие при клике вне списка селекта
  const closeOutsideClick = (e) => {
    if (wrapperEl.current && !wrapperEl.current.contains(e.target)) {
      if (selectEl.current && !selectEl.current.contains(e.target)) {
        setShowStatus(false);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => closeOutsideClick(e));
  }, []);

  const opts = {
    height: '580px',
    width: '100%'
  };



  return (
    <>
      <Question ref={wrapperEl}>
        <FaqTitle onClick={(e) => {showOptions(e)}} ref={selectEl} arrow={showStatus}>{question.name}</FaqTitle>
        {
          showStatus && (
           <>
             <FaqAnswer className='faq-block'>{question.answer}</FaqAnswer>
             {
               video && (
                 <YouTube videoId={video} opts={opts}   id={'video_youtube'}    />
               )
             }
           </>
          )
        }
      </Question>
    </>
  )
}

export default SingleTab;