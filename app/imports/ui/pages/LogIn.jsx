import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Form, Checkbox, Button, Input, Header, Grid } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react/dist/commonjs/collections/Menu';

export default class LogIn extends React.Component{

  render(){
    return(
        <div className="myuhclub-landing-background-right">
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Container inverted>
                <Header textAlign='center'>Log In</Header>
                <Form>
                  <Form.Field>
                    <label>Email Address</label>
                    <input placeholder='example@email.com' />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <Input type='password' placeholder="********"/>
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
                  <Link to="/signup" className='darkerlink'>Click here to Register</Link>
                </Form>
              </Container>
            </Grid.Column>
          </Grid>
        </div>

    )
  }
}
