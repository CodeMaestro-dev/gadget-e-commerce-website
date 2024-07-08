import ps5 from "/assets/images/ps5.png";
import woman from "/assets/images/woman.png";
import threeSpeakers from "/assets/images/three-speakers.png";
import perfume from "/assets/images/perfume.png";
import DisplaySections from "./DisplaySections";

const MainSeventhSection = () => {
  return (
    <div className="main__seventh-section">
      <DisplaySections
        className="main__seventh-section--grid"
        section="Featured"
        title="New Arrival"
        timer={false}
        paddingEndOnController={false}
        scrollOption={false}
        buttonOption={false}
      >
        <div className="main__seventh-section--grid--left">
          <img src={ps5} alt="" />
          <div className="description w-242px">
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <p className="text-underline">Shop Now</p>
          </div>
        </div>
        <div className="main__seventh-section--grid--right">
          <div className="main__seventh-section--grid--right--first">
            <img src={woman} alt="" />
            <div className="description w-255px">
              <h3>Women’s Collections</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <p className="text-underline">Shop Now</p>
            </div>
          </div>
          <div>
            <div className="main__seventh-section--grid--right--second">
              <img src={threeSpeakers} alt="" />
              <div className="description w-191px">
                <h3>Speakers</h3>
                <p>Amazon wireless speakers</p>
                <p className="text-underline">Shop Now</p>
              </div>
            </div>
            <div className="main__seventh-section--grid--right--third">
              <img src={perfume} alt="" />
              <div className="description w-191px">
                <h3>Perfume</h3>
                <p>GUCCI INTENSE OUD EDP</p>
                <p className="text-underline">Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </DisplaySections>
    </div>
  );
};

export default MainSeventhSection;
