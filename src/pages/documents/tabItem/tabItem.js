import React from "react";

import * as Style from '../styled'
import card from '../media/image/card.png';

const TabItem = ({item}) => {
  const format = item.file.split('.').reverse();

  return (
    <Style.TabItemWrap download href={item.file} target={'_blank'}>
      <img src={item.file} alt="image" className={'card_img'}/>
      <div className="info">
        <div className="name">{item.name}</div>
        <div className="size">{format[0]}<div className="circle" />{item.file.name}</div>
      </div>
    </Style.TabItemWrap>
  )
}

export default TabItem;