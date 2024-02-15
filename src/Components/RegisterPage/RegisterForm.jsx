import "./RegisterForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Kayıt Ol</h1>
        <div className="input-box">
          <input type="text" placeholder="E-mail" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Parola" required />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Parola Tekrar" required />
          <FaLock className="icon" />
        </div>  
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default RegisterForm;
