import React from "react";
import HTMLReactParser from "html-react-parser";

import * as Style from './styled'

const DefaultTitle = ({text, style}) => {
  return (
    <Style.Title style={style}>{HTMLReactParser(text)}</Style.Title>
  )
}

export default DefaultTitle;