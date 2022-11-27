import React from 'react';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" element={<Home />} />
				<Route path="/:name" element={<Detail />} />
			</Switch>
		</Router>
	);
};

export default Routes;
