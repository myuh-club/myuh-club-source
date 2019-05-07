import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Item, Header, Loader, Icon } from 'semantic-ui-react';
import { Clubs } from '/imports/api/club/club';
import ClubItemAdmin from '/imports/ui/components/ClubItemAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ClubEditAdmin extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h1" textAlign="center" icon inverted>
            <Icon name="pencil" circular inverted color='teal'/> Edit Clubs
          </Header>

          <Item.Group divided>
            {this.props.clubs.map((club, index) => <ClubItemAdmin key={index} club={club}/>)}
          </Item.Group>
        </Container>
    );
  }
}

/** Require an array of Clubs documents in the props. */
ClubEditAdmin.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Club documents.
  const subscription = Meteor.subscribe('ClubAdmin');
  return {
    clubs: Clubs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ClubEditAdmin);
