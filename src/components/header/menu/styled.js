import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  width: max-content;
  height: 100%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
`

const Item = styled.a`
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
`

export {
  Nav,
  Item
}