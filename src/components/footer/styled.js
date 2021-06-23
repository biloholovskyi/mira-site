import styled from "styled-components";

const Footer = styled.footer`
  overflow: hidden;
`

const FooterFonWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const FooterFon = styled.img`
  position: absolute;
  height: 100%;
  object-fit: cover;
  object-position: right bottom;
  top: 0;
  right: 0;
`

const FooterNavWrapper = styled.div`
  padding-bottom: 80px;
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
`

const FooterInfo = styled.div`
  display: flex;
  padding: 80px 0;
  margin-left: 95px;
`

const FooterBottom = styled.div`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 80px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
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
`

const FooterSocial = styled.div`
  display: flex;
  align-items: center;
`

const FooterSocialItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  width: 32px;
  min-width: 32px;
  height: 32px;
  margin-right: 16px;
  
  &:last-child {
    margin-right: 0;
  }
  
  img {
    width: 16px;
    height: 16px;
    object-position: center;
    object-fit: contain;
  }
`

export {
  Footer,
  FooterFon,
  FooterFonWrapper,
  FooterNavWrapper,
  FooterRightBlock,
  FooterInfo,
  FooterBottom,
  FooterSocial,
  FooterSocialItem
}