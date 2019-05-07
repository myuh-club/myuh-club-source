import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Clubs = new Mongo.Collection('Clubs');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ClubSchema = new SimpleSchema({
  name: String,
  type: {
    type: String,
    allowedValues: ['Academic/Professional',
    'Ethnic/Cultural',
    'Fan Club',
    'Fraternity/Sorority',
    'Honorary Society',
    'Recreational',
    'Lifestyle',
    'Political',
    'Religious/Spiritual',
    'Service',
    'Sports',
    'Student Affairs'],
    defaultValue: 'Academic/Professional' },
  quantity: Number,
  owner: String,
  image: String,
  location: String,
  time: String,
  description: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Clubs.attachSchema(ClubSchema);

/** Make the collection and schema available to other code. */
export { Clubs, ClubSchema };
