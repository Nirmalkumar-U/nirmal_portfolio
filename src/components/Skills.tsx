import './Skills.css';
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiNodejs,
    DiAngularSimple 
} from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import Aos from "aos";
import { SiDotnet,SiTypescript ,SiPowerbi  } from "react-icons/si";
import { TbSql,TbBrandGooglePodcasts } from "react-icons/tb";


function Skills(datas:any) {
    Aos.init();
    let data = datas.data;
    return (
        <>
            <section id="skills">
                <div className="skills">
                    <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">Professional Skills</h2>
                    <div className="skill-cards">
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
                            <DiAngularSimple />
                            <p className="tech-name">{data.skills.angular.name}</p>
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="900">
                            <SiTypescript  />
                            <p className="tech-name">{data.skills.typescript.name}</p>
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">
                            <DiNodejs />
                            <p className="tech-name">{data.skills.nodejs.name}</p>
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
                            <SiDotnet />
                            <p className="tech-name">{data.skills.dotnet.name}</p>
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000">
                            <SiPowerbi  />
                            <p className="tech-name">{data.skills.powerbi.name}</p>
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000">
                            <TbSql  />
                            <p className="tech-name">{data.skills.sql.name}</p>
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">
                            <DiHtml5 />
                            <p className="tech-name">{data.skills.html.name}</p>
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">
                            <DiCss3 />
                            <p className="tech-name">{data.skills.css.name}</p>
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
                            <DiJavascript1 />
                            <p className="tech-name">{data.skills.javascript1.name}</p>
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">
                            <FaBootstrap />
                            <p className="tech-name">{data.skills.bootstrap.name}</p>
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1100">
                            <SiVisualstudiocode />
                            <p className="tech-name">{data.skills.visualStudio.name}</p>
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1100">
                            <TbBrandGooglePodcasts className='rotate-icon' />
                            <p className="tech-name">{data.skills.projectIdx.name}</p>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}
export default Skills;