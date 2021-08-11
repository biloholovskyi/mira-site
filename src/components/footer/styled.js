import styled from "styled-components";

const Footer = styled.footer`
  overflow: hidden;
  position: relative;
  background-color: #000;
`

const FooterFonWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  @media (max-width: 991px) {
    display: none;
  }
`

const FooterFon = styled.img`
  position: absolute;
  height: 100%;
  object-fit: cover;
  object-position: right bottom;
  top: 0;
  right: 0;
  min-width: 800px;
`

const FooterNavWrapper = styled.div`
  padding-bottom: 80px;
  
  @media (max-width: 575px) {
    padding-bottom: 32px;
  }
`

const FooterRightBlock = styled.div`
  padding-left: 136px;
  
  h3 {
    font-family: HeliosExtC, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 32px;
  }
  
  @media (max-width: 575px) {
    padding-left: 0;
    
    h3 {
      display: none;
    }
  }
`

const FooterInfo = styled.div`
  display: flex;
  padding: 80px 0;
  margin-left: 95px;
  
  @media (max-width: 991px) {
    margin-left: 0;
  }
  
  @media (max-width: 575px) {
    flex-direction: column;
    padding: 32px 0;
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 80px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 95px;
  
  .copyright {
    .name {
      font-family: TT Interfaces, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.005em;
      color: rgba(255, 255, 255, 0.72);
    }
    
    .link {
      display: flex;
      align-items: center;
      
      a {
        font-family: TT Interfaces, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.005em;
        color: #FFFFFF;

        &:hover {
          color: #fff;
          text-decoration: none;
        }
      }
      
      & a:first-child {
        margin-right: 5px;
        &:after {
          content: '/';
          margin: 0 8px;
          font-family: TT Interfaces, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0.005em;
          color: #FFFFFF;
          padding-left: 5px;
        }
      }
      
      .delimit {
        margin: 0 8px;
        font-family: TT Interfaces, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.005em;
        color: #FFFFFF;
      }
    }
  }
  
  @media (max-width: 1299px) {
    .copyright {
      .link {
        a {
          font-size: 12px;
        }
      }
    }
  }

  @media (max-width: 1199px) {
    .copyright {
      .link {
        display: block;
        
        a {
          display: block;
          font-size: 12px;
        }
        
        .delimit {
          display: none;
        }
      }
    }
  }
  
  @media (max-width: 991px) {
    margin-left: 0;
  }

  @media (max-width: 767px) {
    .copyright {
      .link {
        a {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
  
  @media (max-width: 575px) {
    border-top: none;
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 0 0 32px 0;
  }
`

export {
  Footer,
  FooterFon,
  FooterFonWrapper,
  FooterNavWrapper,
  FooterRightBlock,
  FooterInfo,
  FooterBottom
}