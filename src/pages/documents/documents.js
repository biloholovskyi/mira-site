import React, {useEffect, useState} from "react";
import axios from "axios";

import UsersTab from "./usersTab/usersTab";
import TabItem from "./tabItem/tabItem";
import Footer from "../../components/footer/footer";
import ReportTab from "./reportTab/reportTab";
import DocumentTab from "./documentTab/documentTab";

import * as Style from './styled'
import top from './media/image/top.svg';

import ServerSettings from "../../service/serverSettings";


const Documents = () => {
  const [tabStatus, setTabStatus] = useState('Пользователям');
  const [catName, setCatName] = useState([]);
  const [files, setFiles] = useState([]);
  const [currentCat, setCurrentCat] = useState({});

  const getDocCategories = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/categories/`)
      .then(res => {
        setCatName(res.data)
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    const findCat = catName.find(u => u.name === tabStatus);
    setCurrentCat(findCat)
  })

  useEffect(() => {
    getDocCategories().catch(error => console.error(error));
  }, [])

  const getDocumentFiles = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/files/`)
      .then(res => {
        setFiles(res.data)
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getDocumentFiles().catch(error => console.error(error));
  }, [])


  // change categories Tab
  const changeTab = (e, tab) => {
    setTabStatus(tab);
    document.querySelector('.tabs-active').classList.remove('tabs-active');
    e.target.classList.add('tabs-active');
  };

  return (
    <>
      <Style.Wrapper>
        <img src={top} alt="image" className={'top_image'}/>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title">Документы</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Style.TabHead>

                {
                  catName.map((item, key) => {
                    return (
                      <Style.TabHeadNav className={`${item.id === 1 && 'tabs-active'}`} key={key}
                                        onClick={(e) => changeTab(e, `${item.name}`)}>{item.name}</Style.TabHeadNav>
                    )
                  })
                }
              </Style.TabHead>
            </div>
          </div>
          <div className="row">
            <div className="tab_body">
              <div className="col-12">
                <Style.TabBodyWrap>
                  {
                    tabStatus
                      ? (
                        files.map((item, key) => {
                          if (item.doc_cat === currentCat.id) {
                            return (

                              <TabItem key={key} item={item}/>

                            )
                          }
                        })
                      ) : null
                  }
                </Style.TabBodyWrap>
              </div>
            </div>
          </div>
        </div>
      </Style.Wrapper>
      {/*<Footer/>*/}
      <div style={{display: 'none'}} id="tickers_top"/>
      <div style={{display: 'none'}} id="tickers_bottom"/>
    </>
  )
}

export default Documents;