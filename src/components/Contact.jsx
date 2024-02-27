import React from 'react';
import '../styles/layouts/_contact.scss';
import msg_icon from '../assets/msg-icon.png';
import mail_icon from '../assets/mail-icon.png';
import phone_icon from '../assets/phone-icon.png';
import location_icon from '../assets/location-icon.png';
import white_arrow from '../assets/white-arrow.png';

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7844a461-b1e1-48ae-8d22-5c677d8f359c");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

    return (
        <div className='contact'>
            <div className="contact__col">
                <h3>Send us a message <img src={msg_icon} /> </h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, question, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />muxcanovparviz@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+1 123-456-78-90</li>
                    <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA 02129, United States</li> 
                </ul>
            </div>
            <div className="contact__col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label>Phone number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your message here!</label>
                    <textarea name="message" rows="5" placeholder='Enter your message' required ></textarea>
                    <button className='btn dark-btn' type='submit'>Submit now<img src={white_arrow}/></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
};

export default Contact;