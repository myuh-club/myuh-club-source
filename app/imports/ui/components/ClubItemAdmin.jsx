import React from 'react';
import { Item, Image } from 'semantic-ui-react';
/** import { Clubs } from '/imports/api/club/club'; */
import PropTypes from 'prop-types';
/** import { Bert } from 'meteor/themeteorchef:bert'; */
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ClubItemAdmin extends React.Component {

  /** constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.deleteCallback = this.deleteCallback.bind(this);
  }

  onClick() {
    Clubs.remove(this.props.club._id, this.deleteCallback);
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }
   <Button onClick={this.onClick}>Delete</Button> */

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
