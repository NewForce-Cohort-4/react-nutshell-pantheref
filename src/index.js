import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Nutshell } from "./components/Nutshell";
import './index.css'

// Import Nutshell function and print to DOM.
ReactDOM.render(
  <Router>
      <Nutshell />
  </Router>
  , document.getElementById('root'))
