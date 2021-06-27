import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  .icon {
    width: 39px;
    height: 31.12px;
    object-position: center;
    object-fit: contain;
    margin-right: 18.84px;
  }
  
  .text {
    width: 88.47px;
    height: 29.98px;
    object-position: center;
    object-fit: contain;
  }
  
  @media (max-width: 991px) {
    .icon {
      width: 22.08px;
      height: 17.62px;
      margin-right: 10.5px;
    }
    
    .text {
      width: 49.77px;
      height: 16.87px
    }
  }
  
  @media (max-width: 575px) {
    .icon {
      ${props => props.style575 && `
        ${props.style575.logo}
      `}
    }
    
    .text {
      ${props => props.style575 && `
        ${props.style575.text}
      `}
    }
  }
`

export {
  Wrapper
}