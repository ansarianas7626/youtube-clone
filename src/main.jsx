import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
// import store, { persistor } from './redux/store.js'
import store from './redux/store.js'
import VideoContainer from './components/VideoContainer.jsx'
import WatchPage from './components/WatchPage.jsx'
import ShortsPage from './components/ShortsPage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import { PersistGate } from 'redux-persist/integration/react'

const appRouter = createBrowserRouter([{
  path : "/",
  element: <App/>,
  children: [
    {
      path: "/",
      element: <VideoContainer/>
    },
    {
      path: "/watch",
      element: <WatchPage/>
    },
    {
      path: "/shorts",
      element: <ShortsPage/>
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <RouterProvider router={appRouter}/>
      {/* <App /> */}
    {/* </PersistGate> */}
  </Provider>
)
