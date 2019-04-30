import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Grid, Header, Item, Loader } from 'semantic-ui-react';
import { Reports } from '/imports/api/report/report';
import ReportAdmin from '/imports/ui/components/ReportAdmin';
import ReportInvestigationAdmin from '/imports/ui/components/ReportInvestigationAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ReportsAdmin extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>Report Tickets</Header>
          <Grid columns={2}>
            <Grid.Column>
              <Header as="h3" textAlign="center" inverted>Awaiting Investigation</Header>
              <Item.Group divided>
                {this.props.areports.map((report, index) => <ReportAdmin key={index} report={report}/>)}
              </Item.Group>
            </Grid.Column>
            <Grid.Column>
              <Header as="h3" textAlign="center" inverted>Under Investigation</Header>
              <Item.Group divided>
                {this.props.ireports.map((report, index) => <ReportInvestigationAdmin key={index} report={report}/>)}
              </Item.Group>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ReportsAdmin.propTypes = {
  areports: PropTypes.array.isRequired,
  ireports: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Club documents.
  const subscription = Meteor.subscribe('Reports');
  return {
    areports: Reports.find({ investigation: Boolean(false) }).fetch(),
    ireports: Reports.find({ investigation: Boolean(true) }).fetch(),
    ready: subscription.ready(),
  };
})(ReportsAdmin);
