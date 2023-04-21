import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Experience = () => {
  return (
        <section id="experience">
          <p className="section__text__p1">Delve into my</p>
          <h1 className="title">Experience</h1>
          <div className="section--container">
          <KeyboardDoubleArrowDownIcon
          className="icon arrow"
          style={{ fontSize: '40px' }}
          onClick={() => { window.location.href='./#skills' }}
          />
          <div>
            <VerticalTimeline lineColor="#000">
              <VerticalTimelineElement
                className="vertical-timeline-element--education small-timeline-element"
                date="2014 - 2018"
                iconStyle={{ background: "#000", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                Bachelor's degree in electronics and industrial computing
                </h3>
                <p className="vertical-timeline-element-p"> Faculty of Sciences Dhar El Mahraz - Fez </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
              className="vertical-timeline-element--education small-timeline-element"
              date="2018 - 2020"
              iconStyle={{ background: "#000", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
              Master's degree in computer science : Signal Processing and Machine Learning
              </h3>
              <p className="vertical-timeline-element-p"> National School of Applied Sciences - Tetouan</p>
            </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work small-timeline-element"
                date="2020 - present"
                iconStyle={{ background: "#000", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                PhD student in computer science : Artificial intelligence
                </h3>

                <p className="vertical-timeline-element-p">Faculty of Sciences - Meknes</p>
              </VerticalTimelineElement>
      
            </VerticalTimeline>
          </div>

          </div>
        </section>
  );
}

export default Experience;



// <h4 className="vertical-timeline-element-subtitle">
// San 
// </h4>