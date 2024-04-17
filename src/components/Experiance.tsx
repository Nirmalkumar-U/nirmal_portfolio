import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "./timelineExperience.css"
import Badge from "react-bootstrap/Badge";


function Experiance(datas:any) {
    let data = datas.data;
    let work = <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2"
    iconStyle={{
      background: "#AE944F",
      color: "#fff",
      textAlign: "center",
    }}
    icon={<i className="fab fa-angular experience-icon"></i>}
    key="1"
  >
    <div style={{ textAlign: "left", marginBottom: "4px" }}>
        <Badge pill className="main-badge mr-2 mb-2" key="1">
            badge 1
        </Badge>
    </div>
    <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
      HMID
    </h3>
    <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
      ByteForza
    </h4>
    <div style={{ textAlign: "left", marginTop: "15px" }}>
        <Badge pill className="main-badge mr-2 mb-2" key="1">
        badge 2
        </Badge>
    </div>
  </VerticalTimelineElement>
    console.log(data);
  return (
    <div className="row">
        <section id="resume" className="pb-5">
        <div className="col-md-12 col-lg-12 col-12 col-sm-12 col-xs-12 mx-auto">
          <div className="">
            <h1 className="section-title" style={{ color: "White" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                Experiance
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 col-lg-8 col-8 col-sm-8 col-xs-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
}

export default Experiance;
