import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Form.css'
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

const Register = (props) => {
    return (
        <Form>
            <FormGroup row>
        <Label for="registerEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="registerEmail" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="registerPassword" sm={3}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="registerPassword" placeholder="password placeholder" />
        </Col>
      </FormGroup>
            <FormGroup row>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        Remember me
                    </Label>
                </FormGroup>
            </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2}}>
                        <Button color="primary">Submit</Button>{' '}
                    </Col>
                </FormGroup>
        </Form>
    );
}

export default Register;