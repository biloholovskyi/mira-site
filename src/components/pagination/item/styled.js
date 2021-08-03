import styled from "styled-components";

const Block = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #373737;
  border-top: 1px solid #373737;
  border-left: 1px solid #373737;
  
  &:last-child {
    border-right: 1px solid #373737;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
  
  &:first-child {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
  
  .number {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.8);
    opacity: 0.64;
  }
  
  .dots {
    font-family: TT Interfaces, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.8);
  }

  &:hover {
    cursor: pointer;
  }
  
  ${props => props.active && `
    border-bottom: 1px solid #36B37E;
    border-top: 1px solid #36B37E;
    border-left: 1px solid #36B37E;
    border-right: 1px solid #36B37E;
    background: rgba(54, 179, 126, 0.2);
  `}
`

export {
  Block
}