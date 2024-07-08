import { Link, useNavigate } from "react-router-dom";

import logo from "/assets/icons/Exclusive.svg";
import search from "/assets/icons/search.svg";
import Cart from "/assets/icons/Cart.svg";
import Wishlist from "/assets/icons/Wishlist.svg";
import user from "/assets/icons/user.svg";
import account from "/assets/icons/account.svg";
import mallbag from "/assets/icons/mallbag.svg";
import cancel from "/assets/icons/cancel.svg";
import reviews from "/assets/icons/reviews.svg";
import logoutIcon from "/assets/icons/logout.svg";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux-features/authSlice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="exclusive logo" />
        </Link>

        <ul className="navbar__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>

        <div className="navbar__menu">
          <div className="navbar__menu__search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="What are you looking for?"
            />
            <label htmlFor="search">
              <img src={search} alt="" />
            </label>
          </div>

          <div className="navbar__menu__extras">
            <Link to="/cart" className="link">
              <img src={Cart} alt="" className="cursor-pointer" />
            </Link>
            <Link to="/wishlist" className="link">
              <img src={Wishlist} alt="" className="cursor-pointer" />
            </Link>
            <div className="user-div">
              <img
                src={user}
                alt=""
                className="cursor-pointer"
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                }}
              />
              {isModalOpen ? (
                <div className="modal">
                  <ul>
                    <li>
                      <img src={account} alt="" />
                      <span>Manage My Account</span>
                    </li>
                    <li>
                      <img src={mallbag} alt="" />
                      <span>My Order</span>
                    </li>
                    <li>
                      <img src={cancel} alt="" />
                      <span>My Cancellations</span>
                    </li>
                    <li>
                      <img src={reviews} alt="" />
                      <span>My Reviews</span>
                    </li>
                    <li onClick={handleLogout}>
                      <img src={logoutIcon} alt="" />
                      <span>Logout</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div
              className="hamburger"
              onClick={() => {
                setIsPopUpOpen(!isPopUpOpen);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {isPopUpOpen ? (
        <ul className="pop-up">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
