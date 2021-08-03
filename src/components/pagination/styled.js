import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  
  ${props => props.style}
`

export {
  Wrapper
}