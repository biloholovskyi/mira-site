import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: -214px;
  position: relative;
  z-index: 50;
  overflow: hidden;
  padding-bottom: 50px;
  
  p {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.005em;
    color: #FFFFFF;
    margin-bottom: 120px;
  }
  
  .tickers {
    width: calc(100% + 140px);
    margin-left: -70px;
  }
`

export {
  Wrapper
}