import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Mainpage from './component/mainPage.jsx'
import AboutPage from './component/about.jsx'
import Contact from './component/contact.jsx'
import User from './component/user.jsx'
import Github,{getGithub} from './component/github.jsx'


// const router=createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       element:<Mainpage/>,
//     },
//     {
//       path:"about",
//       element:<AboutPage/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
// }])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Mainpage/>}></Route>
      <Route path='about' element={<AboutPage/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:id' element={<User/>}></Route>
      <Route loader={getGithub} path='github' element={<Github/>}></Route>
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
