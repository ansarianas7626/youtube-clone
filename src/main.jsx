import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import WatchPage from './components/WatchPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App/>}>
        <Route path='/watch' element={<WatchPage/>}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>,
)
