import './Nav.css';
import Aos from 'aos';

function Nav(datas:any) {
    Aos.init();
    let data = datas.data;
    return (
      <>
        <section>
          <header className="header">
            <div className="logo" data-aos="fade" data-aos-duration="1500">
              <h2><span>{data.firstName}</span> {data.lastName}</h2>
            </div>
            <div className="nav">
              <a href="#home" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200">Home</a>
              <a href="#about" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300">About Me</a>
              <a href="#skills" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400">Skills</a>
              <a href="#services" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500">Education</a>
              <a href="#project" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600">Projects</a>
              <a href="#contact" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="700">Contact</a>
            </div>
          </header>
        </section>
      </>
    );
  };
  
export default Nav;