import React from "react"

import MainBlock from "./mainBlock/mainBlock";
import MainDesc from "./mainDesc/mainDesc";

import * as Style from './styled'

const HomePage = () => {
  return (
    <Style.Wrapper>
      <MainBlock/>
      <MainDesc/>
    </Style.Wrapper>
  )
}

export default HomePage;