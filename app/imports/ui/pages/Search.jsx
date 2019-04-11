import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Loader, Header, Grid, Container, Button, Icon, Checkbox, Table, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '/imports/api/club/club';
import Club from '/imports/ui/components/Club';
import { Favorites } from '/imports/api/favorite/favorite';

/** A simple static component to render some text for the search page. */
class Search extends React.Component {

  selectAll() {
    const ids = [
      'Academic/Professional',
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
      'Student Affairs',
    ];
    ids.map((id) => (document.getElementById(id).checked = true));
  }

  removeAll() {
    const ids = [
      'Academic/Professional',
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
      'Student Affairs',
    ];
    ids.map((id) => (document.getElementById(id).checked = false));
  }

  currentlyChecked() {
    const ids = [
      'Academic/Professional',
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
      'Student Affairs',
    ];
    const checked = [];
    const checkedObjects = [];
    ids.map(
        (id) =>(document.getElementById(id).checked ? checked.push(document.getElementById(id).id) : null),
    );
    checked.map(
        (type) => (checkedObjects.push({"type": type}))
    );
    console.log(checked);
    console.log(checkedObjects);
    const filter = [];
    checkedObjects.map((obj) => filter.push(obj));
    const contents = Clubs.find({$or: filter}).fetch();
    console.log(contents);
    this.setState({list: Clubs.find({$or: filter}).fetch()});
    console.log(this.state.list);
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Container>
          <Header as="h1" textAlign="center" icon>
            <Icon name="search" circular/> Search
          </Header>
          <Grid verticalAlign='middle' textAlign='center' container>
            <Grid.Column width={3}>
              <Button.Group vertical>
                <Button size="huge" positive onClick={this.selectAll}>Select All</Button>
                <Button size="huge" negative onClick={this.removeAll}>Remove All</Button>
              </Button.Group>
            </Grid.Column>
            <Grid.Column width={10}>
              <Table basic='very'>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Checkbox
                          id={'Academic/Professional'}
                          defaultChecked={true}
                          padded
                          toggle
                          label={'Academic &\nProfessional'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Ethnic/Cultural'}
                          defaultChecked={true}
                          toggle
                          label={'Ethnic &\nCultural'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Fan Club'}
                          defaultChecked={true}
                          toggle
                          label={'Fan Club'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Fraternity/Sorority'}
                          defaultChecked={true}
                          toggle
                          label={'Fraternity &\nSorority'}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Checkbox
                          id={'Honorary Society'}
                          defaultChecked={true}
                          toggle
                          label={'Honorary Society'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Recreational'}
                          defaultChecked={true}
                          toggle
                          label={'Recreational'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Lifestyle'}
                          defaultChecked={true}
                          toggle
                          label={'Lifestyle'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Political'}
                          defaultChecked={true}
                          toggle
                          label={'Political'}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Checkbox
                          id={'Religious/Spiritual'}
                          defaultChecked={true}
                          toggle
                          label={'Religious &\nSpiritual'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Service'}
                          defaultChecked={true}
                          toggle
                          label={'Service'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                        id={'Sports'}
                        defaultChecked={true}
                        toggle
                        label={'Sports'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Student Affairs'}
                          defaultChecked={true}
                          toggle
                          label={'Student Affairs'}
                      />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
            <Grid.Column width={3}>
              <Button size='massive' onClick={this.currentlyChecked}>
                <Icon name='search'/>Search
              </Button>
            </Grid.Column>
          </Grid>
          <hr/>
          <Grid verticalAlign='middle' textAlign='center' columns={4} padded container>
            <Card.Group>
              {this.state.list.map((club) => <Club
                key={club._id}
                club={club}
              />)}
            </Card.Group>
          </Grid>
        </Container>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.currentlyChecked = this.currentlyChecked.bind(this);
  }
}

/** Require an array of Club documents in the props. */
Search.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};


/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Clubs');
  const subscription2 = Meteor.subscribe('Favorites');
  return {
    clubs: Clubs.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(Search);
