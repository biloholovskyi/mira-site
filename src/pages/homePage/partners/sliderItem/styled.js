import styled from "styled-components";

const Item = styled.div`
  padding: 40px 24px;
  width: 282px;
  height: 274px;
  background: #212121;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
  
  img {
    width: 64px;
    height: 64px;
    object-position: center;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 16px;
  }
  
  .name {
    margin-bottom: 8px;
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.005em;
    color: #FFFFFF;
  }
  
  .desc {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #FFFFFF;
    opacity: 0.72;
  }
  
  @media (max-width: 1299px) {
    width: 252px;
  }

  @media (max-width: 1199px) {
    width: 202px;
    height: 304px;
  }

  @media (max-width: 991px) {
    width: 282px;
    height: 274px;
  }
`

export {
  Item
}