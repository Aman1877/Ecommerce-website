import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSbumit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      console.log(res);
      if (res && res.data.success) {
        toast.success("login successfully");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register - Ecommerce App"}>
      <div className="form-container">
        <h1>Login Form</h1>
        <form onSubmit={handleSbumit}>
          <div className="mb-3">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete="off"
              placeholder="Enter your Email"
              type="email"
              id="email"
              name="email"
              className="form-control"
              // required
            />
          </div>

          <div className="mb-3">
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your Password"
              type="password"
              id="password"
              name="password"
              className="form-control"
              // required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              onClick={() => {
                navigate("/forgot-password");
              }}
              className="btn forgot-btn"
            >
              Forgot Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
