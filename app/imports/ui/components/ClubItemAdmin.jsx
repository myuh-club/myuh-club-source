import React from 'react';
import { Item, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the Club Edit (Admin) table. See pages/ClubEditAdmin.jsx. */
class ClubItemAdmin extends React.Component {

  render() {
    return (
        <Item>
          <Item.Content>
            <Image floated='left' size='small' src={this.props.club.image} />
            <Item.Header>{this.props.club.name} </Item.Header>
            <Item.Meta>{this.props.club.location} {this.props.club.time}</Item.Meta>
            <Item.Description>
              {this.props.club.description}
            </Item.Description>
          </Item.Content>
          <Item.Content extra>
            <Link to={`/edit/${this.props.club._id}`} floated='right'>Edit</Link>
          </Item.Content>
        </Item>
    );
  }
}

/** Require a document to be passed to this component. */
ClubItemAdmin.propTypes = {
  club: PropTypes.object.isRequired,
};

export default ClubItemAdmin;
