import styled from "styled-components";

import top from './media/top.svg'
import bottom from './media/bottom.svg'

const Wrapper = styled.div`
  height: 1194px;
  position: relative;
  
  &::before {
    content: '';
    width: 465px;
    height: 269px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    background-image: url(${top});
    background-position: top left;
    background-size: cover;
  }

  &::after {
    content: '';
    width: 1440px;
    height: 833px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 50;
    background-image: url(${bottom});
    background-position: bottom right;
    background-size: cover;
  }
`

export {
  Wrapper
}