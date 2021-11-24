import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #121212;
  
  .content-block {
    background-color: #121212;
  }
`

const TextAndImage = styled.div`
  overflow: hidden;
  position: relative;
  background-color: #121212;

  ${props => props.bg && {backgroundColor: props.bg}}
  
  .relative {
    position: relative;
  }
  
  .no-relative {
    position: static;
  }
  
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
  
  .university-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: difference;
    object-position: center right;
    object-fit: cover;
    
    @media (max-width: 991px) {
      display: none;
    }
  }

  .full-img {
    position: absolute;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100%;
    object-position: center;
    object-fit: cover;
    @media (max-width: 991px) {
      display: none;
    }
  }
  
  .image {
    height: 100%;
    object-position: center;
    object-fit: contain;

    &-first {
      margin-top: -60px;
      opacity: 0;

      &.show {
        opacity: 1;
        transition: opacity 1.2s linear;
      }
    }

    &-small {
      position: absolute;
      width: 160px;
      height: 160px;
      object-fit: cover;
      right: 77px;
      top: 72px;
      z-index: 2;
      visibility: hidden;

      &.show {
        //opacity: 1;
        //transition: opacity 1.2s linear;
        animation-name: show;
        animation-timing-function: linear;
        animation-duration: 1s;
        visibility: visible;
      }
    }
    
    &-small-keys {
      position: absolute;
      width: 180px;
      height: 180px;
      object-fit: cover;
      left: 180px;
      top: 120px;
      z-index: 2;
      visibility: hidden;

      &.show {
        //opacity: 1;
        //transition: opacity 1.2s linear;
        animation-name: show;
        animation-timing-function: linear;
        animation-duration: 1s;
        visibility: visible;
      }
    }
    

    &-phone {
      position: absolute;
      right: 0;
      bottom: 0;
      opacity: 0;

      &.show {
        opacity: 1;
        transition: opacity 1s linear;
      }
    }

    &-third {
      margin-top: -60px;
      opacity: 0;
      &.show {
        opacity: 1;
        transition: opacity 1.2s linear;
      }
    }
  }

  .col-relative {
    position: relative;
  }

  @keyframes show {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 0;
      transition: opacity 0.6s linear;
      transform: scale(0);
    }
    80% {
      opacity: 1;
      transition: transform 0.6s linear;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transition: opacity 0.6s linear;
      transform: scale(1);
    }
  }

  @media (max-width: 991px) {
    .image {
      height: auto;
      width: 100%;

      &-first {
        margin-top: 0;
      }

      &-phone {
        display: none;
      }

      &-small {
        display: none;
      }

      &-small-keys {
        display: none;
      }
    }
  }

  @media (max-width: 575px) {
    .text {
      padding: 64px 0;

      .desc {
        margin-top: -16px;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 24px;
      }

      .item {
        margin-bottom: 24px;
        font-size: 16px;
        line-height: 24px;
      }

      .info {
        flex-wrap: wrap;

        .info-item {
          width: 50%;
          min-width: 50%;
          text-align: center;
          margin-bottom: 32px;
          margin-right: 0;
        }
      }
    }
  }
`

export {
  Wrapper,
  TextAndImage
}