import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: #373737;
`

const DotWrapper = styled.div`
  padding: 0 92px;
  width: 100%;
  display: flex;
  margin-top: -8.5px;
  align-items: center;
  justify-content: space-between;
  
  .dot {
    width: 16px;
    height: 16px;
    background: #373737;
    border-radius: 50%;
    position: relative;
    
    &--active {
      background-color: #36B37E;
      
      &::after {
        content: '';
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: rgba(54, 179, 126, 0.2);
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -12px;
        margin-top: -12px;
      }
      
      &::before {
        content: '';
        height: 2px;
        width: 100vw;
        background-color: #36B37E;
        position: absolute;
        top: 50%;
        margin-top: -1px;
        margin-left: -100vw;
      }
    }
    
    .dotText {
      position: absolute;
      width: 200px;
      top: 16px;
      margin-top: 24px;
      left: 50%;
      margin-left: -100px;
      text-align: center;
      
      .name {
        font-family: TT Interfaces, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.005em;
        color: #36B37E;
      }
      
      .text {
        font-family: TT Interfaces, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.005em;
        color: #FFFFFF;
      }
    }
    
    &--top {
      .dotText {
        top: -16px;
        margin-top: -74px;
        left: 50%;
        margin-left: -100px;
      }
    }
  }
`

export {
  Wrapper,
  Line,
  DotWrapper
}