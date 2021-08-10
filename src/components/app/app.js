import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router";

import Header from "../header/header";
import HomePage from "../../pages/homePage/homePage";
import Documents from '../../pages/documents/documents'
import News from "../../pages/news/news";
import Contacts from "../../pages/contacts/contacts";
import School from "../../pages/school/school";
import SingleNews from '../../pages/singleNews/singleNews';
import Footer from "../footer/footer";
import axios from "axios";
import ServerSettings from "../../service/serverSettings";

const App = () => {


  return (
    <>
      <Header/>

      <Switch>
        <Route path={'/'} exact component={HomePage}/>
        <Route path={'/news'} exact component={News}/>
        <Route path={'/documents'} exact component={Documents}/>
        <Route path={'/contacts'} exact component={Contacts}/>
        <Route path={'/school'} exact component={School}/>
        <Route path={'/singleNews'} exact component={SingleNews}/>
      </Switch>

      <Footer />
    </>
  )
}

export default App;