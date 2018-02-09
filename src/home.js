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
                                <ListItemText primary="The Computer Systems Group (CSG) was set-up in June 2017. Computer Systems Group undertakes research and development in all fundamental aspects of Computing Systems spanning across hardware and software. This group is actively involved in research and imparting advanced training through workshops, seminars, and semester long courses in the fields of computer architecture, compilers, computer networks, operating systems and other related topics. As a new group CSG today has about 3 faculty members and about 15 research students including Phd, Masters and honors students working on research topics that directly contribute and make an impact on the next-generation computing hardware and software." />
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
                        screenName: 'csg_iiith'
                    }}
                    options={{
                        width: 900,
                        height: 700
                    }}
                />
            </Card>
        </div>
        );
  }
}

export default withStyles(styles)(Home);
