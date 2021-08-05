import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 72px;
  padding-bottom: 120px;
`

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`

const TabItem = styled.div`
  font-family: TT Interfaces, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: ${props => props.active ? '#36B37E' : '#A9A9A9'};
  padding: 12px 16px;
  margin-right: 20px;
  background-color: ${props => props.active ? 'rgba(54, 179, 126, 0.2)' : 'transparent'};
  border-radius: 4px;
  cursor: pointer;
  
  &:last-child {
    margin-right: 0;
  }
`

const AccordItem = styled.div`
  width: 100%;
  background: #212121;
  border-radius: 12px;
  padding: 40px;
  transition: all .3s;
  margin-bottom: 16px;
  cursor: pointer;
  
  .title {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.005em;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .text {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    transition: height, margin-top .3s;
    height: 0;
    visibility: hidden;
  }
  
  &.open {
    .title {
        .item {
          &:last-child {
            transform: rotate(0);
          }
        }
    }
    
    .text {
      visibility: visible;
      height: auto;
      margin-top: 40px;
    }
  }
`

const AccordIndicator = styled.div`
  width: 24px;
  min-width: 24px;
  height: 24px;
  padding: 5px;
  position: relative;
  
  .item {
    background-color: #fff;
    width: 14px;
    height: 2px;
    border-radius: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1px;
    margin-left: -7px;
    transition: all .3s;
    
    &:last-child {
      transform: rotate(90deg);
    }
  }
`

export {
  Wrapper,
  TabWrapper,
  TabItem,
  AccordItem,
  AccordIndicator
}