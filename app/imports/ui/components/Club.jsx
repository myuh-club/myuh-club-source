import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Clubs, ClubSchema } from '/imports/api/club/club';
import { Favorites } from '/imports/api/favorite/favorite';
import { withRouter } from 'react-router-dom';

/** Renders a single Club Card */
class Club extends React.Component {

  onClick(id) {
    const ownerId = Favorites.findOne({ owner: Meteor.user().username })._id;
    if (!this.isFavorited()) {
      console.log(`${Meteor.user().username} favorited ${Clubs.findOne({ _id: id }).name}`);
      Favorites.update({ _id: ownerId }, { $addToSet: { favorites: id } });
    } else {
      console.log(`${Meteor.user().username} has unfavorited ${Clubs.findOne({ _id: id }).name}`);
      Favorites.update({ _id: ownerId }, { $pull: { favorites: id } });
    }
    this.setState({ userFavorites: Favorites.findOne({ owner: Meteor.user().username }).favorites },
        function () {
          console.log(`${Meteor.user().username} has favorited:`);
          this.state.userFavorites.map((favId) => (console.log(Clubs.findOne({ _id: favId }).name)));
        });
    this.forceUpdate();
  }

  isFavorited() {
    return this.state.userFavorites.includes(this.props.club._id);
  }

  favoriteIcon() {
    return (this.isFavorited()) ? 'heart' : 'heart outline';
  }

  iconColor() {
    let iColor = '';
    if (this.isFavorited()) {
      iColor = 'yellow';
    }
    return iColor;
  }

  buttonColor() {
    let bColor = '';
    if (this.isFavorited()) {
      bColor = 'green';
    }
    return bColor;
  }

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image circular centered size='small' src={this.props.club.image}/>
            <Card.Header>
              {this.props.club.name}
            </Card.Header>
            <Card.Meta>
              {this.props.club.type}
            </Card.Meta>
            <Card.Description>
              {this.props.club.description}
            </Card.Description>
          </Card.Content>
          {Meteor.user() ?
              <Button
                  icon
                  color={this.buttonColor()}
                  schema={ClubSchema}
                  onClick={() => {
                    this.onClick(this.props.club._id);
                  }}
              >
                <Icon
                    name={this.favoriteIcon()}
                    size='big'
                    color={this.iconColor()}
                />
              </Button>
              : ''
          }
        </Card>
    );
  }

  constructor(props) {
    super(props);
    if (Meteor.user()) {
      this.state = {
        userFavorites: Favorites.findOne({ owner: Meteor.user().username }).favorites };
    }
    this.onClick = this.onClick.bind(this);
    this.isFavorited = this.isFavorited.bind(this);
    this.iconColor = this.iconColor.bind(this);
    this.buttonColor = this.buttonColor.bind(this);
    this.favoriteIcon = this.favoriteIcon.bind(this);
    this.formRef = null;
  }
}

/** Require a document to be passed to this component. */
Club.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Club);
