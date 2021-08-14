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
        font-family: HeliosExtC, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 100%;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.08);
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
      font-family: HeliosExtC, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 80px;
      line-height: 100%;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.08);
      white-space: nowrap;
      margin-right: 80px;
      position: relative;
      
      &::after {
        content: '';
        width: 16px;
        height: 16px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        margin-top: -16px;
        right: -48px;
      }
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