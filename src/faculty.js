import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import FacultyCard from './facultyCard';
import axios from 'axios';

const styles = theme => ({
  flex: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

class Faculty extends Component {

  constructor(props) {
      super(props);
      this.state = {
          cards: []
      };
  }

  componentDidMount() {
    var th = this;
    this.serverRequest =
      axios.get("./faculty.json")
        .then(function(result) {
          th.setState({
            cards: result.data.faculty
          });
      })
  }

  render() {
    return (
        <div className={this.props.classes.flex}>
        {this.state.cards.map(function(card) {
          return (
            <FacultyCard key={card.key} name={card.name} image={card.image} position={card.position} study={card.study} researchInterests={card.researchInterests}/>
          );
        })}
        </div>
    );
  }
}

export default withStyles(styles)(Faculty);
