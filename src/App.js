import React, { Component } from 'react';
import Header from './header';
import Navbar from './navbar';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './home';
import Faculty from './faculty';
import Students from './students';
import Projects from './projects';
import Events from './events';
import Publications from './publications';

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
                        <Route path='/students' component={Students}/>
                        <Route path='/projects' component={Projects}/>
                        <Route path='/events' component={Events}/>
                        <Route path='/publications' component={Publications}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
