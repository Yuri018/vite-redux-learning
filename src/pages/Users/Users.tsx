import { useSelector, useDispatch } from "react-redux"

import {v4} from'uuid'

import { usersState } from "store/redux/Users/selectors"

import { UsersCardWrapper, UserCard, Paragraph } from "./styles"

import{usersActions} from 'store/redux/Users/usersSlise'

import Button from "components/Button"

function Users() {
  const usersData = useSelector(usersState)
  const dispatch = useDispatch()
  console.log(v4())
  // console.log(crypto.randomUUID())

  return (
    <UsersCardWrapper>
      {usersData.users.map((user) => (
        <UserCard key={v4()}>
          <Paragraph>{`Name: ${user.firstLastName}`}</Paragraph>
          <Paragraph>{`Age: ${user.age}`}</Paragraph>
          <Paragraph>{`Job: ${user.jobTitle}`}</Paragraph>
          <Button name="Delete User" type="button" onClick={()=>{
            dispatch(usersActions.deleteUser(user.id))
          }}/> 
        </UserCard>
      ))}
      { usersData.users.length > 0 && <Button name="Delete all users" onClick={() => {
        dispatch(usersActions.deleteAllUsers())
      }}/>}
    </UsersCardWrapper>
  )
}

export default Users
