import React, { Component } from 'react';
import Header from './header';
import Navbar from "./navbar";
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './home';
import Faculty from './faculty';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/faculty' component={Faculty}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
