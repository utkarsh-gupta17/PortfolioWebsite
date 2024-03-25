import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
// @ts-ignore
import About from "./pages/About"
import ProjectsPage from "./pages/ProjectsPage"
import Page404 from "./pages/Page404"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
