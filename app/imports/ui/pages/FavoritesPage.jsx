import React from 'react';
import { Header, Container, Icon, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '/imports/api/club/club';
import Club from '/imports/ui/components/Club';
import { Favorites } from '/imports/api/favorite/favorite';

/** A simple static component to render some text for the search page. */
class FavoritesPage extends React.Component {

  render() {
    return (
        <Container>
          <Header as="h1" textAlign="center" icon>
            <Icon name="star" circular/> Favorites
          </Header>
          <Card.Group>

          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Club documents in the props. */
FavoritesPage.propTypes = {
  favorites: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};


/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Favorites');
  return {
    favorites: Favorites.find({}).fetch(),
    ready: subscription.ready(),
  };
})(FavoritesPage);
