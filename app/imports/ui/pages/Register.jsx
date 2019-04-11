import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Checkbox, Button, Input } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';

export default class Register extends React.Component{

  render(){
    return(
        <div className="myuhclub-landing-background">
        <Container className='myuhclub-landing-background-right'>
          <Form inverted>
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
          </Form>
         </Container>
        </div>

    )
  }
}

