import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Image, Button, Icon, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Clubs, ClubSchema } from '/imports/api/club/club';
import { Favorites, FavoriteSchema } from '/imports/api/favorite/favorite';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {

  onClick(id) {
    const favArray = Favorites.find({ "owner": Meteor.user().username }).fetch()[0].favorites;
    const ownerId = Favorites.find({ "owner": Meteor.user().username }).fetch()[0]._id;
    if (!this.isFavorited(id)) {
      console.log(`${Meteor.user().username} favorited ${id}`);
      Favorites.update({ _id: ownerId }, { $addToSet: { favorites: id } });
      console.log(`${Meteor.user().username} has favorited:`);
      console.log(favArray);
    } else {
      Favorites.update({ _id: ownerId }, {$pull: { favorites: id }});
      console.log(`${Meteor.user().username} has unfavorited ${id}`);
    }
  }

  isFavorited(id) {
    const favArray = Favorites.find({ "owner": Meteor.user().username }).fetch()[0].favorites;
    return favArray.includes(id);
  }

  clubColor(){
    const favArray = Favorites.find({ "owner": Meteor.user().username }).fetch()[0].favorites;
    if (favArray.includes(this.props.club._id)) {
      return "red";
    } else {
      return "blue";
    }
  }

  render() {
    return (
        <Card>
          <Card.Content>
            <Icon
                name='heart'
                size='large'
                color={this.clubColor}
            />
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
                  content={'Favorite'}
                  schema={ClubSchema}
                  onClick={() => {
                    this.onClick(this.props.club._id)
                  }}
              />
              : ''
          }
        </Card>
    );
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.isFavorited = this.isFavorited.bind(this);
    this.clubColor = this.clubColor.bind(this);
    this.formRef = null;
  }
}

/** Require a document to be passed to this component. */
Club.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Club);
