import React from "react";

import * as Style from '../styled'
import card from '../media/image/card.png';

const TabItem = ({item}) => {
  return (
    <Style.TabItemWrap download href={item.image}>
      <img src={item.image} alt="image" className={'card_img'}/>
      <div className="info">
        <div className="name">{item.title}</div>
        <div className="size">{item.format}<div className="circle" />{item.size}</div>
      </div>
    </Style.TabItemWrap>
  )
}

export default TabItem;