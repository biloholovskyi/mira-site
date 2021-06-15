import styled from "styled-components";

const Title = styled.h3`
  font-family: HeliosExtC, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 0;
  
  ${props => props.style}
`

export {
  Title
}