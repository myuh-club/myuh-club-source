import React from 'react';
import { Table, Card, Image, Header, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import people from '../pages/AboutUsList'


/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class AboutUs extends React.Component {
  render() {
    return (

        <div>
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

