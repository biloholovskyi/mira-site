import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #212121;
  padding: 120px 0 223px 0;
  overflow: hidden;
  position: relative;
  
  h3 {
    font-family: HeliosExtC, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 154px;
  }
  
  @media (max-width: 767px) {
    padding: 64px 0;
    
    h3 {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 32px;
    }
  }
`

export {
  Wrapper
}