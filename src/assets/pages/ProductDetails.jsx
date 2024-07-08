import DisplaySections from "../components/DisplaySections";
import ItemDisplay from "../components/ItemDisplay";

import pad from "/assets/images/pad.png";
import keyboard from "/assets/images/keyboard.png";
import screen from "/assets/images/screen.png";
import speakers from "/assets/images/speakers.png";
import padCharging from "/assets/images/pad-charging.png";
import padRight from "/assets/images/pad-right.png";
import padLeft from "/assets/images/pad-left.png";
import padUp from "/assets/images/pad-up.png";
import padFront from "/assets/images/pad-front.png";
import four from "/assets/icons/four-star.svg";
import detailsHeart from "/assets/icons/details-heart.svg";
import padColourSet from "/assets/icons/pad-colours.svg";
import iconDelivery from "/assets/icons/icon-delivery.svg";
import iconReturn from "/assets/icons/icon-return.svg";
import minus from "/assets/icons/minus.svg";
import plus from "/assets/icons/plus.svg";
import Button from "../components/Button";

const ProductDetails = () => {
  return (
    <div className="main-product">
      <div className="main-product__breadcrumb">
        <span>Account</span>
        <span>/</span>
        <span>Gaming</span>
        <span>/</span>
        <span>Havic HV G-92 Gamepad</span>
      </div>
      <div className="main-product__content">
        <div className="main-product__content--left">
          <div>
            <img src={padCharging} alt="" />
          </div>
          <div>
            <img src={padRight} alt="" />
          </div>
          <div>
            <img src={padUp} alt="" />
          </div>
          <div>
            <img src={padLeft} alt="" />
          </div>
        </div>
        <div className="main-product__content--middle">
          <div>
            <img src={padFront} alt="" />
          </div>
        </div>
        <div className="main-product__content--right">
          <h1>Havic HV G-92 Gamepad</h1>
          <div>
            <div>
              <img src={four} alt="" />
              <p>
                <span>(150 Reviews)</span>
                <span>|</span>
                <span className="text-green">In Stock</span>
              </p>
            </div>
            <p className="price">$192.00</p>
            <p className="description-text">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
          <div>
            <div>
              <span className="large">Colours:</span>
              <img src={padColourSet} alt="" />
            </div>
            <div className="sizes">
              <span className="large">Size:</span>
              <div>
                <span>xs</span>
                <span>s</span>
                <span className="current-size">m</span>
                <span>l</span>
                <span>xl</span>
              </div>
            </div>
            <div className="quantity">
              <div>
                <button>
                  <img src={minus} alt="reduce qauntity by one" />
                </button>
                <span>2</span>
                <button>
                  <img src={plus} alt="add quantity one" />
                </button>
              </div>
              <div>
                <Button buttonColour="button-reddish-brown">Buy Now</Button>
              </div>
              <div>
                <img src={detailsHeart} alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src={iconDelivery} alt="" />
                <div>
                  <p>Free Delivery</p>
                  <p className="text-underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div>
                <img src={iconReturn} alt="" />
                <div>
                  <p>Return Delivery</p>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DisplaySections
          className="main-product__details"
          section="Related Item"
        >
          <ItemDisplay
            label="HAVIT HV-G92 Gamepad"
            price="120"
            starRating="five"
            votes="88"
            product={pad}
            discount="160"
            percent="40"
            addToCartButton={false}
            showHeart={true}
          />
          <ItemDisplay
            label="AK-900 Wired Keyboard"
            price="960"
            starRating="four"
            votes="75"
            product={keyboard}
            discount="1160"
            percent="35"
            addToCartButton={true}
            showHeart={true}
          />
          <ItemDisplay
            label="IPS LCD Gaming Monitor"
            price="370"
            starRating="five"
            votes="99"
            product={screen}
            discount="400"
            percent="30"
            addToCartButton={false}
            showHeart={true}
          />
          <ItemDisplay
            label="RGB liquid CPU Cooler"
            price="160"
            starRating="four-and-half"
            votes="65"
            product={speakers}
            discount="170"
            addToCartButton={false}
            showHeart={true}
          />
        </DisplaySections>
      </div>
    </div>
  );
};

export default ProductDetails;
