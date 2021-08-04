import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  
  .label {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    margin-bottom: 12px;
  }
  
  input, textarea {
    background: #424242;
    border-radius: 12px;
    width: 100%;
    border: none;
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    padding: 13px 16px;
    margin-bottom: ${props => props.mb || '0'};
  }
  
  textarea {
    resize: none;
    height: 96px;
  }
`

export {
  Wrapper
}