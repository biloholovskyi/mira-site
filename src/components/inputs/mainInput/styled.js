import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  
  ${props => props.style && props.style}
  
  .label {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    margin-bottom: 12px;
  }
  
  .input-icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 24px;
    left: 16px;
    object-position: center;
    object-fit: contain;
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
    padding: ${props => props.icon ? '13px 16px 13px 56px' : '13px 16px'};
    margin-bottom: ${props => props.mb || '0'};
    
    ${props => props.styleInput && props.styleInput}
    
    &::placeholder {
      font-family: TT Interfaces, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: rgba(255, 255, 255, 0.64);
    }
  }
  
  textarea {
    resize: none;
    height: 96px;
  }
`

export {
  Wrapper
}