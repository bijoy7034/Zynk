import React, { useState } from "react";
import "./AccountCreation.css";
import MotionTopSlide from "../../Animations/topSlide";
import MotionLeftSlide from "../../Animations/leftSlide";
import MotionZoomIn from "../../Animations/zoomIn";
import useAuthStore from "../../store/authStore";
import Loader from "../../Animations/loader";

function AccountCreation({ toggleAuth }) {
  const { createUser, error, loading } = useAuthStore();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  if (error) console.log(error);

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = createUser(user);
    if (user) 
    setUser({ password: "" });
  };

  return (
    <div className="auth-main-container">
      <div className="auth-container">
        <MotionTopSlide>
          <h2>ZYNK</h2>
        </MotionTopSlide>
        {error && (
          <MotionZoomIn duration={0.3}>
            <div className="alert alert-danger alert-sm my-2" role="alert">
              {error}
            </div>
          </MotionZoomIn>
        )}
        <form onSubmit={handleOnSubmit}>
          <MotionLeftSlide>
            <div className="mb-3">
              <label htmlFor="fullnameInput" className="form-label">
                Fullname
              </label>
              <input
                name="fullname"
                value={user.fullname}
                onChange={handleOnChange}
                type="text"
                className="form-control form-control-sm"
                id="fullnameInput"
                aria-describedby="fullnameHelp"
              />
              <div id="fullnameHelp" className="form-text">
                Give us your fullname
              </div>
            </div>
          </MotionLeftSlide>
          <MotionLeftSlide delay={0.2}>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email
              </label>
              <input
                value={user.email}
                name="email"
                onChange={handleOnChange}
                type="email"
                className="form-control form-control-sm"
                id="emailInput"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
          </MotionLeftSlide>
          <MotionLeftSlide delay={0.4}>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <input
                name="password"
                value={user.password}
                onChange={handleOnChange}
                type="password"
                className="form-control form-control-sm"
                id="passwordInput"
              />
            </div>
          </MotionLeftSlide>
          <MotionZoomIn delay={0.6}>
            <div className="d-grid gap-2">
              <button 
                type="submit" 
                className="btn btn-dark btn-block"
                disabled={loading}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  minHeight: '38px'
                }}
              >
                {loading ? (
                  <Loader loading={loading} color="white" size={6} />
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </MotionZoomIn>
          <p className="signup">
            You have an account?{" "}
            <button
              onClick={toggleAuth}
              type="button"
              className="auth-link"
              role="button"
            >
              Sign In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default AccountCreation;
