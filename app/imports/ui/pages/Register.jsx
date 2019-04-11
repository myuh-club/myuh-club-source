import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Checkbox, Button, Input, Header, Grid } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';

export default class Register extends React.Component{

  render(){
    return(
        <div className="myuhclub-landing-background-right">
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
            <Container inverted>
              <Header textAlign='center'>Register Today!</Header>
              <Form>
                <Form.Field>
                  <label>Email Address</label>
                  <input placeholder='example@email.com' />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <Input type='password' placeholder="********"/>
                </Form.Field>
                <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
                <Link to="/signin" className='darkerlink'>Click here to Sign in</Link>
              </Form>
            </Container>
          </Grid.Column>
         </Grid>
        </div>

    )
  }
}

