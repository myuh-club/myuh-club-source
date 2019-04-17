import React from 'react';
import { Header, Container, Icon } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '/imports/api/club/club';
import Club from '/imports/ui/components/Club';

/** A simple static component to render some text for the search page. */
class Favorites extends React.Component {

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
Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};


/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  //const subscription = Meteor.subscribe('Clubs');
  return {
    //favorites: Favorites.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Favorites);
