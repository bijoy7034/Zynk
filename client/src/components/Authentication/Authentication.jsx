import React, { useState } from "react";
import "./Authentication.css";
import useAuthStore from "../../store/authStore";
import MotionTopSlide from "../../Animations/topSlide";
import MotionLeftSlide from "../../Animations/leftSlide";
import MotionZoomIn from "../../Animations/zoomIn";
import Loader from "../../Animations/loader";

function Authentication({ toggleAuth }) {
  const { login, loading, error } = useAuthStore();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleOnsubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="auth-main-container">
      <div className="auth-container">
        <div>
          <MotionTopSlide>
            <h2>ZYNK</h2>
          </MotionTopSlide>
          {error && (
            <MotionZoomIn>
              <div class="alert alert-danger alert-sm my-2" role="alert">
                {error}
              </div>
            </MotionZoomIn>
          )}
        </div>
        <form onSubmit={handleOnsubmit}>
          <MotionLeftSlide>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                required
                value={user.email}
                onChange={handleOnChange}
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
          </MotionLeftSlide>
          <MotionLeftSlide delay={0.2}>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                required
                value={user.password}
                onChange={handleOnChange}
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </MotionLeftSlide>
          <MotionLeftSlide delay={0.4}>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
          </MotionLeftSlide>
          <MotionZoomIn delay={0.6}>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-dark btn-block"
                disabled={loading}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "38px",
                }}
              >
                {loading ? (
                  <Loader loading={loading} color="white" size={6}  />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </MotionZoomIn>
          <p className="signup">
            Don't have an account?{" "}
            <button
              onClick={toggleAuth}
              type="button"
              className="auth-link"
              role="button"
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Authentication;
