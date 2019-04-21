import React from 'react';
import { Item, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ClubItem extends React.Component {
  render() {
    return (
        <Item>
          <Item.Content>
            <Image floated='left' size='small' src={this.props.club.image} />
            <Item.Header>{this.props.club.name} </Item.Header>
            <Item.Meta>Meetings: {this.props.club.location} @ {this.props.club.time}</Item.Meta>
            <Item.Meta>Members: {this.props.club.quantity}</Item.Meta>
            <Item.Description>
              {this.props.club.description}
            </Item.Description>
          </Item.Content>
          <Item.Content extra>
            <Link to={`/edit/${this.props.club._id}`}>Edit</Link>
          </Item.Content>
        </Item>
    );
  }
}

/** Require a document to be passed to this component. */
ClubItem.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ClubItem);
