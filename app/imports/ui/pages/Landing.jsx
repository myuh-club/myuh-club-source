import React from 'react';
import { Grid, Icon, Header, Button, List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react/dist/commonjs/collections/Menu';


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='myuhclub-landing-background'>
          <Grid verticalAlign='middle' textAlign='center' columns={2}>
            <Grid.Column>
              <Header size='huge' inverted>MyUH Club</Header>
            </Grid.Column>

            <Grid.Column className='myuhclub-landing-background-right'>
              <Grid.Row>
                <Header as='h3' inverted><Icon name='search' size='huge' inverted/>Search for Your Club</Header>
                <Header as='h3' inverted><Icon name='star' size='huge' inverted/>Add to Your Favorite</Header>
                <Header as='h3' inverted><Icon name='users' size='huge' inverted/>Expand Your Community</Header>
              </Grid.Row>

              <List>
                <List.Item>
                  <Button.Group>
                    <Button as={NavLink} activeClassName="active" exact to="signin" key='signin' color='teal'>Sign In</Button>
                    <Button.Or/>
                    <Button as={NavLink} activeClassName="active" exact to="signup" key='signin' positive >Sign Up</Button>
                  </Button.Group>
                </List.Item>
                <List.Item>
                  <Button as={NavLink} activeClassName="active" exact to="search" key='search' color='black' size='huge'>
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