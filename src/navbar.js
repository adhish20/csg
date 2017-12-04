import React from 'react';
import { withRouter } from "react-router-dom";
import { grey } from 'material-ui/colors';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

class Navbar extends React.Component {

    handleChange = (event, value) => {
        this.props.history.push(value);
    };

    render() {
        return (
            <AppBar position="default" color="default">
                <Tabs
                  value={this.props.history.location.pathname}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  fullWidth
                >
                  <Tab value="/" label="Home" />
                  <Tab value="/faculty" label="Faculty" />
                  <Tab value="/students" label="Students">

                  </Tab>
                  <Tab value="/projects" label="Projects" />
                  <Tab value="/events" label="Events" />
                  <Tab value="/publications" label="Publications" />
                </Tabs>
            </AppBar>
        );
    }
}

export default withRouter(Navbar);
