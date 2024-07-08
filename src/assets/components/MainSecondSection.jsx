import DisplaySections from "../components/DisplaySections";
import ItemDisplay from "../components/ItemDisplay";

import pad from "/assets/images/pad.png";
import keyboard from "/assets/images/keyboard.png";
import screen from "/assets/images/screen.png";
import chair from "/assets/images/chair.png";
import Button from "../components/Button";

const MainSecondSection = () => {
  return (
    <div className="main__second-section">
      <DisplaySections
        className="main__second-section--first no-scrollbar"
        section="Today’s"
        title="Flash Sales"
        timer={true}
        paddingEndOnController={true}
        scrollOption={true}
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
          label="S-Series Comfort Chair"
          price="375"
          starRating="four-and-half"
          votes="99"
          product={chair}
          discount="370"
          percent="25"
          addToCartButton={false}
          showHeart={true}
        />
        <ItemDisplay
          label="S-Series Comfort Chair"
          price="375"
          starRating="four-and-half"
          votes="99"
          product={chair}
          discount="370"
          percent="25"
          addToCartButton={false}
          showHeart={true}
        />
        <ItemDisplay
          label="S-Series Comfort Chair"
          price="375"
          starRating="four-and-half"
          votes="99"
          product={chair}
          discount="370"
          percent="25"
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

export default MainSecondSection;
