import { useEffect, useRef, lazy } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Header from "./components/Common/Header";
// import Coin from "./pages/Coin";
// import Compare from "./pages/Compare";
// import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
// import Watchlist from "./pages/Watchlist";

async function delayForDemo(promise) {
  await new Promise(resolve => {
    setTimeout(resolve, 500);
  });
  return promise;
}

// const Header = lazy(()=> delayForDemo(import("./pages/Header")))
const Coin = lazy(()=> delayForDemo(import("./pages/Coin")))
const Compare = lazy(()=> delayForDemo(import("./pages/Compare")))
const Dashboard = lazy(()=> delayForDemo(import("./pages/Dashboard")))
// const Home = lazy(()=> delayForDemo(import("./pages/Home")))
const Watchlist = lazy(()=> delayForDemo(import("./pages/Watchlist")))


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const cursorRef = useRef();
  const cursorPointerRef = useRef();

  useEffect(() => {

    document.body.addEventListener("mousemove", function (e) {
      return (
        (cursorRef.current.style.left = e.clientX + "px"),
        (cursorRef.current.style.top = e.clientY + "px"),
        (cursorPointerRef.current.style.left = e.clientX + "px"),
        (cursorPointerRef.current.style.top = e.clientY + "px")
      );
    });

    document.body.addEventListener("mousedown", function (e) {
      return (
        (cursorRef.current.style.height = "0.5rem"),
        (cursorRef.current.style.width = "0.5rem"),
        (cursorPointerRef.current.style.height = "3rem"),
        (cursorPointerRef.current.style.width = "3rem")
      );
    });

    document.body.addEventListener("mouseup", function (e) {
      return (
        (cursorRef.current.style.height = "0.3rem"),
        (cursorRef.current.style.width = "0.3rem"),
        (cursorPointerRef.current.style.height = "2rem"),
        (cursorPointerRef.current.style.width = "2rem")
      );
    });
  }, []);

  return (
    <div className="App">
      <div className="cursor" id="cursor" ref={cursorRef}/>
      <div className="cursor-pointer" id="cursor-pointer" ref={cursorPointerRef} />
      <ToastContainer />
      <ThemeProvider theme={theme}>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coin/:id" element={<Coin />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
