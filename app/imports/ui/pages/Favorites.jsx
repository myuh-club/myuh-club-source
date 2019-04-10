import React from 'react';
import { Header, Container, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the search page. */
class Favorites extends React.Component {

  render() {
    return (
        <Container>
          <Header as="h1" textAlign="center" icon>
            <Icon name="star" circular/> Favorites
          </Header>
        </Container>
    );
  }
}

export default Favorites;
