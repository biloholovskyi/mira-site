import React, {useEffect, useState} from 'react'
import axios from "axios";

import * as Style from './styled'

import twitter from "./media/twitter.svg";
import linkedin from "./media/linkedin.svg";
import facebook from "./media/facebook.svg";
import whatsapp from "./media/watsap.svg";
// import telegram from "./media/telegram.svg";
// import vk from '../footer/media/vk-logo.svg'
import inst from './media/insta.svg'
// import you from '../footer/media/youtube.svg'

import ServerSettings from "../../service/serverSettings";

const SocialList = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  const getSocialLinks = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/links/`)
      .then(res => {
        setSocialLinks(res.data)
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getSocialLinks().catch(error => console.error(error));
  }, [])

  return (
    <Style.FlexWrapper>
      {/*<Style.Wrapper>*/}
      {/*  <Style.Item href={'https://vk.com/mira_invest_fond'} target={'_blank'}>*/}
      {/*    <img src={vk} alt="social"/>*/}
      {/*  </Style.Item>*/}
      {/*</Style.Wrapper>*/}

      {/*<Style.Wrapper>*/}
      {/*  <Style.Item href={'https://www.youtube.com/channel/UC__2A7FAzYxtm5JioTetLYQ'} target={'_blank'}>*/}
      {/*    <img src={you} alt="social"/>*/}
      {/*  </Style.Item>*/}
      {/*</Style.Wrapper>*/}

      <Style.Wrapper>
        <Style.Item href={'https://www.instagram.com/mira_company_/'} target={'_blank'}>
          <img src={inst} alt="social"/>
        </Style.Item>
      </Style.Wrapper>

      {/*<Style.Wrapper>*/}
      {/*  <Style.Item href={'http://t.me/miracompany_bot'} target={'_blank'}>*/}
      {/*    <img src={telegram} alt="social"/>*/}
      {/*  </Style.Item>*/}
      {/*</Style.Wrapper>*/}
    </Style.FlexWrapper>
  )
}

export default SocialList