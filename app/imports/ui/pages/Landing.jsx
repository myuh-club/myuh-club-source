import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const headerStyle = { color: "white", fontSize: "4rem" };
    const divStyle = { backgroundColor: "#006400" };
    return (
        <div className='myuhclub-landing-background'>
          <Grid verticalAlign='middle' textAlign='center' columns={2}>
            <Grid.Column>
              <p>welcome</p>
            </Grid.Column>
            <div style={divStyle}>
              <Grid.Column>
                <Grid.Row>
                  <p style={headerStyle}>MyUH Club</p>
                </Grid.Row>
                <Grid.Column>
                  <Image size='small' circular src="/images/meteor-logo.png"/>
                </Grid.Column>

                <Grid.Column>
                  <h1>Welcome to this template</h1>
                  <p>Now get to work and modify this app!</p>
                </Grid.Column>
              </Grid.Column>
            </div>

          </Grid>
        </div>

    );
  }
}

export default Landing;