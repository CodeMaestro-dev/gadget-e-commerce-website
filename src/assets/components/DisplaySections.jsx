import PropTypes from "prop-types";

import left from "/assets/icons/left.svg";
import right from "/assets/icons/right.svg";
import Button from "./Button";

const DisplaySections = ({
  children,
  className,
  section,
  title,
  timer,
  paddingEndOnController,
  scrollOption,
  buttonOption,
  buttonColor,
  buttonText,
  sectionColour,
  spanNone,
}) => {
  return (
    <div className="display-section">
      <div className="display-section__section">
        <span className={spanNone ? "display-none" : null}></span>
        <h2 className={sectionColour === "black" ? "text-black" : null}>{section}</h2>
      </div>
      <div className="display-section__title">
        <div className="display-section__title--timer">
          <h3>{title}</h3>
          {timer ? (
            <div className="timer">
              <div className="timer__digits">
                <span>Days</span>
                <span>03</span>
              </div>
              <span className="timer__divider">:</span>
              <div className="timer__digits">
                <span>Hours</span>
                <span>23</span>
              </div>
              <span className="timer__divider">:</span>
              <div className="timer__digits">
                <span>Minutes</span>
                <span>19</span>
              </div>
              <span className="timer__divider">:</span>
              <div className="timer__digits">
                <span>Seconds</span>
                <span>56</span>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        {scrollOption ? (
          <>
            {paddingEndOnController ? (
              <div className="display-section__title--controls pe-135px">
                <img src={left} alt="" />
                <img src={right} alt="" />
              </div>
            ) : (
              <div className="display-section__title--controls">
                <img src={left} alt="" />
                <img src={right} alt="" />
              </div>
            )}
          </>
        ) : buttonOption ? (
          <div>
            {
              buttonColor === "white" ? (
                <Button buttonColour="button-transparent">{buttonText}</Button>
              ) : (
                <Button buttonColour="button-reddish-brown">View All</Button>
              )
            }
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

DisplaySections.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  section: PropTypes.string,
  title: PropTypes.string,
  timer: PropTypes.bool,
  paddingEndOnController: PropTypes.bool,
  scrollOption: PropTypes.bool,
  buttonOption: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  sectionColour: PropTypes.string,
};

export default DisplaySections;
