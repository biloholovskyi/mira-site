import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #121212;
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100vh;
  .top_image {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    //max-height: 364px;
    @media(max-width: 575px) {
      display: none;
    }
  }
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    padding-top: 200px;
    z-index: 2;
    position: relative;
    color: #fff;
    margin-bottom: 64px;
    font-family: HeliosExtC,sans-serif;
    text-transform: uppercase;
    @media(max-width: 575px) {
     padding-top: 100px;
      font-size: 21px;
      line-height: 38px;
      margin-bottom: 20px;
    }
  }
  .tab_body {
    background-color: #121212;
    width: 100%;
  }
`

const TabHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  & div:last-child {
    margin-right: 0;
  }
  @media(max-width: 575px) {
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const TabHeadNav = styled.div`
  font-family: TT Interfaces, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.005em;
  color: #FFFFFF;
  margin-right: 32px;
  border-bottom: 4px solid transparent;
  padding-bottom: 20px;
  cursor: pointer;

  &.tabs-active {
    color: #fff;
    border-bottom: 4px solid #36B37E;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  @media(max-width: 575px) {
    min-width: fit-content;
  }
`

const TabBodyWrap = styled.div`
  width: 100%;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 56px 0;
  flex-wrap: wrap;
  & a:nth-child(4n){
    margin-right: 0;
  }
  @media(max-width: 992px){
    & a:nth-child(4n){
      margin-right: 24px;
    }
    & a:nth-child(3n){
      margin-right: 0;
    }
  }
  @media(max-width: 767px) {
    padding: 25px 0;
    & a:nth-child(3n){
      margin-right: 10px;
    }
    & a:nth-child(2n){
      margin-right: 0px;
    }
  }
  @media(max-width: 575px) {
    padding: 25px 0;
    justify-content: center;
    & a:nth-child(3n){
      margin-right: 0px;
    }
  }
`

const TabItemWrap = styled.a`
  border-radius: 8px;
  width: 100%;
  max-width: calc(100% / 4 - 18px);
  height: 100%;
  margin-bottom: 24px;
  cursor: pointer;
  margin-right: 24px;
  .card_img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    min-height: 282px;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
  .info {
    background-color: #212121;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 100%;
    min-height: 85px;
    padding-left: 24px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    .name {
      font-family: TT Interfaces, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0.005em;
      color: #FFFFFF;
      margin-bottom: 4px;
    }
    .size {
      font-family: TT Interfaces, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.005em;
      color: rgba(255, 255, 255, 0.72);
      display: flex;
      align-items: center;
      .circle {
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.72);
        margin: 0 8px;
        border-radius: 50%;
      }
    }
  }
  @media(max-width: 992px){
    max-width: calc(100% / 3 - 18px);
  }
  @media(max-width: 767px) {
    max-width: calc(100% / 2 - 18px);
    margin-right: 10px;
  }
  @media(max-width: 575px) {
    margin-right: 0;
    max-width: 300px;
  }
`

export {
  Wrapper,
  TabHead,
  TabHeadNav,
  TabBodyWrap,
  TabItemWrap
}