import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Collapse from 'material-ui/transitions/Collapse';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  card: {
    width: 250,
    minHeight: 415,
    display: 'flex',
    flexDirection: 'column',
  },
  flexGrow: {
    flex: 'auto',
  },
  padding: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 5,
  },
  media: {
    height: 240,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class FacultyCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            position: props.position,
            image: props.image,
            study: props.study,
            researchInterests: props.researchInterests,
        };
    }

    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };
    render() {
        return (
            <div className={this.props.classes.padding}>
                <Card className={this.props.classes.card}>
                    <CardMedia
                      className={this.props.classes.media}
                      image={this.state.image}
                      title={this.state.name}
                    />
                    <CardContent>
                      <Typography type="title">
                        {this.state.name}
                      </Typography>
                      <Typography component="p">
                          {this.state.position}
                      </Typography>
                      <Typography component="p">
                          {this.state.study}
                      </Typography>
                      </CardContent>
                      <div className={this.props.classes.flexGrow}/>
                      <CardActions disableActionSpacing>
                          <CardContent>
                          <Typography type="heading">
                            Research Interests
                          </Typography>
                          </CardContent>
                          <IconButton
                                className={classnames(this.props.classes.expand, {
                                  [this.props.classes.expandOpen]: this.state.expanded,
                                })}
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                              >
                                <ExpandMoreIcon />
                          </IconButton>
                      </CardActions>
                      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                          <CardContent>
                              <List>

                                {this.state.researchInterests.map(function(researchInterest) {
                                    return (
                                        <div>
                                            <Divider />
                                            <ListItem button key={researchInterest}>
                                                <ListItemText primary={researchInterest}/>
                                            </ListItem>
                                        </div>
                                    );
                                })}
                              </List>
                          </CardContent>
                      </Collapse>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(FacultyCard);
