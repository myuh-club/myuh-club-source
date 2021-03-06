import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Grid, Segment } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import NumField from 'uniforms-semantic/NumField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import SelectField from 'uniforms-semantic/SelectField';
import { Clubs, ClubSchema } from '/imports/api/club/club';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Bert } from 'meteor/themeteorchef:bert';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class EditClub extends React.Component {
  /** On successful submit, insert the data. */
  submit(data) {
    const { name, quantity, image, time, location, description, owner, _id } = data;
    Clubs.update(_id, { $set: { name, quantity, image, time, location, description, owner } }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'Update succeeded' })));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>Club Editor</Header>
          <Grid container centered>
            <Grid.Column>
              <AutoForm ref={(ref) => {
                this.formRef = ref;
              }} schema={ClubSchema} onSubmit={this.submit} model={this.props.doc}>
                <Segment>
                  <TextField name='name'/>
                  <TextField name='image'/>
                  <TextField name='location'/>
                  <TextField name='time'/>
                  <LongTextField name='description'/>
                  <SelectField name='type'/>
                  <NumField name='quantity' decimal={false}/>
                  <TextField name='owner'/>
                  <SubmitField value='Submit'/>
                  <ErrorsField/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
/** Require an array of ClubAdmin documents in the props. */
EditClub.propTypes = {
          doc: PropTypes.object,
          model: PropTypes.object,
          ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Club documents.
  const subscription = Meteor.subscribe('ClubAdmin');
  return {
    doc: Clubs.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditClub);
