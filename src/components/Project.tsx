import './Project.css';
import Aos from 'aos';


function Project(datas:any){
    let data = datas.data;
    Aos.init();
    return(
        <>
            <section id="project">
                <div className='project'>
                    <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">Projects</h2>
                    <div className='project-cards'>
                        {/* {data.project.map((project: any, i: any) => ( */}
                            <div className='project-card' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="2500">
                                <img src="/smarttools.png" height={300} width={500}  alt="project-img" />
                                <div>
                                    <h4>{data.project[0].name}</h4>
                                    <p>{data.project[0].description}</p>
                                </div>
                            </div>
                            <div className='project-card' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="2500">
                                <img src="/hmids_logo.png" height={300} width={500}  alt="project-img" />
                                <div>
                                    <h4>{data.project[1].name}</h4>
                                    <p>{data.project[1].description}</p>
                                </div>
                            </div>
                        {/* ))} */}

                    </div>
                </div>
            </section>
        </>
    )
}
export default Project;