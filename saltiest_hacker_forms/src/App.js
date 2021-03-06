import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from '../src/Components/Navbar';
import LogInForm from './Components/FE_Unit2_React/LogInForm'
import Signup from './Components/FE_Unit2_React/Signup'
import { PrivateRoute } from '../src/Utils/PrivateRoute';
// import SaltiestContext from '../src/Contexts/saltiestContext';
import Dashboard from './Components/Dashboard'
import SavedPosts from './Components/SavedPosts';
// <<<<<< React 1 GET
// import GitHub from './Components/GitHub';
// <<<<<< END React 1 GET


function App() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : false;
  }, []);

  return (
    < >
      <Navbar />
      <Switch>

        <Route exact path='/'>
          <Dashboard />
          {/* // <<<<<< React 1 */}
          {/* <GitHub /> */}
          {/* // <<<<<< END React 1 */}
        </Route>

        <Route path='/signup'>
          <Signup userInfo={userInfo} setUserInfo={setUserInfo} />
        </Route>

        <Route path='/SignIn'>
          <LogInForm userInfo={userInfo} setUserInfo={setUserInfo} />
        </Route>

        <PrivateRoute component={SavedPosts} path='/savedposts' />

      </Switch>
    </>
  )
}

export default App;