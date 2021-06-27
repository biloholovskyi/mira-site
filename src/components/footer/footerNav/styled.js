import styled from "styled-components";

const Nav = styled.nav`
  margin-top: 40px;

  @media (max-width: 575px) {
    margin-top: 32px;
  }
`

const Item = styled.a`
  display: block;
  font-family: TT Interfaces, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #FFFFFF;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 575px) {
    display: inline-block;
    margin-right: 24px;
  }
`

export {
  Nav,
  Item
}