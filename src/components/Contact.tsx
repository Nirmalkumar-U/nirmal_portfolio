import './Contact.css';
import Aos from 'aos';


function Contact(datas:any) {
  let data = datas.data;
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
            <h3>{data.firstName}{data.lastName}</h3>
            <label>Phone Number : </label>
            <h3>{data.phone}</h3>
            <label>Email : </label>
            <h3>{data.email}</h3>
            <label>Address : </label>
            <h3>{data.address}</h3>
          </form>
        </div>
      </section>
    </>
  );
}
export default Contact;