import React from "react";

import * as Style from './styled'

import logo from '../media/kraken.svg'

const SliderItem = () => {
  return (
    <Style.Item>
      <img src={logo} alt="icon"/>
      <div className="name">Kraken</div>
      <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel metus sodales, semper orci vitae, iaculis lacus.</div>
    </Style.Item>
  )
}

export default SliderItem;