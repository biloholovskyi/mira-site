import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Form = styled.form`
  background: #212121;
  border-radius: 12px;
  padding: 40px;
  
  .form-text {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 32px;
    color: #9E9E9E;
  }
  
  .form-button {
    display: block;
    width: 100%;
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.005em;
    color: #FFFFFF;
    padding: 14px 24px;
    background: #36B37E;
    border-radius: 1000px;
    border: none;
  }
`

export {
  Wrapper,
  Form
}