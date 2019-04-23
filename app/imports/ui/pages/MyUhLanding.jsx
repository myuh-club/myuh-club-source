import React from 'react';
import { Grid, Icon, Header, Button, List, Image, Container } from 'semantic-ui-react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react/dist/commonjs/collections/Menu';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
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
                  University of Hawaii has more than 200 Registered Independent Organizations.<br/>
                  When it comes to finding one for you, however,
                  it is a hard task to go through every organizations!
                  Here, MyUH Club can help you
                  find "the one" for you.
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}

export default Landing;
