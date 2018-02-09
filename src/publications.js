import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PublicationCard from './publicationCard';
import axios from 'axios';

const styles = theme => ({
  flex: {
    display: 'flex',
    flexDirection: 'column',
  },
});

class Publications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
      var th = this;
      this.serverRequest =
        axios.get("./publications.json")
          .then(function(result) {
            th.setState({
              cards: result.data.publications
            });
        })
    }
    render() {
        return (
            <div>
                <div className={this.props.classes.flex}>
                {this.state.cards.map(function(card) {
                  return (
                    <PublicationCard key={card.key} sno={card.key} title={card.title} authors={card.authors} conference={card.conference} year={card.year}/>
                  );
                })}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Publications);
