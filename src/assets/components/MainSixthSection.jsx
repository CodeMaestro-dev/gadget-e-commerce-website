import dogFood from "/assets/images/dog-food.png";
import camera from "/assets/images/camera.png";
import laptop from "/assets/images/laptop.png";
import creams from "/assets/images/creams.png";
import car from "/assets/images/car.png";
import boots from "/assets/images/boots.png";
import pad2 from "/assets/images/pad-2.png";
import jacket2 from "/assets/images/jacket-2.png";
import Button from "../components/Button";

import DisplaySections from "../components/DisplaySections";
import ItemDisplay from "../components/ItemDisplay";

const MainSixthSection = () => {
  return (
    <div className="main__sixth-section">
      <DisplaySections
        className="main__sixth-section--grid"
        section="Our Products"
        title="Explore Our Products"
        timer={false}
        paddingEndOnController={false}
        scrollOption={true}
      >
        <ItemDisplay
          label="Breed Dry Dog Food"
          price="100"
          starRating="three"
          votes="35"
          product={dogFood}
          addToCartButton={false}
          showHeart={true}
        />
        <ItemDisplay
          label="CANON EOS DSLR Camera"
          price="360"
          starRating="four"
          votes="95"
          product={camera}
          addToCartButton={false}
          showHeart={true}
        />
        <ItemDisplay
          label="ASUS FHD Gaming Laptop"
          price="700"
          starRating="five"
          votes="325"
          product={laptop}
          addToCartButton={false}
          showHeart={true}
        />
        <ItemDisplay
          label="Curology Product Set "
          price="500"
          starRating="four"
          votes="145"
          product={creams}
          addToCartButton={false}
          showHeart={true}
        />
        <ItemDisplay
          label="Kids Electric Car"
          price="960"
          starRating="five"
          votes="65"
          percent="new"
          product={car}
          colourSet="1"
          addToCartButton={false}
          showHeart={true}
        />
        <ItemDisplay
          label="Jr. Zoom Soccer Cleats"
          price="1160"
          starRating="five"
          votes="35"
          product={boots}
          colourSet="2"
          addToCartButton={false}
          showHeart={true}
        />
        <ItemDisplay
          label="GP11 Shooter USB Gamepad"
          price="660"
          starRating="four-and-half"
          votes="55"
          percent="new"
          product={pad2}
          colourSet="3"
          addToCartButton={false}
          showHeart={true}
        />
        <ItemDisplay
          label="Quilted Satin Jacket"
          price="660"
          starRating="four-and-half"
          votes="55"
          colourSet="4"
          product={jacket2}
          addToCartButton={false}
          showHeart={true}
        />
      </DisplaySections>
      <div className="main__second-section--button">
        <Button buttonColour="button-reddish-brown">View All Products</Button>
      </div>
    </div>
  );
};

export default MainSixthSection;
