import React, { useState, useEffect } from 'react'
import { axiosWithHeader } from '../utils/axiosWithHeader'
import {
  Card,
  CardTitle,
  CardText,
  Spinner,
  Form,
  FormGroup,
  Input,
  Button
} from 'reactstrap'
import '../App.css'

const ErrorMessage = (props) => {
  return <p><span style={{ color: 'red' }}>{props.error}</span></p>
}

const FriendCard = (props) => {
  return (
    <Card className="friend-card">
      <CardTitle>{props.name}</CardTitle>
      <CardText>{props.email}</CardText>
    </Card>
  )
}

const AddFriend = (props) => {
  return (
    <Form className="add-friend-form">
      <FormGroup>
        <Input type="text" placeholder="Name" name="name" value={props.friendToAdd.name} onChange={props.handleChange} />
        <Input type="text" placeholder="Age"  name="age" value={props.friendToAdd.age} onChange={props.handleChange} />
        <Input type="email" placeholder="Email" name="email" value={props.friendToAdd.email} onChange={props.handleChange} />
        <Button color="primary" onClick={props.addFriend}>Add</Button>
      </FormGroup>
    </Form>
  )
}

const FriendsList = (props) => {
  const [friends, setFriends] = useState([])
  const [friendToAdd, setFriendToAdd] = useState({name: '', age: '', email: ''})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axiosWithHeader()
    .get('/api/friends')
    .then(res => {
      setFriends(res.data)
    })
    .catch(err => {
      setError(err.message)
      console.error(err)
    })
    .finally(() => setIsLoading(false))
  }, [])

  const handleChange = e => {
    setFriendToAdd({...friendToAdd, [e.target.name]: e.target.value })
  }

  const addFriend = () => {
    setFriends([...friends, friendToAdd])
  }

  if(isLoading) {
    return <div className="spinner"><Spinner type="grow" color="dark" /></div>
  }

  return error 
    ? <ErrorMessage error={error} />
    : (
        <>
          <AddFriend friendToAdd={friendToAdd} handleChange={handleChange} addFriend={addFriend} />
          {friends.map(friend => {
            return <FriendCard key={friend.id} name={friend.name} email={friend.email} />
          })}
        </>
      )
}

export default FriendsList