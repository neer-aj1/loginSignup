import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import signup from "./components/signup"
import login from "./components/login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" Component={signup}></Route>
        <Route path="/" Component={login}></Route>
      </Routes>
    </Router>
  )
}

export default App
