import './Education.css';
import Aos from 'aos';


function Education(datas:any){
    Aos.init();
    let data = datas.data
    return(
        <>
         <section id="services">
            <div className='services'>
                <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">Education/Certification</h2>
                <div className='services-cards'>
                {data.education.map((edu:any, i:any) => (
                    <div className='services-card' data-aos="fade" data-aos-duration="1500" data-aos-delay="500" key={i}>
                        <i className={edu.css} id="icon"></i>
                        <h3>{edu.certificateName}</h3>
                        <p>{edu.organisation}</p>
                        <p>{edu.address}</p>
                        <p>Percentage: {edu.CGP}</p>
                    </div>
                ))}
                </div>
            </div>
         </section>
        </>
    )
}
export default Education;