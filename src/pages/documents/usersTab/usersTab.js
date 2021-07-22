import React from "react";

import TabItem from "../tabItem/tabItem";

import * as Style from '../styled'
import card from '../media/image/card.png';
import card2 from '../media/image/card4.png';

const UsersTab = () => {

  const cardData = [
    {image: card, title: 'Договор оферта', format: 'Pdf', size: '24mb'},
    {image: card2, title: 'Лицензия', format: 'doc', size: '2mb'},
    {image: card, title: 'Договор оферта', format: 'Pdf', size: '24mb'},
    {image: card2, title: 'Лицензия', format: 'doc', size: '2mb'},
    {image: card, title: 'Договор оферта', format: 'Pdf', size: '24mb'},
    {image: card2, title: 'Лицензия', format: 'doc', size: '2mb'}
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

export default UsersTab;