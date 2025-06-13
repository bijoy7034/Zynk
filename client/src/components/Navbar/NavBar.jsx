import React from "react";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

function NavBar() {
    const {logout} = useAuthStore();
  return (
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <h4 className="text-bold">ZYNK</h4>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-2">
              <a class="nav-link active" aria-current="page" href="#">
                Feeds
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">
                Profile
              </a>
            </li>
            <li  class="nav-item mx-2">
                <button className="btn btn-outline-danger" onClick={logout}>
                    Logout
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
