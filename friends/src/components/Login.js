import React, { useState } from 'react'
import { axiosWithHeader } from '../utils/axiosWithHeader'
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
  Form,
  Spinner
} from 'reactstrap'

const Login = (props) => {
  const [user, setUser] = useState({username: '', password: ''})
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = e => setUser({...user, [e.target.name]: e.target.value })
  const login = e => {
    e.preventDefault()
    setIsLoading(true)
    axiosWithHeader()
      .post('/api/login', user)
      .then(res => {
        localStorage.setItem('key', res.data.payload)
        setIsLoading(false)
        props.history.push('/friends')
      })
      .catch(err => console.log(err))
  }

  return(
    <Form className="login-form" onSubmit={login}>
      <Container>
        <Row>
          <Col>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Username: </InputGroupText>
              </InputGroupAddon>
              <Input type="text" name="username" value={user.username} onChange={handleChange} />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Password: </InputGroupText>
              </InputGroupAddon>
              <Input type="password" name="password" value={user.password} onChange={handleChange} />
            </InputGroup>
          </Col>
        <Button color="primary">{isLoading ? <Spinner color="dark" /> : 'Submit'}</Button>
        </Row>
      </Container>
    </Form>
  )
}

export default Login