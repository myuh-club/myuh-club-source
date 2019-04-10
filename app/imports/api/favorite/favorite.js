import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Favorites = new Mongo.Collection('Favorites');

/** Create a schema to constrain the structure of documents associated with this collection. */
const FavoriteSchema = new SimpleSchema({
  id: String,
  favorites: Array,
  'favorites.$': String
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Favorites.attachSchema(FavoriteSchema);

/** Make the collection and schema available to other code. */
export { Favorites, FavoriteSchema };
