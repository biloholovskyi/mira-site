import React, {useState} from "react";

import UsersTab from "./usersTab/usersTab";

import * as Style from './styled'
import top from './media/image/top.svg';
import Footer from "../../components/footer/footer";
import ReportTab from "./reportTab/reportTab";
import DocumentTab from "./documentTab/documentTab";

const Documents = () => {
  const [tabStatus, setTabStatus] = useState('users');

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
                <Style.TabHeadNav className='tabs-active'
                                  onClick={(e) => changeTab(e, 'users')}>Пользователям</Style.TabHeadNav>
                <Style.TabHeadNav onClick={(e) => changeTab(e, 'report')}>Отчеты</Style.TabHeadNav>
                <Style.TabHeadNav onClick={(e) => changeTab(e, 'documents')}>Документы компании</Style.TabHeadNav>
              </Style.TabHead>
            </div>
          </div>
          <div className="row">
            <div className="tab_body">
              <div className="col-12">
                {
                  tabStatus === 'users'
                    ? <UsersTab/>
                    : tabStatus === 'report'
                    ? <ReportTab/>
                    : tabStatus === 'documents'
                    ? <DocumentTab/>
                    : null
                }
              </div>
            </div>
          </div>
        </div>
      </Style.Wrapper>
      {/*<Footer/>*/}
    </>
  )
}

export default Documents;