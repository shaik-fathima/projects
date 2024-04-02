import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import What from './component/What/What.jsx'
import Why from './component/Why/Why.jsx'
import When from './component/When/When.jsx'
import Contact from './component/Contact/Contact.jsx'
import Github,  {githubInfoLoder} from './component/github/GitHub.jsx'
import User  from './component/User/User.jsx'

const main= createBrowserRouter ( createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
     <Route path='/' element={<What/>}/>
    <Route path='/Why' element={<Why/>}/>
    <Route path='/When' element={<When/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='User/' element={<User/>}>
      <Route path=':userid' element={<User/>}/>
    </Route>

  <Route>
    <Route loader={githubInfoLoder} path="github" element={<Github/>}/>
   <Route path='*' element={<div>Github not found</div>}></Route>
 </Route>
 
 </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={main}/>
  </React.StrictMode>,
)
