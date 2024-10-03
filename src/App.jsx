import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Main from "./components/Main";
import Error from "./components/Error";
import { UserProvider } from "./utils/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-page" element={<Main />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
