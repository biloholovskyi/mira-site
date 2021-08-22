import React from "react";

import * as Style from './styled'

const MainButton = ({text, type, media, func = () => null}) => {
  return (
    <Style.Button onClick={func} type={type ? type : null} media={media}>{text}</Style.Button>
  )
}

export default MainButton