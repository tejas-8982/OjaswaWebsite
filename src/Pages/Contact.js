import React from 'react';
import '../Styles/Contact.css';
const Contact = () => {
  return (
    <div className='container'>
    <h1>Contact us</h1>
      <div className='form'>
        <form>
          <input type='text' placeholder='Name' /><br />
          <input type='email' placeholder='Email' /><br />
          <input type='number' placeholder='Phone' /><br />
          <input type='text' placeholder='Message' className='textarea'/><br />
          <input type='submit' value='Submit' />
        </form>
      </div>
      <div className='map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1185.3889007891798!2d75.86992955228132!3d22.725417455953142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd207d998231%3A0x3567dbee7cdafff1!2sStudent%20Activity%20Centre%20(SAC)!5e0!3m2!1sen!2sin!4v1686303470275!5m2!1sen!2sin"
          width="300"
          height="200"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
