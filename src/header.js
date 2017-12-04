import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    width: 100,
    height: 100,
  },
});

class Header extends Component {

    render() {
        return (
            <div>
                <Card className={this.props.classes.card}>
                    <CardMedia className={this.props.classes.media}
                        image="./csg_logo.png"
                        title="Computer Systems Group"
                    />
                    <CardContent>
                      <Typography type="headline" component="h1">
                        Computer Systems Group
                      </Typography>
                     </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
