import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './assets/User'
import CreateUser from './assets/CreateUser'
import UpdateUser from './assets/UpdateUser'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/UpdateUser/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;