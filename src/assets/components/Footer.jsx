import send from "/assets/icons/send.svg";
import facebook from "/assets/icons/facebook.svg";
import instagram from "/assets/icons/instagram.svg";
import linkedin from "/assets/icons/linkedin.svg";
import twitter from "/assets/icons/twitter.svg";
import copyright from "/assets/icons/copyright.svg";
import exclusiveWhite from "/assets/icons/Exclusive-white.svg";

import qrCode from "/assets/images/Qr Code.png";
import appstore from "/assets/images/appstore.png";
import playstore from "/assets/images/playstore.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__first">
        <ul>
          <li>
            <img src={exclusiveWhite} alt="" />
          </li>
          <li>Subscribe</li>
          <li>Get 10% off your first order</li>
          <li>
            <div className="footer__first--email">
              <input type="email" name="email" id="footer-email" placeholder="Enter your email"/>
              <button>
                <img src={send} alt="send" />
              </button>
            </div>
          </li>
        </ul>
        <ul>
          <li>Support</li>
          <li className="footer__first--address">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
        <ul>
          <li>Quick Link</li>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Download App</li>
          <li>Save $3 with App New User Only</li>
          <li>
            <div className="footer__first--images">
              <div>
                <img src={qrCode} alt="" />
              </div>
              <div>
                <img src={playstore} alt="" />
                <img src={appstore} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="footer__first--handles">
              <a href="#">
                <img src={facebook} alt="facebook handle" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter handle" />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram handle" />
              </a>
              <a href="#">
                <img src={linkedin} alt="linkedin handle" />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer__second">
        <p>
          <img src={copyright} alt="" />
          <span>Copyright Rimel 2022. All right reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
