import React from "react";

import HomePage from "../../pages/homePage/homePage";

import * as Style from './styled'

const App = () => {
  return (
    <>
      <Style.Wrapper>
        Дарим финансовую независимость каждому
      </Style.Wrapper>
      <HomePage/>
    </>
  )
}

export default App;