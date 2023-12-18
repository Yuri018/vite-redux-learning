import Input from "components/Input"
import Button from "components/Button"

import{useDispatch} from 'react-redux'
import{usersActions} from 'store/redux/Users/usersSlise'

import { HomePageWrapper, UserForm, UserFormName } from "./styles"
import { useFormik } from "formik"

function Home() {
    const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstLastName: "",
      age: "",
      jobTitle: "",
    },
    onSubmit: (values) => {
      dispatch(usersActions.addUser(values))
        console.log(values)
    },
  })
  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Greate User</UserFormName>
        <Input
          name="firstLastName"
          value={formik.values.firstLastName}
          labelName="First/Last name"
          onChange={formik.handleChange}
        />
        <Input
          name="age"
          value={formik.values.age}
          labelName="Age"
          onChange={formik.handleChange}
        />
        <Input
          name="jobTitle"
          value={formik.values.jobTitle}
          labelName="Job title"
          onChange={formik.handleChange}
        />
    
        <Button name="Greate" type="submit" />
        
      </UserForm>
    </HomePageWrapper>
  )
}

export default Home
