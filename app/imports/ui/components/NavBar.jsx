import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header, Icon } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px' };
    return (
        <Menu style={menuStyle} attached="top" borderless inverted>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Header inverted as='h1'>MyUH Club</Header>
          </Menu.Item>
          {this.props.currentUser ? (
            [

              <Menu.Item as={NavLink} activeClassName="active" exact to="/developers" key='developers'>
                <Icon name='keyboard'/>About the Developers</Menu.Item>,
              <Menu.Item as={NavLink} activeClassName='active' exact to='/search' key='search'>
                <Icon name={'search'}/>Search
              </Menu.Item>,
              <Menu.Item as={NavLink} activeClassName='active' exact to='/favorites' key='favorites'>
                <Icon name={'star'}/>Favorites
              </Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/reportproblem" key='reportproblem'>
                <Icon name='exclamation'/>Report A Problem
              </Menu.Item>,

              ]
          ) : (
              ''
          )}

          {Roles.userIsInRole(Meteor.userId(), 'organizer') ? (
              <Menu.Item as={NavLink} activeClassName="active" exact to="/eC" key='eC'>Edit Club</Menu.Item>

          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              [<Menu.Item as={NavLink} activeClassName="active" exact to="/aE" key='aE'><Icon name='pencil'/>
              Edit Clubs</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/aD" key='aD'><Icon name='zip'/>
                Add/Delete Clubs</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/aR" key='aR'><Icon name='file alternate'/>
                Reports</Menu.Item>]
          ) : ''}
          <Menu.Item position="right">
            {this.props.currentUser === '' ? (
                <Dropdown text="Login" pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="user" text="Log In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item icon="add user" text="Register" as={NavLink} exact to="/signup"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
