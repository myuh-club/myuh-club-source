import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// import Landing from '../pages/Landing';
import Landing from '../pages/MyUhLanding';
import ClubControlAdmin from '../pages/ClubControlAdmin';
import ClubEditAdmin from '../pages/ClubEditAdmin';
import ClubEditOrg from '../pages/ClubEditOrg';
import ReportsAdmin from '../pages/ReportsAdmin';
import AboutUsList from '../pages/AboutUsList';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import StudentHomepage from '../pages/StudentHomepage';
import AddStuff from '../pages/AddStuff';
import EditClub from '../pages/EditClub';
// import ListClub from '../pages/ListClub';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import ReportProblem from '../pages/ReportProblem';
import Search from '../pages/Search';
import FavoritesPage from '../pages/FavoritesPage';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="myuhclub-background">
            <div className='myuhclub-background-opacity'>
              <NavBar/>
              <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
                <Route path='/favorites' component={FavoritesPage}/>
                <Route path='/search' component={Search}/>
                <ProtectedRoute path="/developers" component={AboutUsList}/>
                <ProtectedRoute path="/studentHomePage" component={StudentHomepage}/>
                <AdminProtectedRoute path="/aE" component={ClubEditAdmin}/>
                <AdminProtectedRoute path="/aD" component={ClubControlAdmin}/>
                <AdminProtectedRoute path="/aR" component={ReportsAdmin}/>
                <ProtectedRoute path="/reportproblem" component={ReportProblem}/>
                <ProtectedRoute path="/add" component={AddStuff}/>
                <ProtectedRoute path="/eC" component={ClubEditOrg}/>
                <ProtectedRoute path="/edit/:_id" component={EditClub}/>
                <AdminProtectedRoute path="/admin" component={ListStuffAdmin}/>
                <ProtectedRoute path="/signout" component={Signout}/>
                <Route component={NotFound}/>
              </Switch>
              <Footer/>
            </div>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          return isLogged ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
