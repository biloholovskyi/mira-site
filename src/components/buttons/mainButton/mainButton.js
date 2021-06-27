import React from "react";

import * as Style from './styled'

const MainButton = ({text, type, media}) => {
  return (
    <Style.Button type={type ? type : null} media={media}>{text}</Style.Button>
  )
}

export default MainButton