import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Icon, Card, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '/imports/api/club/club';
import Club from '/imports/ui/components/Club';
import { Favorites } from '/imports/api/favorite/favorite';

/** A simple static component to render some text for the search page. */
class FavoritesPage extends React.Component {

  componentWillMount() {
    if (Favorites.find().fetch().length != 0) {
      this.setState({favorites: Favorites.find().fetch()[0].favorites}, () => '');
    }
  }

  componentDidMount() {
    if (Favorites.find().fetch().length != 0) {
      this.setState({favorites: Favorites.find().fetch()[0].favorites}, () => '');
    }
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Container>
          <Header as="h1" textAlign="center" icon inverted>
            <Icon name="star" circular inverted color='teal'/> Favorites
          </Header>
          {(this.state.favorites.length != 0) ?
            <Card.Group>
              {this.state.favorites.map((club) => <Club
                  key={club}
                  club={Clubs.findOne({ _id: club })}
              />)}
            </Card.Group>
              :
              <Header as='h3' textAlign="center" inverted>You do not have any favorites.</Header>
          }
        </Container>
    );
  }
  constructor(props) {
    super(props);
    this.renderPage = this.renderPage.bind(this);

    this.state = {
      favorites: []
    };

  }
}

/** Require an array of Club documents in the props. */
FavoritesPage.propTypes = {
  ready: PropTypes.bool.isRequired,
};


/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Clubs');
  const subscription2 = Meteor.subscribe('Favorites');
  return {
    ready: subscription.ready() && subscription2.ready(),
  };
})(FavoritesPage);
