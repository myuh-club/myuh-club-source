import React from 'react';
import { Grid, Icon, Header, Button, List, Image, Container, Card } from 'semantic-ui-react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react/dist/commonjs/collections/Menu';

import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';

import { Clubs } from '/imports/api/club/club';
import Club from '/imports/ui/components/Club';

/** A simple static component to render some text for the landing page. */
class MyUhLanding extends React.Component {
  render() {
    const imageBorder = {borderRadius: '50 %'};
    return (
        <div className='myuhclub-landing-background'>
          <div className='myuhclub-landing-background-right'>
            <Container>
              <Grid>
                <Grid.Row columns={2} verticalAlign='middle'>
                  <Grid.Column width={6}>
                    <div style={imageBorder}>
                      <Image src="/images/UH-Manoa-min.png"/>
                    </div>
                  </Grid.Column>

                  <Grid.Column width={10}>
                    <Header as='h1' inverted>
                      Registered Independent Organizations
                    </Header>
                    <Header as='h3' inverted>
                      University of Hawaii at Manoa has more than 200 Registered Independent Organizations.<br/>
                      When it comes to finding one for you, however,
                      it is a hard task to go through every organization!
                      Here, MyUH Club can help you
                      find "the one" for you.
                    </Header>
                  </Grid.Column>
                </Grid.Row>

              </Grid>

              <hr/>

              <Grid>
                <Grid.Row>
                  <Header as='h2' inverted>What is RIO?</Header>
                  <Header as='h4' inverted>Registered Independent Organizations (RIOs) "serve the campus and greater community by
                    providing leadership development for students and by promoting community spirit, activism, public
                    service, and social, recreational, and cultural interaction among UHM students, faculty, and staff."
                    (UH
                    Manoa Website) <br/> Use MyUH Club to search through RIOs! </Header>
                </Grid.Row>
              </Grid>

              <hr/>

              <Grid textAlign='center'>
                <Grid.Row columns={3}>
                  <Card.Group>
                    {this.props.clubs.map((club) => <Club
                        key={club._id}
                        club={club}
                    />)}
                  </Card.Group>

                </Grid.Row>

                {this.props.currentUser ? ("You are Logged in.") : ("You are not logged in")}


                <Grid.Row>
                  <List>
                    <List.Item>
                      <Button.Group>
                        <Button as={Link} to="/signin" color='teal'>Sign In</Button>
                        <Button.Or/>
                        <Button as={Link} to="/signup" positive>Sign Up</Button>
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
          </div>
        </div>
    );
  }
}

/** Declare the types of all properties. */
MyUhLanding.propTypes = {
  currentUser: PropTypes.string,
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Clubs');
  return {
    currentUser: Meteor.user() ? Meteor.user().username : '',
    clubs: Clubs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(MyUhLanding);

// export default Landing;
