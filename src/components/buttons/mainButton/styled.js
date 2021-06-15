import styled from "styled-components";

const Button = styled.div`
  cursor: pointer;
  background-color: #36B37E;
  border-radius: 1000px;
  padding: 8px 18px;
  font-family: TT Interfaces, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #FFFFFF;

  // lg type
  ${props => props.type === 'lg' && {
    padding: '14px 24px',
    fontSize: '20px',
    lineHeight: '28px'
  }}
`

export {
  Button
}