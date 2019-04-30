import React from 'react';
import { Item, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the Club Edit (Admin) table. See pages/ClubEditAdmin.jsx. */
class ClubItemAdmin extends React.Component {

  render() {
    const style = { color: '#FFF' };
    const linkStyle = { float: 'right' };
    return (
        <Item style={style}>
          <Item.Content>
            <Image floated='left' size='small' src={this.props.club.image}/>
            <Item.Header style={style}>{this.props.club.name} </Item.Header>
            <Item.Meta style={style}>Meetings: {this.props.club.location} @ {this.props.club.time}</Item.Meta>
            <Item.Meta style={style}>Members: {this.props.club.quantity}</Item.Meta>
            <Item.Description style={style}>
              {this.props.club.description}
            </Item.Description>
          </Item.Content>
          <Item.Content>
            <Link to={`/edit/${this.props.club._id}`} style={linkStyle}>Edit</Link>
          </Item.Content>
        </Item>
    );
  }
}

/** Require a document to be passed to this component. */
ClubItemAdmin.propTypes = {
  club: PropTypes.object.isRequired,
};

export default withRouter(ClubItemAdmin);
