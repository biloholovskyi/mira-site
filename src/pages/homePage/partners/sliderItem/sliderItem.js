import React, {useEffect, useState} from "react";

import * as Style from './styled'

import logo from '../media/kraken.svg'

const SliderItem = ({item}) => {

  return (
    <Style.Item>
      <img src={item.img} alt="icon"/>
      <div className="name">{item.title}</div>
      <div className="desc">{item.desc}</div>
    </Style.Item>
  )
}

export default SliderItem;