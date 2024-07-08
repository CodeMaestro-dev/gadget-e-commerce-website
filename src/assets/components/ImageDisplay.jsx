import carouselNavigation from "/assets/icons/carousel-navigation.svg";
import rightArrow from "/assets/icons/right-arrow.svg";
import apple from "/assets/images/apple-logo.png";
import iphone from "/assets/images/apple-phone.png";

const ImageDisplay = () => {
  return (
    <div className="main__first-section__image-display">
      <div className="main__first-section__image-display--flex">
        <div>
          <div className="main__first-section__image-display--flex-text">
            <img src={apple} alt=""/>
            <span>iPhone 14 Series</span>
          </div>
          <h2 className="main__first-section__image-display--flex-large">
            Up to 10% off Voucher
          </h2>
          <div className="text-underline shop-now-flex">
            <span>Shop Now</span>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div>
          <img src={iphone} alt="" />
        </div>
      </div>
      <div>
        <img src={carouselNavigation} alt="" />
      </div>
    </div>
  );
};

export default ImageDisplay;
