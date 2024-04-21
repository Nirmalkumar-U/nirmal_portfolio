import './Header.css';
import Aos from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header(datas:any){
    Aos.init();
    let data = datas.data;
    return(
        <>
            <section id="home">
                <div className='hero'>
                    <div className='hero-info'>
                        <h1 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000">Hi, I am <span>{data.firstName} {data.lastName}</span></h1>
                        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1100">Do the best you can until you know better . . .</p>
                        <div className='social-icons'>
                            <a href={data.instagramUrl} target='_blank'><i className='fa-brands fa-instagram' data-aos="fade" data-aos-duration="1500" data-aos-delay="1200"></i></a>
                            {/* <a href="#"><i className='fa-brands fa-facebook' data-aos="fade" data-aos-duration="1500" data-aos-delay="1300"></i></a> */}
                            <a href={data.linkedinUrl} target='_blank'><i className='fa-brands fa-linkedin' data-aos="fade" data-aos-duration="1500" data-aos-delay="1400"></i></a>
                            <a href={data.gitHubUrl} target='_blank'><i className='fa-brands fa-github' data-aos="fade" data-aos-duration="1500" data-aos-delay="1500"></i></a>
                        </div>
                        <div className='hero-btns'>
                            <a href="#skills"><button data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1600">My Skills</button></a>
                            <a href="#contact"><button data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1700">Contact me</button></a>
                        </div>
                    </div>
                    <div className='hero-img' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1800">
                        <img src="/nirmal_pic.jpg" alt="hero-img"/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header;