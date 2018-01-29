import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import StudentCard from './studentCard';
import axios from 'axios';

const styles = theme => ({
  flex: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
      var th = this;
      this.serverRequest =
        axios.get("./student.json")
          .then(function(result) {
            th.setState({
              cards: result.data.student
            });
        })
    }

    render() {
      return (
          <div className={this.props.classes.flex}>
          {this.state.cards.map(function(card) {
            return (
              <StudentCard key={card.key} name={card.name} image={card.image} position={card.position} />
            );
          })}
          </div>
      );
    }
}

export default withStyles(styles)(Students);
