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
    justify-content: flex-start;
  }
`

export {
  HeaderWrapper
}