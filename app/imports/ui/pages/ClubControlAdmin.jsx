import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Item, Header, Loader, Grid, Segment, Icon } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import NumField from 'uniforms-semantic/NumField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import SelectField from 'uniforms-semantic/SelectField';
import { Clubs, ClubSchema } from '/imports/api/club/club';
import ClubADAdmin from '/imports/ui/components/ClubADAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Bert } from 'meteor/themeteorchef:bert';

/** Renders two components: one to edit a club and one to delete a club */
class ClubControlAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { name, quantity, image, time, location, description, owner, type } = data;
    Clubs.insert({ name, quantity, image, time, location, description, type, owner }, this.insertCallback);
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>

          <Header as="h1" textAlign="center" icon inverted>
            <Icon name="zip" circular inverted color='teal'/> Add/Delete Clubs
          </Header>


          <hr/>

          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Add Club</Header>
              <AutoForm ref={(ref) => {
                this.formRef = ref;
              }} schema={ClubSchema} onSubmit={this.submit}>
                <Segment>
                  <TextField name='name' placeholder='Club Name'/>
                  <TextField name='image' placeholder='Club Logo'/>
                  <TextField name='location' placeholder='Club Room'/>
                  <TextField name='time' placeholder='Meeting Time'/>
                  <LongTextField name='description' placeholder='Club Description'/>
                  <SelectField name='type'/>
                  <NumField name='quantity' placeholder='Number of members' decimal={false}/>
                  <TextField name='owner' placeholder='unassigned@foo.com'/>
                  <SubmitField value='Submit'/>
                  <ErrorsField/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>

          <hr/>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Delete Club</Header>
              <Segment>
                <Item.Group divided>
                  {this.props.clubs.map((club, index) => <ClubADAdmin key={index} club={club}/>)}
                </Item.Group>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

/** Require an array of Clubs documents in the props. */
ClubControlAdmin.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Club documents.
  const subscription = Meteor.subscribe('ClubAdmin');
  return {
    clubs: Clubs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ClubControlAdmin);
