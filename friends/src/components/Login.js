import React from 'react'
import '../App.css'
import {
  Container,
  Col,
  Row,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button,
  Form
} from 'reactstrap'

const Login = (props) => {
  return(
    <Form className="login-form">
      <Container>
        <Row sm="12" md={{ size: 6, offset: 3 }}>
          <Col>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Username: </InputGroupText>
              </InputGroupAddon>
              <Input type="text" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Password: </InputGroupText>
              </InputGroupAddon>
              <Input type="password" />
            </InputGroup>
          </Col>
        <Button color="primary">Submit</Button>
        </Row>
      </Container>
    </Form>
  )
}

export default Login