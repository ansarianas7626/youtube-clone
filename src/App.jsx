import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Body from "./components/Body"
import Header from "./components/Header"
import VideoContainer from "./components/VideoContainer"
import WatchPage from "./components/WatchPage"

function App() {
  
  const appRouter = createBrowserRouter([{
    path : "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <VideoContainer/>
      },
      {
        path: "/watch",
        element: <WatchPage/>
      },

    ]
  }])

  return (
    <div className="max-h-screen overflow-hidden">
      <Header />
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
