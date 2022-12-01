import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SearchPage from '../pages/SearchPage'

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route exact path="/"  element={<HomePage/>} />
            <Route exact path='/loginpage'  element={<LoginPage/>} />
            <Route exact path='/searchpage'  element={<SearchPage/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter
