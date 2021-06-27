import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  .enter {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.005em;
    color: #FFFFFF;
    border: none;
    background-color: transparent;
    margin-right: 38px;
    cursor: pointer;
  }

  @media (max-width: 991px) {
    display: none;
  }
`

export {
  Wrapper
}