import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Main from "./components/Main";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-page" element={<Main />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
