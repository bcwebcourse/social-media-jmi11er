import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import css from './App.module.css';

import Header from './Header.js';
import Home from './Home.js';
import Explore from './Explore.js';
import NewPost from './NewPost.js';
import Activity from './Activity.js';
import Profile from './Profile';

import StoreContextProvider from 'contexts/StoreContext';

function App(){
  return (
		<Router basename={process.env.PUBLIC_URL}>
      <StoreContextProvider>
      <div>
        <Header/>
      </div>
			<div className={css.content}>
        <Switch>
          <Route path="/profile/:userId?">
            <Profile />
          </Route>
          <Route path="/activity">
            <Activity/>
          </Route>
          <Route path="/explore">
            <Explore/>
          </Route>
          <Route path="/newpost">
          <NewPost/>
          </Route>
          <Route path="/:postId?">
            <Home/>
          </Route>
        </Switch>
			</div>
      </StoreContextProvider>
		</Router>
	);
}
export default App;
