import styled from "styled-components";

import arrow from './media/arrow.svg'

const Wrapper = styled.div`
  padding: 120px 0;
  overflow: hidden;
  position: relative;
  
  .partners-slider {
    .slick-arrow {
      &::after {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        background-image: url(${arrow});
        top: 50%;
        left: 50%;
        margin-top: -12px;
        margin-left: -12px;
      }
    }
  }
`

export {
  Wrapper
}