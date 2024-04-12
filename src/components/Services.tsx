import './Services.css';
import Aos from 'aos';


function Services(){
    Aos.init();
    return(
        <>
         <section id="services">
            <div className='services'>
                <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">Education</h2>
                <div className='services-cards'>
                    <div className='services-card' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">
                    <i className='fa-solid fa-code' id="icon"></i>
                    <h3>B I T</h3>
                    <p>Vadodara, Gujarat</p>
                    <p>Certification in</p>
                    <p>Full Stack Web Development</p>
                    
                    <a href="#">
                        Read More <i className='fa-solid fa-arrow-right-long'></i>
                    </a>
                </div>
                <div className='services-card' data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
                    <i className="fa-solid fa-computer" id="icon"></i>
                    <h3>S R M University</h3>
                    <p>Chennai, Tamilnadu</p>
                    <p>Ongoing</p>
                    <p>Master of Computer Application</p>
                    
                    <a href="#">
                        Read More <i className='fa-solid fa-arrow-right-long'></i>
                    </a>
                </div>
                <div className='services-card' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000">
                    <i className="fa-solid fa-user-graduate" id="icon"></i>
                    <h3>Pune University</h3>
                    <p>Nashik, Maharashtra</p>
                    <p>Pursuing</p>
                    <p>Bachelor of Science</p>
                    
                    <a href="#">
                        Read More <i className='fa-solid fa-arrow-right-long'></i>
                    </a>
                </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default Services;