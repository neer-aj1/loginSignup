import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import signup from "./components/signup"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={signup}></Route>
      </Routes>
    </Router>
  )
}

export default App
