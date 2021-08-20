import styled from 'styled-components';

const SingleNewsWrap = styled.div`
  background-color: #121212;
  min-height: 100vh;
  padding-top: 200px;
  padding-bottom: 120px;
  .desc {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.005em;
    color: #FFFFFF;
    margin-bottom: 32px;
    font-family: TT Interfaces, sans-serif;
  }
  .news_info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px solid  rgba(255, 255, 255, 0.1);
    .left {
      display: flex;
      flex-direction: column;
      .top {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #9E9E9E;
        font-family: TT Interfaces, sans-serif;
      }
      .bottom {
        font-family: TT Interfaces, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
      }
    }
  }
`

const Text = styled.p`
  * {
    font-family: TT Interfaces, sans-serif;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    padding-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    line-height: 28px;
  }

  ul, ol {
    padding-left: 20px;
    margin-bottom: 32px;
    padding-bottom: 0;
    li {
      font-family: TT Interfaces, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0.005em;
      color: #FFFFFF;
      margin-bottom: 16px;
      padding-bottom: 0;
    }
  }
  ul {
    li {
      list-style-type: none;
      position: relative;
      padding-bottom: 0;
      margin-bottom: 16px;
      &:before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-right: 10px;
        position: absolute;
        left: -15px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #36B37E;
        margin-top: 1px;
      }
    }
  }
  h1, h2, h3, h4, h5, h6 {
    padding-bottom: 0;
    margin-bottom: 24px;
  }
`

const NewsImg = styled.img`
  object-fit: cover;
  width: 100%;
  margin-bottom: 30px;
  max-height: 800px;
  &.md_img {
    max-height: 480px;
  }
  &.sm_img {
    max-height: 310px;
    max-width: 50%;
  }
`

export {
  SingleNewsWrap,
  Text,
  NewsImg
}