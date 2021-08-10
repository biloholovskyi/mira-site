import styled from "styled-components";

import banner from './media/banner.jpg'

const Wrapper = styled.div`
  overflow: visible;
  position: relative;
  z-index: 10;
  height: 332px;
  background-image: url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .school-title {
    text-align: center;
    font-family: HeliosExtC, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    text-transform: uppercase;
    color: #FFFFFF;
    @media(max-width: 600px){
     font-size: 28px;
      line-height: 32px;
    }
    @media(max-width: 425px){
      font-size: 24px;
      line-height: 32px;
    }
  }
  
  @media(max-width: 600px){
    padding-top: 150px;
  }
  
`

export {
  Wrapper
}