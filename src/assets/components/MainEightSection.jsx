import truck from "/assets/icons/truck.svg";
import security from "/assets/icons/security.svg";
import headset from "/assets/icons/headset.svg";

const MainEightSection = () => {
  return (
    <div className="main__eight-section">
      <div className="services">
        <img src={truck} alt="" />
        <h3>free and fast delivery</h3>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="services">
        <img src={headset} alt="" />
        <h3>24/7 customer service</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="services">
        <img src={security} alt="" />
        <h3>money back guarantee</h3>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  );
};

export default MainEightSection;
