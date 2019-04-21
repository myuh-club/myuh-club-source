import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Reports } from '../../api/report/report';

/* eslint-disable no-console */

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Reports', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Reports.find();
  }
  return this.ready();
});
