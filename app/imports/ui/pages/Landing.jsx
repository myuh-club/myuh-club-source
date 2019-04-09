import React from 'react';
import { Grid, Icon, Header, Button, List } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const padding = { padding: "2rem" };
    const opacity = { opacity: "1" };
    return (
        <div className='myuhclub-landing-background' style={padding}>
          <Grid verticalAlign='middle' textAlign='center' columns={2}>
            <Grid.Column>
              <Header size='huge' inverted>MyUH Club</Header>
            </Grid.Column>

            <Grid.Column className='myuhclub-landing-background-right' style={opacity}>
              <Grid.Row>
                <Header as='h3' inverted><Icon name='search' size='huge' inverted/>Search for Your Club</Header>
                <Header as='h3' inverted><Icon name='star' size='huge' inverted/>Add to Your Favorite</Header>
                <Header as='h3' inverted><Icon name='users' size='huge' inverted/>Expand Your Community</Header>
              </Grid.Row>

              <List>
                <List.Item>
                  <Button.Group>
                    <Button color='teal'>Sign In</Button>
                    <Button.Or/>
                    <Button positive>Sign Up</Button>
                  </Button.Group>
                </List.Item>
                <List.Item>
                  <Button color='black' size='huge'>
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