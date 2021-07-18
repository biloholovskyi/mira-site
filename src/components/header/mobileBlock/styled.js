import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  
  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    
    .hamburger {
      width: 24px;
      height: 24px;
      margin-right: 16px;
      cursor: pointer;
      position: relative;
      z-index: 50;
      padding: 6px 3px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      .item {
        width: 100%;
        height: 2px;
        background-color: #fff;
        transition: all .3s;
        
        &:nth-child(1) {
          transform: ${props => props.show ? 'rotate(45deg) translateY(0) translateX(7px)' : 0};
        }

        &:nth-child(2) {
          opacity: ${props => props.show ? 0 : 1}
        }

        &:nth-child(3) {
          transform: ${props => props.show ? 'rotate(-45deg) translateY(0) translateX(7px)' : 0};
        }
      }
    }
    
    .delimiter {
      width: 1px;
      height: 24px;
      background: #424242;
      margin-right: 16px;
      position: relative;
      z-index: 50;
    }
  }
`

export {
  Wrapper
}