import React from 'react'

import * as Style from './styled'

import twitter from "./media/twitter.svg";
import linkedin from "./media/linkedin.svg";
import facebook from "./media/facebook.svg";
import whatsapp from "./media/watsap.svg";
import telegram from "./media/telegram.svg";

const SocialList = () => {
	return (
    <Style.Wrapper>
      <Style.Item href={'#'}>
        <img src={twitter} alt="social"/>
      </Style.Item>

      <Style.Item href={'#'}>
        <img src={linkedin} alt="social"/>
      </Style.Item>

      <Style.Item href={'#'}>
        <img src={facebook} alt="social"/>
      </Style.Item>

      <Style.Item href={'#'}>
        <img src={whatsapp} alt="social"/>
      </Style.Item>

      <Style.Item href={'#'}>
        <img src={telegram} alt="social"/>
      </Style.Item>
    </Style.Wrapper>
	)
}

export default SocialList