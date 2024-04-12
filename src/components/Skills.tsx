import './Skills.css';
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
} from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiVisualstudiocode, SiExpress } from "react-icons/si";
import Aos from "aos";


function Skills() {
    Aos.init();
    return (
        <>
            <section id="skills">
                <div className="skills">
                    <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">Professional Skills</h2>
                    <div className="skill-cards">
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">
                            <CgCPlusPlus />
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
                            <DiHtml5 />
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">
                            <DiCss3 />
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
                            <DiJavascript1 />
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">
                            <FaBootstrap />
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
                            <DiReact />
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">
                            <DiNodejs />
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="900">
                            <SiExpress />
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000">
                            <DiMongodb />
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1100">
                            <SiVisualstudiocode />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills;