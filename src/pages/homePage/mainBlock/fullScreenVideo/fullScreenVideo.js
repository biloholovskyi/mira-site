import React from 'react';
import { Player, ControlBar } from 'video-react';

import closed from '../media/close.svg'
import {FullVideo, CloseBtn, FakeBg} from './styled';
import './video-react.css';

const FullScreenVideo = ({close}) => {
  return (
    <FullVideo>
      <CloseBtn onClick={close} ><img src={closed} alt="icon"/></CloseBtn>
      <Player
        playsInline
        muted
        autoPlay
        loop
        poster="./poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      >
        <ControlBar className="my-control-bar" />
      </Player>
      <FakeBg/>
    </FullVideo>
  )
}

export default FullScreenVideo;