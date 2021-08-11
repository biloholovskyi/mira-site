import React, {useEffect, useState} from 'react'
import axios from "axios";

import * as Style from './styled'

import twitter from "./media/twitter.svg";
import linkedin from "./media/linkedin.svg";
import facebook from "./media/facebook.svg";
import whatsapp from "./media/watsap.svg";
import telegram from "./media/telegram.svg";

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
    <Style.Wrapper>
      {
        socialLinks.map((item, k) => {
          return (
            <Style.Item key={k} href={item.link} target={'_blank'}>
              <img src={item.icon} alt="social"/>
            </Style.Item>
          )
        })
      }
    </Style.Wrapper>
  )
}

export default SocialList