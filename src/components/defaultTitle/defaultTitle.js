import React from "react";
import HTMLReactParser from "html-react-parser";

import * as Style from './styled'

const DefaultTitle = ({text, style, media}) => {
  return (
    <Style.Title style={style} media={media}>{HTMLReactParser(text)}</Style.Title>
  )
}

export default DefaultTitle;