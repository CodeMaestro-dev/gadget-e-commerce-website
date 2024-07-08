const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__main-text">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="text-underline">ShopNow</span></p>
      </div>
      <select name="language" id="language" className="banner__language-dropdown">
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
      </select>
    </div>
  )
}

export default Banner
