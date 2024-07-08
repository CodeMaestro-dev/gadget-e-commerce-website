import chevronRight from "/assets/icons/chevron-right.svg";

const MainNavbar = () => {
  return (
    <ul className="main__first-section__nav">
      <li>
        {" "}
        <span>Woman’s Fashion</span> <img src={chevronRight} alt="" />
      </li>
      <li>
        {" "}
        <span>Men’s Fashion</span> <img src={chevronRight} alt="" />
      </li>
      <li>Electronics</li>
      <li>Home & Lifestyle</li>
      <li>Medicine</li>
      <li>Sports & Outdoor</li>
      <li>Baby’s & Toys</li>
      <li>Groceries & Pets</li>
      <li>Health & Beauty</li>
    </ul>
  );
};

export default MainNavbar;
