import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>GİRİŞ</h1>
        <div className="input-box">
          <input type="text" placeholder="E-mail" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Parola" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Beni Hatırla
          </label>
          <a href="#">Parolanı mı unuttun?</a>
        </div>

        <button type="submit">Giriş Yap</button>
        <div className="register-link">
          <p>
            Hesabınız yok mu ? <Link to={"/register"}>KAYIT OL</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
