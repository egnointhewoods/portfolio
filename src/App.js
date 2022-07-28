import "./styles.css";
import { useState, useEffect } from "react";
import Introduction from "./Components/Introduction";
import SidebarLeft from "./Components/SidebarLeft";
import SidebarRight from "./Components/SidebarRight";
import Navbar from "./Components/Navbar";
import LoadingScreen from "./Components/LoadingScreen";
import About from "./Components/About";
import Projects from "./Components/Projects";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
            <About />
            <Projects />
          </div>
        </div>
      </div>
    );
  } else {
    return <LoadingScreen />;
  }
}
