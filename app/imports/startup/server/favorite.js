import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Favorites } from '../../api/favorite/favorite.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`Adding ${data.owner} (${data.favorites})`);
  Favorites.insert(data);
}

/** Initialize the collection if empty. */
if (Favorites.find().count() === 0) {
  if (Meteor.settings.defaultFavorites) {
    console.log('Creating default favorites.');
    Meteor.settings.defaultFavorites.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Favorites', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Favorites.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('FavoritesAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Clubs.find();
  }
  return this.ready();
});
