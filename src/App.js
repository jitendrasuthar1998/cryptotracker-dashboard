import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Coin from "./pages/Coin";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import Header from "./components/Common/Header";

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
      <div className="cursor" id="cursor" ref={cursorRef} />
      <div className="cursor-pointer" id="cursor-pointer" ref={cursorPointerRef} />
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Header/>
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
