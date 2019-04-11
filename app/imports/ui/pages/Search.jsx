import React from 'react';
import { Header, Grid, Container, Button, Icon, Checkbox, Table } from 'semantic-ui-react';

/** A simple static component to render some text for the search page. */
class Search extends React.Component {

  selectAll() {
    const ids = [
      'academic-professional',
      'ethnic-cultural',
      'fan-club',
      'fraternity-sorority',
      'honorary-society',
      'recreational',
      'lifestyle',
      'political',
      'religious-spiritual',
      'service',
      'sports',
      'student-affairs',
    ];
    ids.map((id) => (document.getElementById(id).checked = true));
  }

  removeAll() {
    const ids = [
      'academic-professional',
      'ethnic-cultural',
      'fan-club',
      'fraternity-sorority',
      'honorary-society',
      'recreational',
      'lifestyle',
      'political',
      'religious-spiritual',
      'service',
      'sports',
      'student-affairs',
    ];
    ids.map((id) => (document.getElementById(id).checked = false));
  }

  currentlyChecked() {
    const ids = [
      'academic-professional',
      'ethnic-cultural',
      'fan-club',
      'fraternity-sorority',
      'honorary-society',
      'recreational',
      'lifestyle',
      'political',
      'religious-spiritual',
      'service',
      'sports',
      'student-affairs',
    ];
    const checked = [];
    ids.map(
        (id) =>(document.getElementById(id).checked ? checked.push(document.getElementById(id).id) : null),
    );
    console.log(checked);
  }

  render() {
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
                          id={'academic-professional'}
                          defaultChecked={true}
                          toggle
                          label={'Academic & Professional'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'ethnic-cultural'}
                          defaultChecked={true}
                          toggle
                          label={'Ethnic & Cultural'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'fan-club'}
                          defaultChecked={true}
                          toggle
                          label={'Fan Club'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'fraternity-sorority'}
                          defaultChecked={true}
                          toggle
                          label={'Fraternity & Sorority'}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Checkbox
                          id={'honorary-society'}
                          defaultChecked={true}
                          toggle
                          label={'Honorary Society'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'recreational'}
                          defaultChecked={true}
                          toggle
                          label={'Recreational'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'lifestyle'}
                          defaultChecked={true}
                          toggle
                          label={'Lifestyle'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'political'}
                          defaultChecked={true}
                          toggle
                          label={'Political'}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Checkbox
                          id={'religious-spiritual'}
                          defaultChecked={true}
                          toggle
                          label={'Religious & Spiritual'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'service'}
                          defaultChecked={true}
                          toggle
                          label={'Service'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                        id={'sports'}
                        defaultChecked={true}
                        toggle
                        label={'Sports'}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                          id={'student-affairs'}
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
          <Grid verticalAlign='middle' textAlign='center' container>
            <Grid.Column width={4}>
              Stuff
            </Grid.Column>
            <Grid.Column width={4}>
              Stuff
            </Grid.Column>
            <Grid.Column width={4}>
              Stuff
            </Grid.Column>
            <Grid.Column width={4}>
              Stuff
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default Search;
