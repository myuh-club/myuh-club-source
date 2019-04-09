import React from 'react';
import { Grid, Image, Icon, Header, Button, Container, List } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const divStyle = { backgroundColor: "#006400", opacity: "0.8", borderRadius: "15px" };
    const temp = {padding: "2rem"};
    return (
        <div className='myuhclub-landing-background' style={temp}>
          <Grid verticalAlign='middle' textAlign='center' columns={2}>
            <Grid.Column>
              <Header size='huge' inverted>MyUH Club</Header>
            </Grid.Column>

            <Grid.Column style={divStyle}>

              <Grid.Row>
                <Header as='h3' inverted><Icon name='search' size='huge' inverted/>Search for Your Club</Header>
                <Header as='h3' inverted><Icon name='star' size='huge' inverted/>Add to Your Favorite</Header>
                <Header as='h3' inverted><Icon name='users' size='huge' inverted/>Expand Your Community</Header>
              </Grid.Row>

              <List>
                <List.Item>
                  <Button.Group>
                    <Button color='teal' basic>Sign In</Button>
                    <Button.Or/>
                    <Button positive basic>Sign Up</Button>
                  </Button.Group>
                </List.Item>
                <List.Item>
                  <Button basic color='black' size='huge'>
                    <Icon name='search'/>
                    Search
                  </Button>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>

    );
  }
}

export default Landing;