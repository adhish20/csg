import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  card: {
    display: 'flex'
  },
  flexGrow: {
    flex: 'auto',
  },
});

class Footer extends Component {

    render() {
        return (
                <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typography type="heading">
                            <Icon>copyright</Icon> 2018 Computer Systems Group (CSG), IIIT-Hyderabad.
                        </Typography>
                    </CardContent>
                    <div className={this.props.classes.flexGrow} />
                </Card>
        );
    }
}

export default withStyles(styles)(Footer);
