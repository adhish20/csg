import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import ProjectCard from './projectCard';
import axios from 'axios';

const styles = theme => ({
  flex: {
    display: 'flex',
    flexDirection: 'column',
  },
});

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
      var th = this;
      this.serverRequest =
        axios.get("./projects.json")
          .then(function(result) {
            th.setState({
              cards: result.data.projects
            });
        })
    }
    render() {
        return (
            <div>
                <div className={this.props.classes.flex}>
                {this.state.cards.map(function(card) {
                  return (
                    <ProjectCard key={card.key} title={card.title} people={card.people} researchArea={card.researchArea} keywords={card.keywords} summary={card.summary}/>
                  );
                })}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Projects);
