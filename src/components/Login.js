import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/cars");
    } else {
      alert("error");
    }
  };

  return (
    <div className="d-flex">
      <div className="col gambar">
        <img src="/images/login.png" id="banner" alt="Banner" />
      </div>
      <div className="col daftar">
        <div className="position-relative top-50 start-50 translate-middle ps-5">
          <img src="/images/logo2.png" className="mb-3" alt="Logo" />
          <h4 className="mb-3">Welcome, Admin BCR</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control w-75"
                id="email"
                name="email"
                placeholder="Contoh: johndee@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control w-75"
                id="password"
                name="password"
                placeholder="6+ karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-75"
              id="tombol"
              name="submit"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
