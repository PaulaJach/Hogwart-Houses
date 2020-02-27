import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import App from './App';
import Header from './components/Header';
import Houses from './components/Houses';
import Teachers from './components/Teachers';
import Spells from './components/Spells';

const historyBrowser = createBrowserHistory();
ReactDOM.render(
	<Router history={historyBrowser}>
		<Switch>
			<Route exact path='/' render={() => <Header><App/></Header>}></Route>
			<Route path='/houses' render={() => <Header><Houses/></Header>}></Route>
            <Route path='/teachers' render={() => <Header><Teachers/></Header>}></Route>
			<Route path='/spells' render={() => <Header><Spells/></Header>}></Route>
		</Switch>
	</Router>,
	document.getElementById('root')
);
