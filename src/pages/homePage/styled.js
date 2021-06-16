import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #121212;
`

const TextAndImage = styled.div`
  overflow: hidden;
  
  .text {
    padding: 120px 0;
    
    .desc {
      font-family: TT Interfaces, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0.005em;
      color: #FFFFFF;
      margin-bottom: 20px;
    }
    
    .item {
      font-family: TT Interfaces, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0.005em;
      color: #FFFFFF;
      padding-left: 20px;
      position: relative;
      margin-bottom: 20px;
      
      &::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #36B37E;
        left: 0;
        top: 8px;
        border-radius: 50%;
      }
    }

    .info {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 40px;
      padding-top: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      .info-item {
        .name {
          font-family: TT Interfaces, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.005em;
          color: rgba(255, 255, 255, 0.64);
        }
        
        .value {
          font-family: TT Interfaces, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: 0.01em;
          color: #FFFFFF;
        }
      }
    }
  }
  
  .image {
    height: 100%;
    object-position: center;
    object-fit: contain;
    
    &-first {
      margin-top: -60px;
    }
  }
`

export {
  Wrapper,
  TextAndImage
}