import React from 'react';
import { Grid, Icon, Header, Button, List, Image, Container } from 'semantic-ui-react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react/dist/commonjs/collections/Menu';

import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';



/** A simple static component to render some text for the landing page. */
class MyUhLanding extends React.Component {
  render() {
    return (
        <Container>
          <Grid>
            <Grid.Row columns={2} verticalAlign='middle'>
              <Grid.Column width={6}>
                <Image src="/images/UH-Manoa-min.png"/>
              </Grid.Column>

              <Grid.Column width={10}>
                <Header as='h1'>
                  Registered Independent Organizations
                </Header>
                <Header as='h3'>
                  University of Hawaii at Manoa has more than 200 Registered Independent Organizations.<br/>
                  When it comes to finding one for you, however,
                  it is a hard task to go through every organization!
                  Here, MyUH Club can help you
                  find "the one" for you.
                </Header>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Header as='h2'>What is RIO?</Header>
              <Header as='h4'>Registered Independent Organizations (RIOs) 'serve the campus and greater community by providing leadership development for students and by promoting community spirit, activism, public service, and social, recreational, and cultural interaction among UHM students, faculty, and staff.' (UH Manoa Website) <br/> Use MyUH Club to search through RIOs! </Header>
            </Grid.Row>

            <Grid.Row columns={3}>


            </Grid.Row>

            {this.props.currentUser ? ("You are Logged in.") : ("You are not logged in")}


            <Grid.Row>
              <List>
                <List.Item>
                  <Button.Group>
                    <Button as={Link} to="/signin" color='teal'>Sign In</Button>
                    <Button.Or/>
                    <Button as={Link} to="/signup" positive >Sign Up</Button>
                  </Button.Group>
                </List.Item>
                <List.Item>
                  <Button as={Link} to="/search" color='black' size='huge'>
                    <Icon name='search'/>
                    Search
                  </Button>
                </List.Item>
              </List>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}

/** Declare the types of all properties. */
MyUhLanding.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const MyUhLandingContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(MyUhLanding);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(MyUhLandingContainer);


// export default Landing;
