import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi, My name is{" "}
                <span className="different">Rampratap kashyap </span> and I am from{" "}
                <span className="different">
                 Gorakhpur {" "}
                </span>
                . I have completed my graduation in B.Tech (CS&E)
                from{" "}
                <span className="different">
                  Dr. A.P.J. Abdul Kalam Techinical University ,Lucknow (AKTU) .
                </span><br/>
                 High level experience in Website and  {" "}
                <span className="different">Single Page Application </span>
                development knowledge, producing quality work and maney more..
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                React js Developer [SPA] {" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Frontend Developer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber {" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
