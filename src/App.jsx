import { Route, Routes } from "react-router-dom";
import "./App.css";

import LoginForm from "./Components/LoginPage/LoginForm";
import RegisterForm from "./Components/RegisterPage/RegisterForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm/>}/>
      <Route path="/register" element={<RegisterForm/>} />
    </Routes>
  );
}

export default App;
