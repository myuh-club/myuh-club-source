import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Clubs, ClubSchema } from '/imports/api/club/club';
import { Favorites, FavoriteSchema} from '/imports/api/favorite/favorite';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {

  onClick(id) {
    console.log(`Favorited ${id}`);
  }

  render() {
    return (
        <Card>
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
                content='Favorite'
                ref={(ref) => {
                  this.formRef = ref;
                }}
                schema={ClubSchema}
                //onClick={this.onClick(this.props.club._id)}
            />
            : ''
          }
        </Card>
    );
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.formRef = null;
  }
}

/** Require a document to be passed to this component. */
Club.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Club);
