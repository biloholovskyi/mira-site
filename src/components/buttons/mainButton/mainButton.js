import React from "react";

import * as Style from './styled'

const MainButton = ({text, type}) => {
  return (
    <Style.Button type={type ? type : null}>{text}</Style.Button>
  )
}

export default MainButton