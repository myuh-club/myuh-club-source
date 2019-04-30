import React from 'react';
import { Item, Button } from 'semantic-ui-react';
import { Clubs } from '/imports/api/club/club';
import PropTypes from 'prop-types';
import { Bert } from 'meteor/themeteorchef:bert';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ClubItemAdmin extends React.Component {

  constructor(props) {
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

  render() {
    return (
        <Item>
          <Item.Content>
            <Item.Header>{this.props.club.name} </Item.Header>
          </Item.Content>
          <Item.Content>
            <Button onClick={this.onClick} floated='right'>Delete</Button>
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
