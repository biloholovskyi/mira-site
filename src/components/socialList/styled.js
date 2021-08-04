import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 575px) {
    margin-bottom: 32px;
  }
`

const Item = styled.a`
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
  Wrapper,
  Item
}