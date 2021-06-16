import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #121212;
`

const TextAndImage = styled.div`
  overflow: hidden;
  
  ${props => props.bg && {backgroundColor: props.bg}}
  
  .text {
    padding: 120px 0;
    
    .fast {
      display: flex;
      align-items: center;
      background: #212121;
      border-radius: 1000px;
      padding: 10px 18px;
      width: max-content;
      margin-bottom: 24px;
      
      img {
        width: 20px;
        min-width: 20px;
        height: 20px;
        margin-right: 8px;
        object-fit: contain;
        object-position: center;
      }
      
      .fast-text {
        font-family: TT Interfaces, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.005em;
        color: #FFFFFF;
      }
    }
    
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
    
    .small-title {
      font-family: TT Interfaces, sans-serif;
      font-style: normal;
      font-weight: 600;
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

      &-start {
        justify-content: flex-start;
        
        .info-item {
          margin-right: 26px;
          
          &:last-child {
            margin-right: 0;
          }
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
    
    &-phone {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  
  .col-relative {
    position: relative;
  }
`

export {
  Wrapper,
  TextAndImage
}