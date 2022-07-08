import "./styles.scss";
import "./test.scss";
import { useState, useEffect } from "react";
import Introduction from "./Components/Introduction";
import SidebarLeft from "./Components/SidebarLeft";
import SidebarRight from "./Components/SidebarRight";
import Navbar from "./Components/Navbar";
import LoadingScreen from "./Components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isLoading === false) {
    return (
      <div className="App">
        <Navbar />
        <SidebarLeft />
        <SidebarRight />

        <div className="containerWrapper">
          <div className="container">
            <Introduction />
          </div>
        </div>
      </div>
    );
  } else {
    return <LoadingScreen />;
  }
}
