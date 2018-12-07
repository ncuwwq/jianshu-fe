import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import store from './store'

class App extends Component {
    render() {
        return (
        	<Provider store={store}>
	           	<BrowserRouter>
	           		<div>
                  <Header />
		            	<Route path='/' exact component={Home} ></Route>
		            	<Route path='/detail/:id' exact component={Detail} ></Route>
                  <Route path='/login' exact component={Login} ></Route>
	            	</div>
	           	</BrowserRouter>
          </Provider>
        );
    }
}

export default App;
