import React, {  useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import { BiMailSend } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r39hg8y', 'template_jiijz5f', form.current, 'hnloCKDERYtxojPBn')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <BiMailSend className='contact__option-icon' />
            <h4>Email</h4>
            <h5>anbarasanj24@gmail.com</h5>
            <a href="mailto:anbarasanj24@gmail.com" target='_blank' rel="noreferrer">Send a email</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='.contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+971 521157855</h5>
            <a href="https://api.whatsapp.com/?send?phone=+971521587915"
              target='_blank' rel="noreferrer">Send a quick message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" id="message" rows="7" placeholder='Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact