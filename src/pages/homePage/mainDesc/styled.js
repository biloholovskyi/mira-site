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
    .top {
      width: 100%;
      display: flex;
      align-items: center;
      height: 80px;
      margin-bottom: 10px;
      &-item {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
      & .tickers-item:first-child {
        margin-right: 26px;
      }
      //&.translate {
      //  transform: translateX(100px);
      //  transition: transform 4s;
      //}
    }
    .bottom {
      width: 100%;
      display: flex;
      align-items: center;
      height: 80px;
    }
    &-item {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
    & .tickers-item:first-child {
      margin-right: 26px;
    }
  }
  
  @media (max-width: 767px) {
    margin-top: 0;
  }
  
  @media (max-width: 575px) {
    p {
      font-size: 16px;
      line-height: 24px;
      margin-top: -16px;
      margin-bottom: 64px;
    }
    .tickers {
      .top,
      .bottom {
        height: 40px;
      }
    }
  }
`

export {
  Wrapper
}