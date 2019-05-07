import React from 'react';
import { Header, Card, Icon } from 'semantic-ui-react';
import AboutUs from '/imports/ui/components/AboutUs';

/** Renders a section for each developer */
class AboutUsList extends React.Component {
  people = [{

    firstName: ' Yusuke ',
    lastName: 'Hatanaka',
    image: 'https://avatars1.githubusercontent.com/u/35472702?s=400&v=4',
    description: 'Yusuke is a Computer Science student at UH Manoa.',
    email: 'yusukemh@hawaii.edu',
    portfolio: 'https://yusukemh.github.io/',
  },
    {
      firstName: ' Ronnie ',
      lastName: 'Kauanoe',
      image: 'https://avatars1.githubusercontent.com/u/31224445?s=400&v=4',
      description: 'Ronnie is a Computer Science student at UH Manoa.',
      email: 'rkauanoe@hawaii.edu',
      portfolio: 'https://ronnie-kauanoe.github.io/',
    },
    {
      firstName: ' Nicholas ',
      lastName: 'M-P',
      image: 'https://avatars2.githubusercontent.com/u/31229605?s=400&v=4',
      description: 'Nicholas is a Computer Science student at UH Manoa.',
      email: 'nkmp@hawaii.edu',
      portfolio: 'https://nicholasmp.github.io/',
    },
    {
      firstName: ' Quinne ',
      lastName: 'Uchida',
      image: 'https://avatars0.githubusercontent.com/u/29992595?s=400&u=cc1568deef691d1e8be0d31797af3a8b229f6014&v=4',
      description: 'Quinne is a Computer Science student at UH Manoa.',
      email: 'qauchida@hawaii.edu',
      portfolio: 'https://qauchida.github.io/',
    },
  ];

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return this.renderPage();
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div>
          <Header as="h1" textAlign="center" icon inverted>
            <Icon name="keyboard" circular inverted color='teal'/> About the Developers
          </Header>

          <Card.Group centered>
            {this.people.map((people, index) => <AboutUs key={index} people={people}/>)}
          </Card.Group>
        </div>
    );
  }
}

/* the rest of codes are not necessary */

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default AboutUsList;
