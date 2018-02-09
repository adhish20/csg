import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

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
});

class PublicationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sno: props.sno,
            title: props.title,
            authors: props.authors,
            conference: props.conference,
            year: props.year,
        };
    }

    render() {
        return (
            <div className={this.props.classes.padding}>
                <Card className={this.props.classes.card}>
                    <CardContent>
                          <Typography type="title">
                            {this.state.title}
                          </Typography>
                          <Typography component="p">
                              {this.state.authors}
                          </Typography>
                          <Typography component="p">
                              {this.state.conference}
                          </Typography>
                      </CardContent>
                      <div className={this.props.classes.flexGrow}/>
                      <CardContent className={this.props.classes.columnFlex}>
                        <div className={this.props.classes.flexGrow}/>
                        <Typography type="title">
                            {this.state.year}
                        </Typography>
                         <div className={this.props.classes.flexGrow}/>
                      </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(PublicationCard);
