import bag from "/assets/images/bag.png";
import speakers from "/assets/images/speakers.png";
import bookShelf from "/assets/images/book-shelf.png";
import jacket from "/assets/images/jacket.png";

import DisplaySections from "../components/DisplaySections";
import ItemDisplay from "../components/ItemDisplay";

const MainFourthSection = () => {
  return (
    <div className="main__fourth-section">
      <DisplaySections
        className="main__second-section--first no-scrollbar"
        section="This Month"
        title="Best Selling Products"
        timer={false}
        scrollOption={false}
        buttonOption={true}
      >
        <ItemDisplay
          label="The north coat"
          price="260"
          starRating="five"
          votes="65"
          product={jacket}
          discount="360"
          addToCartButton={false}
          showHeart={true}
        />
        <ItemDisplay
          label="Gucci duffle bag"
          price="960"
          starRating="four-and-half"
          votes="65"
          product={bag}
          discount="1160"
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
        <ItemDisplay
          label="Small BookSelf"
          price="360"
          starRating="five"
          votes="65"
          product={bookShelf}
          addToCartButton={false}
          showHeart={true}
        />
      </DisplaySections>
    </div>
  );
};

export default MainFourthSection;
