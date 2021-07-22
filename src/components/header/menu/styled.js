import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Nav = styled.nav`
  position: absolute;
  width: max-content;
  left: 50%;
  top: ${props => props.fixedHeader ? '20px' : '40px'};
  height: 40px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  transition: .5s;
  
  @media (max-width: 1199px) {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
  }
`

const Item = styled(NavLink)`
  font-family: TT Interfaces, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #FFFFFF;
  margin-right: 40px;
  
  &:last-child {
    margin-right: 0;
  }
  
  &:hover {
    text-decoration: none;
    color: #fff;
  }
  
  @media (max-width: 1280px) {
    font-size: 14px;
    margin-right: 36px;
  }

  @media (max-width: 1130px) {
   display: none;
  }
`

export {
  Nav,
  Item
}