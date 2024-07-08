import PropTypes from "prop-types";

const Category = ({ text, active, children }) => {
  return (
    <div className="category">
      {active ? (
        <div className="category__active">
          {children}
          <p>{text}</p>
        </div>
      ) : (
        <div className="category__non-active">
          {children}
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

Category.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.any
};

export default Category;
