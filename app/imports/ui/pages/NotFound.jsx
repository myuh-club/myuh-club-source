import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class NotFound extends React.Component {
  render() {
    return (
        <Header as="h1" textAlign="center" icon inverted>
          <Icon name="exclamation triangle" circular inverted color='teal'/>Page not found
        </Header>
    );
  }
}

export default NotFound;
