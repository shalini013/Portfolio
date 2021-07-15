import "./intro.scss";
import ITyped from "react-ityped";

function Intro() {
  const strings = [
    "Developer",
    "Content Creator",
    "Designer"
  ];
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi ,There i'm </h2>
          <h1>Shalini Rajput</h1>
          <h3>
            Freelancer
            <span>
              <ITyped
                className="container ityped-cursor"
                showCursor={false}
                strings={strings}
                backSpeed={60}
                backDelay={1500}
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
