import styled from "styled-components";

import hamb from './media/hamb.svg'

const Wrapper = styled.div`
  display: none;
  
  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    
    .hamburger {
      width: 24px;
      height: 24px;
      background-image: url(${hamb});
      margin-right: 16px;
      cursor: pointer;
    }
    
    .delimiter {
      width: 1px;
      height: 24px;
      background: #424242;
      margin-right: 16px;
    }
  }
`

export {
  Wrapper
}