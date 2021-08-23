import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  padding:  ${props => props.fixedHeader ? '20px 40px 20px' : '40px 40px 0'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;
  background-color: ${props => props.fixedHeader && '#000'};
  transition: .5s;
  
  @media (max-width: 1130px) {
    background: #121212;
    padding: 16px;
    margin-top: 0;
    //justify-content: flex-start;
    justify-content: space-between;
  }
  
  .enter-mobile {
    display: none;

    @media (max-width: 1130px) {
      display: block;
      font-family: TT Interfaces, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.005em;
      color: #FFFFFF;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
`

export {
  HeaderWrapper
}