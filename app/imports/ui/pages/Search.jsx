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
    this.state.ids.map((id) => function(id) {
        const prevState = {...this.state.document.getElementById(id)};
        prevState.checked = true;
        this.setState({prevState});
    });
  }

  removeAll() {
    this.state.ids.map((id) => function(id) {
      const prevState = {...this.state.document.getElementById(id)};
      prevState.checked = false;
      this.setState({prevState});
    });
  }

  searchClubs() {
    const checked = [];
    const checkedObjects = [];
    //Adds checked ids to "checked" array
    this.state.ids.map(
        (id) =>(document.getElementById(id).checked ? checked.push(document.getElementById(id).id) : null),
    );
    //Adds checked types to "checkedObjects" array
    checked.map(
        (type) => (checkedObjects.push({"type": type}))
    );
    const filter = [];
    checkedObjects.map((obj) => filter.push(obj));
    //console.log('filter');
    //console.log(filter);
    if (filter.length > 0) {
      this.setState({ currentlySelected: Clubs.find({ $or: filter }).fetch() },
          function () {
            console.log(this.state.currentlySelected);
          }
      );
    }
    this.state.ids.map((id) => console.log(document.getElementById(id).checked));
    /*
    console.log('Checked:');
    console.log(checked);
    console.log('Checked Objects: ');
    console.log(checkedObjects);
    */
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Container>
          <Header as="h1" textAlign="center" icon inverted>
            <Icon name="search" circular inverted color='teal'/> Search
          </Header>
          <Grid verticalAlign='middle' textAlign='center' container className='search-background'>
            {/*<Grid.Column width={3}>*/}
            {/*  <Button.Group vertical>*/}
            {/*    <Button size="huge" positive onClick={this.selectAll}>Select All</Button>*/}
            {/*    <Button size="huge" negative onClick={this.removeAll}>Remove All</Button>*/}
            {/*  </Button.Group>*/}
            {/*</Grid.Column>*/}
            <Grid.Column width={13}>
              <Table basic='very'>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Checkbox
                          id={'Academic/Professional'}
                          defaultChecked
                          toggle
                          label={'Academic & Professional'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Ethnic/Cultural'}
                          defaultChecked
                          toggle
                          label={'Ethnic & Cultural'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Fan Club'}
                          defaultChecked
                          toggle
                          label={'Fan Club'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Fraternity/Sorority'}
                          defaultChecked
                          toggle
                          label={'Fraternity & Sorority'}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Checkbox
                          id={'Honorary Society'}
                          defaultChecked
                          toggle
                          label={'Honorary Society'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Recreational'}
                          defaultChecked
                          toggle
                          label={'Recreational'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Lifestyle'}
                          defaultChecked
                          toggle
                          label={'Lifestyle'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Political'}
                          defaultChecked
                          toggle
                          label={'Political'}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Checkbox
                          id={'Religious/Spiritual'}
                          defaultChecked
                          toggle
                          label={'Religious & Spiritual'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Service'}
                          defaultChecked
                          toggle
                          label={'Service'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                        id={'Sports'}
                        defaultChecked
                        toggle
                        label={'Sports'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'Student Affairs'}
                          defaultChecked
                          toggle
                          label={'Student Affairs'}
                      />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
            <Grid.Column width={3}>
              <Button size='massive' onClick={this.searchClubs}>
                <Icon name='search'/>Search
              </Button>
            </Grid.Column>
          </Grid>
          <hr/>
          <Grid verticalAlign='middle' textAlign='center' columns={4} padded container>
            <Card.Group>
              {this.state.currentlySelected.map((club) => <Club
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
      ids: ['Academic/Professional',
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
      currentlySelected: []
    };
    this.selectAll = this.selectAll.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.searchClubs = this.searchClubs.bind(this);
    this.renderPage = this.renderPage.bind(this);
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
