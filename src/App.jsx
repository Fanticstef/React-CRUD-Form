import React from 'react'
import './App.jsx'
import Create from './paractics/my App/Create.jsx'
import { Route, Routes } from 'react-router-dom'
import Read from './paractics/my App/Read.jsx'
import Edit from './paractics/my App/Edit.jsx'
// import { Route, Routes } from 'react-router-dom'
// import FormPage from './components/CRUD/FormPage.jsx'
// import Create from './paractics/Crud app/Create.jsx'
// import Read from './paractics/Crud app/Read.jsx'
// import Edit from './paractics/Crud app/Edit.jsx'
// import TodoApp from './components/TodoApp/TodoApp.jsx'
// import FormData from './components/Form&Data/FormData.jsx'


export default function App() {

  return (
    // <>
    //   {/* <div className="container mx-auto flex items-center justify-center">
    //     <div className="max-w-md w-full my-3">
    //       <TodoApp />
    //     </div>
    //   </div> */}

    //   {/* <div className="container mx-auto">
    //     <div className="flex items-center justify-center">
    //       <div className="w-[85%] mt-5">
    //         <FormData />
    //       </div>
    //     </div>
    //   </div> */}

    //   {/* <div className="">
    //     <div className="container mx-auto">
    //       <div className="flex items-center justify-center">
    //         <div className="w-[85%]">
    //           <FormPage />
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
    // </>
    <>
      {/* first CRUD App */}
      {/* <Routes>
        <Route path='/' element={<Read />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit' element={<Edit />} />
      </Routes> */}

      {/* seconde CRUD App */}
      <Routes>
        <Route path='/' element={<Read />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </>
  )
}
