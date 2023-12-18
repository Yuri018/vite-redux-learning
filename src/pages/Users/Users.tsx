import { useSelector } from "react-redux"
import { usersState } from "store/redux/Users/selectors"

import { UsersCardWrapper, UserCard, Titles } from "./styles"

function Users() {
  const usersData = useSelector(usersState)

  return (
    <UsersCardWrapper>
      {usersData.users.map((user) => (
        <UserCard>
          <Titles>Name: {user.firstLastName}</Titles>
          <Titles>Age: {user.age}</Titles>
          <Titles>Job: {user.jobTitle}</Titles>
        </UserCard>
      ))}
    </UsersCardWrapper>
  )
}

export default Users
