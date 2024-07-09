import PropTypes from "prop-types";
import heart from "/assets/icons/heart.svg";
import eye from "/assets/icons/eye.svg";
import five from "/assets/icons/five-star.svg";
import four from "/assets/icons/four-star.svg";
import three from "/assets/icons/three.svg";
import trash from "/assets/icons/trash.svg";
import fourHalf from "/assets/icons/four-half-star.svg";
import colour1 from "/assets/icons/colour-1.svg";
import colour2 from "/assets/icons/colour-2.svg";
import colour3 from "/assets/icons/colour-3.svg";
import colour4 from "/assets/icons/colour-4.svg";

const ItemDisplay = ({
  label,
  price,
  starRating,
  votes,
  product,
  discount,
  percent,
  colourSet,
  showHeart,
  showTrash,
  addToCartButton,
  noShowRating,
}) => {
  return (
    <div className="image-display w-100 min-w-270px">
      <div className="image-display__header h-250px">
        {percent === "new" ? (
          <div className="badge badge-green">
            <span>New</span>
          </div>
        ) : !percent ? (
          <></>
        ) : (
          <div className="badge badge-reddish-brown">
            <span>-{percent}%</span>
          </div>
        )}
        <img src={product} alt="" />
        <div className="menu-options">
          {showHeart ? <img src={heart} alt="" /> : <></>}
          {!showTrash ? <img src={eye} alt="" /> : <></>}
          {showTrash ? <img src={trash} alt="" /> : <></>}
        </div>
        {addToCartButton ? (
          <button className="add-to-cart">
            <p>Add To Cart</p>
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="image-display__footer">
        <p className="image-display__footer--label">{label}</p>

        {discount ? (
          <>
            <p>
              <span className="image-display__footer--price">${price}</span>
              {discount ? (
                <span className="image-display__footer--discount">
                  ${discount}
                </span>
              ) : (
                <></>
              )}
            </p>
            {noShowRating ? (
              <></>
            ) : (
              <div className="image-display__footer--star-rating">
                {starRating === "three" ? (
                  <img src={three} alt="" />
                ) : starRating === "four" ? (
                  <img src={four} alt="" />
                ) : starRating === "four-and-half" ? (
                  <img src={fourHalf} alt="" />
                ) : (
                  <img src={five} alt="" />
                )}
                <span className="image-display__footer--votes">({votes})</span>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="div-flex">
              <span className="image-display__footer--price">${price}</span>
              {noShowRating ? (
                <></>
              ) : (
                <div className="image-display__footer--star-rating">
                  {starRating === "three" ? (
                    <img src={three} alt="" />
                  ) : starRating === "four" ? (
                    <img src={four} alt="" />
                  ) : starRating === "four-and-half" ? (
                    <img src={fourHalf} alt="" />
                  ) : (
                    <img src={five} alt="" />
                  )}
                  <span className="image-display__footer--votes">
                    ({votes})
                  </span>
                </div>
              )}
            </div>
            {colourSet === "1" ? (
              <div>
                <img src={colour1} alt="" />
              </div>
            ) : colourSet === "2" ? (
              <div>
                <img src={colour2} alt="" />
              </div>
            ) : colourSet === "3" ? (
              <div>
                <img src={colour3} alt="" />
              </div>
            ) : colourSet === "4" ? (
              <div>
                <img src={colour4} alt="" />
              </div>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
};

ItemDisplay.propTypes = {
  discount: PropTypes.string,
  percent: PropTypes.string,
  price: PropTypes.string,
  votes: PropTypes.string,
  label: PropTypes.string,
  starRating: PropTypes.string,
  addToCartButton: PropTypes.bool,
  product: PropTypes.any,
  colourSet: PropTypes.string,
};

export default ItemDisplay;
