import React from "react";
import {Route, Switch} from "react-router";

import Header from "../header/header";
import HomePage from "../../pages/homePage/homePage";
import Documents from '../../pages/documents/documents'

const App = () => {
  return (
    <>
      <Header/>

      <Switch>
        <Route path={'/'} exact component={HomePage}/>
        <Route path={'/documents'} exact component={Documents}/>
      </Switch>
    </>
  )
}

export default App;