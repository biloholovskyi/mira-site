import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 0 40px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  
  @media (max-width: 991px) {
    background: #121212;
    padding: 16px;
    margin-top: 0;
    justify-content: flex-start;
  }
`

export {
  HeaderWrapper
}