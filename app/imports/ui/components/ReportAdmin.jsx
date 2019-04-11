import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the Club Edit (Admin) table. See pages/ClubEditAdmin.jsx. */
class ReportAdmin extends React.Component {

  render() {
    return (
        <Item>
          <Item.Content>
            <Item.Header>{this.props.report.title} </Item.Header>
            <Item.Meta>{this.props.report.owner} {this.props.report.time}</Item.Meta>
            <Item.Description>
              {this.props.report.message}
            </Item.Description>
          </Item.Content>
        </Item>
    );
  }
}

/** Require a document to be passed to this component. */
ReportAdmin.propTypes = {
  report: PropTypes.object.isRequired,
};

export default ReportAdmin;
