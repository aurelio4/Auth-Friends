import React, { useState, useEffect } from 'react'
import { axiosWithHeader } from '../utils/axiosWithHeader'
import {
  Card,
  CardTitle,
  CardText,
  Spinner
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

const FriendsList = (props) => {
  const [friends, setFriends] = useState([])
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

  if(isLoading) {
    return <div className="spinner"><Spinner type="grow" color="dark" /></div>
  }

  return error 
    ? <ErrorMessage error={error} />
    : friends.map(friend => <FriendCard key={friend.id} name={friend.name} email={friend.email} />)
}

export default FriendsList