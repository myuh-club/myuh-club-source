import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Item, Header, Loader } from 'semantic-ui-react';
import { Clubs } from '/imports/api/club/club';
import ClubItem from '/imports/ui/components/ClubItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a component to edit a club */
class ClubEditOrg extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>Club (Organizer)</Header>
          <Item.Group divided>
            {this.props.clubs.map((club, index) => <ClubItem key={index} club={club}/>)}
          </Item.Group>
        </Container>
    );
  }
}

/** Require an array of Clubs documents in the props. */
ClubEditOrg.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Club documents.
  const subscription = Meteor.subscribe('ClubOrg');
  return {
    clubs: Clubs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ClubEditOrg);
