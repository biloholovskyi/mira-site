import React from 'react';
import { Player, ControlBar } from 'video-react';

import closed from '../media/close.svg'
import {FullVideo, CloseBtn, FakeBg} from './styled';
import './video-react.css';

const FullScreenVideo = ({close, mainContent, main = false}) => {
  return (
    <FullVideo main={main}>
      {
        main === false && (
          <CloseBtn onClick={close} ><img src={closed} alt="icon"/></CloseBtn>
        )
      }
      <Player
        playsInline
        muted
        autoPlay
        loop
        poster={mainContent.image}
        posterResizeMode={'cover'}
        src={mainContent.video}
      >
        <ControlBar className="my-control-bar" />
      </Player>
      <FakeBg/>
    </FullVideo>
  )
}

export default FullScreenVideo;