import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Logout from "./components/auth/Logout";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Room from "./components/rooms/Room";
import Reserve from "./components/Restaurants/Restaurant";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { decodeToken } from "react-jwt";
import { Cookies } from "react-cookie";
import { BsFillPersonFill } from "react-icons/bs";
import "./App.css";
function App() {
  const cookies = new Cookies();
  const [token, setToken] = useState();
  const [show, setShow] = useState(false);
  const ShowPopup = () => setShow(true);
  const ClosePopup = () => setShow(false);
  const access = () => {
    setToken(cookies.get("access"));
  };
  useEffect(() => {
    setToken(cookies.get("access"));
    
  }, []);
  const decodedToken = decodeToken(token);
  console.log(decodedToken)
  return (
    <Router>
      <div className="App">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark "
        >
          <div className="container-fluid mx-4">
            <Link className="navbar-brand" to="/">
              <h3>FoodDelivery</h3>
            </Link>
            <div className="float-right" id="navbarSupportedContent">
              {!decodedToken ? (
                <>
                  <Link
                    to="/login"
                    className="link-light text-decoration-none m-3"
                  >
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-outline-light">
                    Signup
                  </Link>
                </>
              ) : (
                <DropdownButton
                  id="dropdown-basic-button"
                  variant="light"
                  title={<BsFillPersonFill />}
                >
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={ShowPopup}>Logout</Dropdown.Item>
                </DropdownButton>
              )}
            </div>
          </div>
        </nav>
        <div className="d-flex min-height">
          {decodedToken && <SideBar role={decodedToken.role}  />}
          <Routes>
            <Route exact path="/" element={<Home log={decodedToken} />}></Route>
            <Route
              exact
              path="/login"
              element={<Login access={access} />}
            ></Route>
            <Route
              exact
              path="/signup"
              element={<Signup access={access} />}
            ></Route>
            {decodedToken && (<>
              <Route exact path="/profile" element={<Profile log={decodedToken}/>}></Route>
              <Route exact path="/rooms" element={<Room role={decodedToken.role} userId={decodedToken.id} />}></Route>
              <Route exact path="/reserve" element={<Reserve role={decodedToken.role} userId={decodedToken.id} />}></Route>

              </>
            )}
          </Routes>
          <Logout show={show} ClosePopup={ClosePopup} access={access} />
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;