import React from 'react'
import './App.jsx'
import { Route, Routes } from 'react-router-dom'
import Read from './components/Crud app/Read.jsx'
import Create from './components/Crud app/Create.jsx'
import Edit from './components/Crud app/Edit.jsx'


export default function App() {

  return (
    <>
      {/* CRUD App start */}
      <Routes>
        <Route path='/' element={<Read />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
      {/* CRUD App end */}
    </>
  )
}
