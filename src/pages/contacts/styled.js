import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #121212;
  padding: 200px 0 120px 0;
  
  .left {
    padding-top: 54px;
  }
`

const ContactsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  
  .item {
    width: 50%;
    min-width: 50%;
    margin-bottom: 60px;
    
    .name {
      font-family: TT Interfaces, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.005em;
      color: rgba(255, 255, 255, 0.64);
    }
    
    .contact {
      font-family: TT Interfaces, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0.01em;
      color: #FFFFFF;
    }
    
    &--social {
      .name {
        margin-bottom: 12px;
      }
    }
  }
`

export {
  Wrapper,
  ContactsBlock
}