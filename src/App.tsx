import GlobalStyles from "styles/GlobalStyles"
import Layout from "components/Layout"
import { Route, Routes } from "react-router-dom"
import TodoList from "components/TodoList"
import JokeGenerator from "components/JokeGenerator"
import CatFacts from "components/CatFacts/CatFacts"

import Home from "pages/Home"
import Users from "pages/Users"

// import Homework29 from "homeworks/Homework29";
// import Homework31 from "homeworks/Homework31";
// import Lesson30 from "components/lessons/Lesson30";

function App() {
  return (
    <>
      <GlobalStyles />

      {/* <TodoList /> */}
      {/* <JokeGenerator /> */}
      <CatFacts />

      {/* <Layout>
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page is not found" />
        </Routes>
      </Layout> */}

      {/* <Homework29 /> */}
      {/* <Homework31 /> */}
      {/* <Lesson30 /> */}
    </>
  )
}

export default App
