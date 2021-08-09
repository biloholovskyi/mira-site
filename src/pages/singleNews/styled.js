import styled from 'styled-components';

const SingleNewsWrap = styled.div`
  background-color: #121212;
  min-height: 100vh;
  padding-top: 200px;
  padding-bottom: 120px;
`

const Text = styled.p`
  p {
    font-family: TT Interfaces,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    padding-bottom: 20px;
  }
  ul, ol {
    padding-left: 20px;
    padding-bottom: 20px;
    li {
      font-family: TT Interfaces,sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0.01em;
      color: #FFFFFF;
    }
  }
`

const NewsImg = styled.img`
  object-fit: cover;
  width: 100%;
  margin-bottom: 30px;
  max-height: 450px;
`

export {
  SingleNewsWrap,
  Text,
  NewsImg
}