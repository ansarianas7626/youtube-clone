import { useState } from "react";
import Body from "./components/Body"
import Header from "./components/Header"

function App() {

  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggle = ()=>{
    setShowSidebar(!showSidebar)
  }

  
  return (
    <div className="max-h-screen overflow-hidden">
      <Header handleToggle={handleToggle}/>
      <Body showSidebar={showSidebar}/>
    </div>
  )
}

export default App
