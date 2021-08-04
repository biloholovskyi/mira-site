import React from "react";
import {Route, Switch} from "react-router";

import Header from "../header/header";
import HomePage from "../../pages/homePage/homePage";
import Documents from '../../pages/documents/documents'
import News from "../../pages/news/news";
import Contacts from "../../pages/contacts/contacts";

const App = () => {
  return (
    <>
      <Header/>

      <Switch>
        <Route path={'/'} exact component={HomePage}/>
        <Route path={'/news'} exact component={News}/>
        <Route path={'/documents'} exact component={Documents}/>
        <Route path={'/contacts'} exact component={Contacts}/>
      </Switch>
    </>
  )
}

export default App;