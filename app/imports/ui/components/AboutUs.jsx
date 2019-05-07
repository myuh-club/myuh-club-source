import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


/** Taken from Contacts */
class AboutUs extends React.Component {
  render() {
    return (

        <div>
          <Card.Group>
                <Card href = {this.props.people.portfolio}>
                  <Card.Content>
                    <Image floated='left' size='large' src={this.props.people.image} />
                    <Card.Header>
                      {this.props.people.firstName}
                      {this.props.people.lastName}
                    </Card.Header>
                    <Card.Description>
                      {this.props.people.description}
                    </Card.Description>
                    <Card.Content extra>
                      {this.props.people.email}
                    </Card.Content>

                  </Card.Content>
                </Card>
          </Card.Group>

        </div>
    );
  }
}

/** Require a document to be passed to this component. */
AboutUs.propTypes = {
  people: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(AboutUs);

