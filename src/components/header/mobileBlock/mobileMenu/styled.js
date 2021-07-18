import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 56px 16px 16px 16px;
  
  &::after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #212121;
    z-index: 40;
  }
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    width: 100vw;
    height: 100vh;
    background: rgba(18, 18, 18, 0.72);
  }
  
  a {
    display: block;
    line-height: 48px;
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.005em;
    color: #FFFFFF;
    position: relative;
    z-index: 50;
    
    &.button {
      color: #36B37E;
    }
  }
`

export {
  Wrapper
}