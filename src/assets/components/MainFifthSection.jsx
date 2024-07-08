import TimeCircle from "./TimeCircle";
import Button from "./Button";

import jbl from "/assets/images/jbl.png";

const MainFifthSection = () => {
  return (
    <div className="main__fifth-section">
      <div className="main__fifth-section__container">
        <div className="main__fifth-section__container--content">
          <h3>Categories</h3>
          <h4>Enhance Your Music Experience</h4>
          <div>
            <TimeCircle number="23" text="Hours" />
            <TimeCircle number="05" text="Days" />
            <TimeCircle number="59" text="Minutes" />
            <TimeCircle number="35" text="Seconds" />
          </div>
          <Button buttonColour="button-green w-171px">Buy Now!</Button>
        </div>
        <div className="main__fifth-section__container--img">
          <img src={jbl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainFifthSection;
