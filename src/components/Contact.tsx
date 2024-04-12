import './Contact.css';
import Aos from 'aos';


function Contact() {
  Aos.init();
  return (
    <>
      <section id="contact">
                <div className='contact'>
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">Contact Me</h2>
                        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">For more information contact me</p>
                    </div>
                    <form data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000">
                        <label>Name : </label>
                        <input type="text" placeholder='Enter Name' id="name" required />
                        <label>Email : </label>
                        <input type="text" placeholder='Enter Email' id="email" required />
                        <label>Message : </label>
                        <input type="text" placeholder='Message' id="message" />
                        
                        <button>Submit</button>
                    </form>
                </div>
           </section>
    </>
  );
}
export default Contact;