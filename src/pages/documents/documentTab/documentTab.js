import React from "react";

import TabItem from "../tabItem/tabItem";

import * as Style from '../styled'
import card from '../media/image/card2.png';

const DocumentTab = () => {
  const cardData = [
    {image: card, title: 'Лицензия', format: 'Pdf', size: '24mb'},
    {image: card, title: 'Лицензия', format: 'Pdf', size: '24mb'},
    {image: card, title: 'Лицензия', format: 'Pdf', size: '24mb'},
    {image: card, title: 'Лицензия', format: 'doc', size: '2mb'},
    {image: card, title: 'Лицензия', format: 'doc', size: '2mb'}
  ]

  return (
    <Style.TabBodyWrap>
      {
        cardData.map((item, key) => {
          return (
            <TabItem key={key} item={item}/>
          )
        })
      }
    </Style.TabBodyWrap>
  )
}

export default DocumentTab;