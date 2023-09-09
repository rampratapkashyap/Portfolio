import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          {/* <VerticalTimelineElement
            date={"Dec 2023 - Feb 2024"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              ..............Pvt. Ltd.
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              React js Developer (Full Time)
            </h4>
            <p data-aos="fade-right">
              Html ,Css ,Javascript ,React js ,Bootstrap ,Git ,Jira
            </p>
          </VerticalTimelineElement> */}
          <VerticalTimelineElement
            date={"May 2022 - Nowaday"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              RAZORSE Software Pvt. Ltd.
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              React js Developer (Full Time)
            </h4>
            <p data-aos="fade-right">
              Html ,Css ,Javascript ,React js ,Bootstrap ,Git ,Jira
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Feb 2021 - May 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Softmind Infotech Pvt. Ltd.
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              React js Developer (Full Time)
            </h4>
            <p data-aos="fade-right">
              Html ,Css ,Javascript ,React js ,Bootstrap ,Tailwind Css ,Material Ui
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Sep 2020 - Dec 2020"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              PrimeZone Infotech Pvt. Ltd.
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Web Developer (Intern)
            </h4>
            <p data-aos="fade-right">
              Html ,Css ,Javascript
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"2016 - 2020"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [BTech. (CS&E)]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Dr. A.P.J.Abdul Kalam Techinical University ,Lucknow (AKTU)
            </h4>
            <p data-aos="fade-right">
              Studied Computer science Engineering which consists of all the
              subjects accross all engineering and CS&E streams.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"2016"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [SSC (Math)]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Maharana Pratap Inter College, Civil Line, Gorakhpur (MPIC)
            </h4>
            <p data-aos="fade-right">
              Studied 12th Science and Passed with 70 Percentage.

            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"2014"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [HSC (Science)]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Maharana Pratap Inter College, Civil Line, Gorakhpur (MPIC)
            </h4>
            <p data-aos="fade-right">
              Studied 10th Science and Passed with 72 Percentage.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
