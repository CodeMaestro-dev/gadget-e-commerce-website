import DisplaySections from "../components/DisplaySections";
import ItemDisplay from "../components/ItemDisplay";

import bag from "/assets/images/bag.png";
import speakers from "/assets/images/speakers.png";
import pad2 from "/assets/images/pad-2.png";
import jacket2 from "/assets/images/jacket-2.png";
import pad from "/assets/images/pad.png";
import keyboard from "/assets/images/keyboard.png";
import screen from "/assets/images/screen.png";
import laptop from "/assets/images/laptop.png";

const Wishlist = () => {
  return (
    <div className="main-wishlist">
      <DisplaySections
        className="main-wishlist__display"
        section="Wishlist (4)"
        timer={false}
        scrollOption={false}
        buttonOption={true}
        buttonColor="white"
        buttonText="Move All To Bag"
        sectionColour="black"
        spanNone={true}
      >
        <ItemDisplay
          label="Gucci duffle bag"
          price="960"
          starRating="four-and-half"
          votes="65"
          product={bag}
          discount="1160"
          addToCartButton={true}
          showTrash={true}
          noShowRating={true}
        />
        <ItemDisplay
          label="RGB liquid CPU Cooler"
          price="1960"
          starRating="four-and-half"
          votes="65"  
          product={speakers}
          addToCartButton={true}
          showTrash={true}
          noShowRating={true}
        />
        <ItemDisplay
          label="The north coat"
          price="550"
          starRating="five"
          votes="65"
          product={pad2}
          addToCartButton={true}
          showTrash={true}
          noShowRating={true}
        />
        <ItemDisplay
          label="Small BookSelf"
          price="750"
          starRating="five"
          votes="65"
          product={jacket2}
          addToCartButton={true}
          showTrash={true}
          noShowRating={true}
        />
      </DisplaySections>
      <DisplaySections
        className="main-wishlist__display"
        section="Just For You"
        timer={false}
        scrollOption={false}
        buttonOption={true}
        buttonColor="white"
        buttonText="See All"
        sectionColour="black"
        showHeart={false}
      >
        <ItemDisplay
          label="Small BookSelf"
          price="960"
          starRating="five"
          votes="65"
          product={laptop}
          addToCartButton={true}
          showHeart={false}
          discount="1160"
          percent="35"
        />
        <ItemDisplay
          label="IPS LCD Gaming Monitor"
          price="1160"
          starRating="five"
          votes="65"
          product={screen}
          discount=""
          addToCartButton={true}
          showHeart={false}
        />
        <ItemDisplay
          label="HAVIT HV-G92 Gamepad"
          price="120"
          starRating="five"
          votes="65"
          product={pad}
          discount="560"
          percent="new"
          addToCartButton={true}
          showHeart={false}
        />
        <ItemDisplay
          label="AK-900 Wired Keyboard"
          price="200"
          starRating="five"
          votes="65"
          product={keyboard}
          discount="1160"
          addToCartButton={true}
          showHeart={false}
        />
      </DisplaySections>
    </div>
  );
};

export default Wishlist;
