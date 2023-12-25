import GlobalStyles from "styles/GlobalStyles"
// import Layout from "components/Layout"
import { Route, Routes } from "react-router-dom"
// import TodoList from "components/TodoList"
// import JokeGenerator from "components/JokeGenerator"

import Weather from "pages/Weather"
import WeatherHome from "pages/Weather/components/WeatherHome"
import Weathers from "pages/Weather/components/Weathers"

// import Home from "pages/Home"
// import Users from "pages/Users"

// import Homework29 from "homeworks/Homework29";
// import Homework31 from "homeworks/Homework31";
// import Lesson30 from "components/lessons/Lesson30";

function App() {
  return (
    <>
      <GlobalStyles />
      <Weather>
        <Routes>
          <Route path="/" element={<WeatherHome />} />
          <Route path="/weathers" element={<Weathers />} />
          <Route path="*" element="Page is not found" />
        </Routes>
      </Weather>

      {/* <TodoList /> */}
      {/* <JokeGenerator /> */}

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
