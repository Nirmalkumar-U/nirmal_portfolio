import './Nav.css';
import Aos from 'aos';



function Nav() {
    Aos.init();

    // let [navbar, setNavbar] = useState({ height: 0, padding: 0 })

    // const activeNav = () => {
    //     if (navbar.height === 0) {
    //         setNavbar({ height: "250px", padding: "20px" })
    //     }
    //     else {
    //         setNavbar({ height: 0, padding: 0 })
    //     }
    // }
    return (
        <>
            <section>
                <header className="header">
                    <div className="logo" data-aos="fade" data-aos-duration="1500">
                        <h2>S.<span>Urmila</span></h2>
                    </div>
                    <div className="nav">
                        <a href="#home" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200">Home</a>
                        <a href="#about" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300">About Me</a>
                        <a href="#skills" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400">Skills</a>
                        <a href="#services" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500">Education</a>
                        <a href="#project" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600">Projects</a>
                        <a href="#contact" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="700">Contact</a>
                    </div>
                    {/* <div className="bars" onClick={activeNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> */}
                </header>
            </section>
        </>
    );
};
export default Nav;