import React from 'react';
import { Reports, ReportSchema } from '/imports/api/report/report';
import { Grid, Segment, Header, Icon, Container } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class ReportProblem extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Error: Message was not sent properly: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Report was successfully sent to Admin.' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { title, message, time } = data;
    const owner = Meteor.user().username;
    Reports.insert({ title, message, time, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <Container>
          <Header as="h1" textAlign="center" icon inverted>
            <Icon name="exclamation" inverted color='teal' circular/> Report A Problem
          </Header>

          <Header as='h3' inverted textAlign='center'>
            Found any issue? Please let us know!
          </Header>
          <Grid container centered>
            <Grid.Column>
              <AutoForm ref={(ref) => {
                this.formRef = ref;
              }} schema={ReportSchema} onSubmit={this.submit}>
                <Segment>
                  <TextField name='title'/>
                  <LongTextField name='message'/>
                  <SubmitField value='Submit'/>
                  <ErrorsField/>
                  <HiddenField name='owner' value='fakeuser@foo.com'/>
                  <HiddenField name='time' value={new Date()}/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default ReportProblem;
