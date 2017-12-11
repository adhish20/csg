import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './swipe-gallery/Pagination';
import SupportTouch from './swipe-gallery/SupportTouch';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
    root: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        height: 400,
    },
});

class Gallery extends Component {

    state = {
        index: 0,
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {

        const { index } = this.state;

        return (
            <SupportTouch>
                <div className={this.props.classes.root}>
                    <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                        <div><img src="./Image1.jpg" alt="Image1"/></div>
                    </AutoPlaySwipeableViews>
                    <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
                </div>
            </SupportTouch>
        );
  }
}

export default withStyles(styles)(Gallery);
