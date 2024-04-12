import './Footer.css';

function Footer(datas:any) {
    let data = datas.data;
    return (
        <>
            <section>
                <div className='footer'>
                    <div className='links' data-aos="fade" data-aos-duration="1500" data-aos-delay="100">
                        <h1>{data.firstName} {data.lastName}</h1>
                        <div>
                            <p>Do the best you can until you know better...</p>
                            <div className='social'>
                                <a href={data.linkedinUrl} target='_blank'><i className='fa-brands fa-linkedin-in'></i></a>
                                {/* <i className='fa-brands fa-facebook-f'></i> */}
                                <a href={data.instagramUrl} target='_blank'><i className='fa-brands fa-instagram'></i></a>
                                <a href={data.gitHubUrl} target='_blank'><i className='fa-brands fa-github'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='links' data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#services">Education</a>
                            </li>
                            <li>
                                <a href="#project">Projects</a>
                            </li>
                        </ul>
                    </div>
                    <div className='links' data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
                        <h3>Information</h3>
                        <ul>
                            <li>
                                <a href="#">Membership</a>
                            </li>
                            <li>
                                <a href="#">Privacy & Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms & Condition</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer;