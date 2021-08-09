import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Cart = styled(NavLink)`
  margin-bottom: 60px;
  display: block;
  img {
    width: 100%;
    height: 202px;
    object-fit: cover;
    object-position: center;
    margin-bottom: 24px;
  }
  
  .name {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin-bottom: 16px;
  }
  
  .date {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #A9A9A9;
  }
  
  &:hover {
    cursor: pointer;
    
    .name {
      text-decoration-line: underline;
    }
  }
`

export {
  Cart
}