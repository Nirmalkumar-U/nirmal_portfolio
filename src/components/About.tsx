import './About.css';
import Aos from 'aos';


function About(datas:any) {
    Aos.init();
    let data =datas.data;
    return (
        <>
            <section id="about">
                <div className='about'>
                    <div className='about-info'>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400">About me</p>
                        <h2 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">{data.firstName} {data.lastName}</h2>
                        <h3 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="800">Hi, I am <span>{data.designation}</span></h3>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000">{data.aboutMe}</p><br></br>
                        {/* <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1100">I'm also a strong believer in the importance of accessibility and usability. I always strive to create web applications that are accessible to everyone, regardless of their device or ability.</p> */}
                        <a href="./Nirmalkumar-Resume.pdf" target="_blank"><button data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1200">Download CV</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;

