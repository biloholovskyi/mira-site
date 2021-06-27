import styled from "styled-components";

import top from './media/top.svg'
import bottom from './media/bottom.svg'
import bg from './media/bg.jpg'

const Wrapper = styled.div`
  height: 1194px;
  position: relative;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  
  .container {
    position: relative;
    z-index: 100;
  }
  
  &::before {
    content: '';
    width: 465px;
    height: 269px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    background-image: url(${top});
    background-position: top left;
    background-size: cover;
  }

  &::after {
    content: '';
    width: 1440px;
    height: 833px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 50;
    background-image: url(${bottom});
    background-position: top left;
    background-size: cover;
  }
  
  @media (max-width: 991px) {
    height: auto;
    min-height: 100vh;
    padding-bottom: 300px;
    
    &::after {
      width: 100vw;
      height: 609px;
    }
  }

  @media (max-width: 767px) {
    height: 640px;
    min-height: auto;
    padding-bottom: 170px;
    padding-top: 170px;
    
    &::before {
      width: 359px;
      height: 208px;
      top: 50px;
    }

    &::after {
      min-width: 100vw;
      width: 360px;
      height: 509px;
    }
  }

  @media (max-width: 575px) {
    padding: 170px 4px;
    
    &::after {
      min-width: 100vw;
      height: 290px;
      background-position: top right;
    }
  }
`

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(63.39% 63.39% at 61.22% 36.61%, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.8) 71.09%, rgba(18, 18, 18, 0.8) 100%);
`

const Title = styled.h1`
  margin-top: 262px;
  margin-bottom: 64px;
  font-family: HeliosExtC, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;
  color: #FFFFFF;
  
  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 52px;
  }

  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 36px;
    margin-top: 0;
    margin-bottom: 40px;
  }
`

const ButtonsBlock = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 575px) {
    flex-direction: column;
  }
`

const WatchButton = styled.button`
  cursor: pointer;
  margin-left: 38px;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  
  img {
    width: 24px;
    max-width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    margin-right: 12px;
  }
  
  .text {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.005em;
    color: #FFFFFF;
  }
  
  @media (max-width: 575px) {
    margin-left: 0;
    margin-top: 32px;
  }
`

export {
  Wrapper,
  Title,
  Gradient,
  ButtonsBlock,
  WatchButton
}