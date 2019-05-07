import React from 'react';
import { Grid, Segment, Feed, Button } from 'semantic-ui-react';

export default class StudentHomepage extends React.Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
        <div>
          <Grid verticalAlign='middle' textAlign='center' columns={2}>

            <Grid.Column width={5}>
              <Segment>
                <Button size='huge'>Favorites</Button>
                <Button size='huge'>Search</Button>
                <Button size='huge'>Give Feedback</Button>
              </Segment>
            </Grid.Column>
          </Grid>
          <Grid verticalAlign='middle' textAlign='center' columns={1} inverted>
            <Grid.Column width={4}>
              <Segment>
                <Feed>
                  <Feed.Event>
                    <Feed.Label>
                      <img
                          src='https://avatars0.githubusercontent.com/u/29992595?s=400&u=cc1568deef691d1e8be0d31797af3a8b229f6014&v=4'/>
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>Quinne Uchida</Feed.User> made an announcement.
                        <Feed.Date>1 Hour Ago</Feed.Date>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                  <Feed.Event>
                    <Feed.Label>
                      <img src='https://avatars1.githubusercontent.com/u/31224445?s=400&v=4'/>
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>Ronnie Kauanoe</Feed.User> favorited ACM.
                        <Feed.Date>8 Hour Ago</Feed.Date>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                  <Feed.Event>
                    <Feed.Label>
                      <img src='https://avatars2.githubusercontent.com/u/31229605?s=400&v=4'/>
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>Nicholas Miyamoto-Pennywell</Feed.User> added a new club &#39SWE&#39.
                        <Feed.Date>10 Hour Ago</Feed.Date>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                  <Feed.Event>
                    <Feed.Label>
                      <img src='https://avatars1.githubusercontent.com/u/35472702?s=400&v=4'/>
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>Yusuke Hatanaka</Feed.User> favorited Grey-Hats.
                        <Feed.Date>1 Hour Ago</Feed.Date>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

// https://stackoverflow.com/questions/52392725/changing-segment-content-onpress
//             Figure out a way to get this box to change based on what Menu.Item is clicked.
//              For now it will be configured to the dashboard.
