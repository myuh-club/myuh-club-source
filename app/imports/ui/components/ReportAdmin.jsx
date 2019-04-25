import React from 'react';
import { Item, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Reports } from '/imports/api/report/report';
import { withRouter } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';

/** Renders a single row in the Club Edit (Admin) table. See pages/ClubEditAdmin.jsx. */
class ReportAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.deleteCallback = this.deleteCallback.bind(this);
  }

  onClick() {
    Reports.remove(this.props.report._id, this.deleteCallback);
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  render() {
    const option = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return (
        <Item>
          <Item.Content>
            <Item.Header>{this.props.report.title} </Item.Header>
            <Item.Meta>{this.props.report.owner}</Item.Meta>
            <Item.Meta> {this.props.report.time.toLocaleDateString('en-US', option)}</Item.Meta>
            <Item.Description>
              {this.props.report.message}
            </Item.Description>
          </Item.Content>
          <Item.Content extra>
            <Button onClick={this.onClick}>Resolve</Button>
        </Item.Content>
        </Item>
    );
  }
}

/** Require a document to be passed to this component. */
ReportAdmin.propTypes = {
  report: PropTypes.object.isRequired,
};

export default withRouter(ReportAdmin);
