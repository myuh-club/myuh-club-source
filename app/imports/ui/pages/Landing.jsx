import React from 'react';
import { Grid, Image, Icon, Header, Button, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    // const headerStyle = { color: "white", fontSize: "4rem" };
    const divStyle = { backgroundColor: "#006400" };
    return (
        <div className='myuhclub-landing-background'>
          <Grid verticalAlign='middle' textAlign='center' columns={2}>
            <Grid.Column className='myuhclub-landing-background'>
              <Header as='h3' inverted><Icon name='search' size='huge' inverted/>Search for Your Club</Header>
              <Header as='h3' inverted><Icon name='star' size='huge' inverted/>Add to Your Favorite</Header>
              <Header as='h3' inverted><Icon name='users' size='huge' inverted/>Expand Your Community</Header>
            </Grid.Column>

            <Grid.Column style={divStyle}>
              <Header size='huge' inverted>MyUH Club</Header>

              <Grid.Row>
                <Header as='h3' inverted><Icon name='search' size='huge' inverted/>Search for Your Club</Header>
                <Header as='h3' inverted><Icon name='star' size='huge' inverted/>Add to Your Favorite</Header>
                <Header as='h3' inverted><Icon name='users' size='huge' inverted/>Expand Your Community</Header>
              </Grid.Row>

              <Grid.Row>
                <Button.Group>
                  <Button color='teal' basic>Sign In</Button>
                  <Button.Or/>
                  <Button positive basic>Sign Up</Button>
                </Button.Group>

              </Grid.Row>

              <Grid.Row>
                <Button basic color='black' size='huge'>
                  <Icon name='search'/>
                  Search
                </Button>
              </Grid.Row>

              <Grid.Column>
                <h1>Welcome to this template</h1>
                <p>Now get to work and modify this app!</p>
              </Grid.Column>
            </Grid.Column>

          </Grid>
        </div>

    );
  }
}

export default Landing;