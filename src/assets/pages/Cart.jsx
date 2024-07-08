import cancelIcon from "/assets/icons/icon-cancel.svg";
import littleScreen from "/assets/images/little-screen.png";
import littlePad from "/assets/images/little-pad.png";

import Button from "../components/Button";

const Cart = () => {
  return (
    <div className="main-cart">
      <div className="main-cart__breadcrumb">
        <span>Home</span>
        <span>/</span>
        <span>Cart</span>
      </div>

      <div className="main-cart__table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="main-cart__table--image">
                  <img src={cancelIcon} alt="" className="cancel" />
                  <img src={littleScreen} alt="" className="screen" />
                </div>
                <span>LCD Monitor</span>
              </td>
              <td>$650</td>
              <td>
                <input type="number" name="quantity" id="quantity" value="01" />
              </td>
              <td>$650</td>
            </tr>
            <tr>
              <td className="main-cart__table--td-image">
                <img src={littlePad} alt="" />
                <span>H1 Gamepad</span>
              </td>
              <td>$550</td>
              <td>
                <input type="number" name="quantity" id="quantity" value="02" />
              </td>
              <td>$1100</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="main-cart__options">
        <Button buttonColour="button-transparent">Return to Shop</Button>
        <Button buttonColour="button-transparent">Update Cart</Button>
      </div>
      <div className="main-cart__coupon">
        <form>
          <input
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Coupon Code"
          />
          <input type="submit" value="Apply Coupon" />
        </form>
        <div>
          <h6>Cart Total</h6>
          <div>
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div>
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <div>
            <Button buttonColour="button-reddish-brown">
              Procees to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
