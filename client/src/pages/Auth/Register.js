import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSbumit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
        }
      );
      console.log(res);
      if (res && res.data.success) {
        toast.success("User Register Successfully");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Register - Ecommerce App"}>
      <div className="form-container">
        <h1>Register Form</h1>
        <form onSubmit={handleSbumit}>
          <div className="mb-3">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              autoComplete="off"
              placeholder="Enter your Name"
              type="text"
              name="name"
              id="name"
              className="form-control"
              // required
            />
          </div>

          <div className="mb-3">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete="off"
              placeholder="Enter your Email"
              type="email"
              name="email"
              id="email"
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
              autoComplete="off"
              placeholder="Enter your Password"
              type="password"
              name="password"
              id="password"
              className="form-control"
              // required
            />
          </div>

          <div className="mb-3">
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              autoComplete="off"
              placeholder="Enter your Phone"
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              // required
            />
          </div>

          <div className="mb-3">
            <input
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              autoComplete="off"
              placeholder="Enter your Address"
              type="text"
              className="form-control"
              name="address"
              id="address"
              // required
            />
          </div>
          <div className="mb-3">
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              autoComplete="off"
              placeholder="What is Your Favorite sports"
              type="text"
              className="form-control"
              name="answer"
              id="answer"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
