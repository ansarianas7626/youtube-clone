import { useState } from "react"

const useOnlineStatus = () => {
    const [status, setStatus] = useState("Online");

    window.addEventListener("online", function() {
        setStatus("online");
    })
    
    window.addEventListener("offline", function() {
          setStatus("offline");
    });

    return status
}

export default useOnlineStatus
