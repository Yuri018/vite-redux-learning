export interface User {
    id: string,
    firstLastName: string,
      age: string,
      jobTitle: string,
}

export interface AddUserPayload {
    firstlastName: string
    age: string
    jobTitle: string
  }  

export interface UserState {
    users: User[]
}