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
  
  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 38px;
  }
  
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 32px;
  }
  
  @media (max-width: 575px) {
    br {
      display: none;
    }
  }
  
  ${props => props.style}
`

export {
  Title
}