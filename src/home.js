import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Gallery from './gallery';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Timeline } from 'react-twitter-widgets';

const styles = theme => ({
    card: {
      display: 'flex',
      height: 610
    },
    flexGrow: {
      flex: 'auto',
    },
});

class Home extends Component {
    render() {
      return (
        <div>
            <Gallery />
            <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typography type="display2">
                            About
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="The Computer Systems Group (CSG) was setup in June 2017. Computer Systems Group undertakes research and development in all fundamental aspects of Computing Systems spanning across hardware and software." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="The following are the research areas, which the group is either pursuing currently or would like to in the near future:" />
                            </ListItem>
                            <List>
                            <ListItem button>
                                <ListItemText primary="Computer Architecture" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Compilers" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Programming Languages" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Computer Networks" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Parallel and Distributed Computing" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Cloud Computing" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Systems Security" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Internet of Things" />
                            </ListItem>
                            </List>
                        </List>
                    </CardContent>
                <div className={this.props.classes.flexGrow} />
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'SERC_IIITH'
                    }}
                    options={{
                        width: 750,
                        height: 600
                    }}
                />
            </Card>
        </div>
        );
  }
}

export default withStyles(styles)(Home);
