import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Icon } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
      <Header as="h2" textAlign="center" icon inverted>
        <Icon name="sign-out" circular inverted color='teal'/>
        <p>You are signed out.</p>
      </Header>
    );
  }
}
