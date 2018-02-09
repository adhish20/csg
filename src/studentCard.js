import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    width: 250,
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
  },
  padding: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 5,
  },
  media: {
    height: 240,
  },
});

class StudentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            position: props.position,
            image: props.image,
        };
    }

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
                      </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(StudentCard);
