import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
  },
  padding: {
    paddingTop: 5,
  },
  flexGrow: {
    flex: 'auto',
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

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sno: props.sno,
            title: props.title,
            people: props.people,
            researchArea: props.researchArea,
            summary: props.summary,
        };
    }

    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        return (
            <div className={this.props.classes.padding}>
                <Card className={this.props.classes.columnFlex}>
                    <div className={this.props.classes.card}>
                    <CardContent>
                          <Typography type="headline">
                            {this.state.title}
                          </Typography>
                          <Typography type="subheading">
                              {this.state.people}
                          </Typography>
                      </CardContent>
                      <div className={this.props.classes.flexGrow}/>
                      <CardContent className={this.props.classes.columnFlex}>
                        <div className={this.props.classes.flexGrow}/>
                        <CardActions disableActionSpacing>
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
                         <div className={this.props.classes.flexGrow}/>
                      </CardContent>
                      </div>
                      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                          <CardContent>
                              <Typography type="display1">
                                  Summary
                              </Typography>
                              <Typography comment="p">
                                  {this.state.summary}
                              </Typography>
                          </CardContent>
                      </Collapse>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(ProjectCard);
