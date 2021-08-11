import styled from 'styled-components';

const FullVideo = styled.div`
  position: ${props => props.main === false ? 'fixed' : 'absolute'};
  z-index: ${props => props.main === false ? '200' : '2'};
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  .video-react {
    top: ${props => props.main === false ? 'unset' : '-65px'};
    .video-react-poster {
      background-size: cover!important;
      top: ${props => props.main === false ? '0' : '-135px'};
    }
  }
`

const CloseBtn = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

const FakeBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 2;
`

export {
  FullVideo,
  CloseBtn,
  FakeBg
}