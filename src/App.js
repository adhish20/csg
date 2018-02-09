import React, { Component } from 'react';
import Header from './header';
import Navbar from './navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import Faculty from './faculty';
import Students from './students';
import Projects from './projects';
import Events from './events';
import Publications from './publications';
import Footer from './footer';

class App extends Component {
  render() {
    return (
            <Router>
                <div>
                    <Header />
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/faculty' component={Faculty}/>
                        <Route exact path='/students' component={Students}/>
                        <Route exact path='/projects' component={Projects}/>
                        <Route exact path='/events' component={Events}/>
                        <Route exact path='/publications' component={Publications}/>
                    </Switch>
                    <Footer />
                </div>
            </Router>
    );
  }
}

export default App;
