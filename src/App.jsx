// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
// import { Home } from './Components/Home'
// import { About } from './Components/About'
// import { Contact } from './Components/Contact'
// import { Service } from './Components/Service'

// function App() {
//   let data=createBrowserRouter([
//     {
//       path:'/',
//       element:<Home/>
//     },
//     {
//       path:'/about',
//       element:<About/>
//     },
//     {
//       path:'/contact',
//       element:<Contact/>
//     },
//     {
//       path:'/service',
//       element:<Service/>
//     },

//   ])


//   return (
//     <>
//           <h1>ROUTER</h1>
//           <RouterProvider router={data}/>
//     </>
//   )
// }

// export default App



// import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
// import './App.css'
// import { Home } from './Components/Home'
// import { About } from './Components/About'
// import { Contact } from './Components/Contact'
// import { Service } from './Components/Service'

// function App() {
//   let data=createBrowserRouter(
//     createRoutesFromElements(
//       <Route>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/' element={<About/>}></Route>
//         <Route path='/' element={<Contact/>}></Route>
//         <Route path='/' element={<Service/>}></Route>
//       </Route>
//     )
//   )


//   return (
//     <>
//           <h1>ROUTER</h1>
//           <RouterProvider router={data}/>
//     </>
//   )
// }

// export default App



import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { About } from './Components/About'
import { Home } from './Components/Home'
import { Service } from './Components/Service'
import { Contact, contactData } from './Components/Contact'
import { AppLayout } from './Components/Layout/AppLayout'
import { Error } from './Components/Layout/Error'
import { Url } from './Components/Layout/Url'
import { GetApi } from './Components/Api/GetApi'
import { Detail } from './Components/UI/Detail'
import { GetApis } from './Components/Api/GetApis'


function App() {
  let data  = createBrowserRouter(
    [{
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
    {
      path:'/',
      element:<Home/>
    },
     {
      path:'/about',
      element:<About/>
    },
    {
      path:'/service',
      element:<Service/>,
      loader:GetApi,
    },
    {
      path:'/service/:movieID',
      element:<Detail/>,
      loader:GetApis,
    },
    {
      path:'/contact',
      element:<Contact/>,
      action:contactData
    },
    {
      path:'/url/:userid',
      element:<Url/>
    }
      ]
    }]
  )
  return (
    <>
          
          <RouterProvider router={data}/>
    </>
  )
}

export default App