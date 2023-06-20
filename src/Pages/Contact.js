import React from 'react';
import '../Styles/Contact.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  return (


    <><section className='contactus'>
      <div className='content'>
        <h2>Contact Us</h2>
        <p> OJASWA : The official personality development club of S.G.S.I.T.S. Indore</p>
      </div>

      <div className='container1'>

        <div class='contactform2'>
          <form>
            <h2>Enter Details</h2>
            <div className='details-area'>
              <input type='text' placeholder='First Name' required="required" /><br />
              <input type='text' placeholder='Last Name' /><br />
              <input type='email' placeholder='Email' /><br />
              <input type='number' placeholder='Phone no.' /><br />
              <div className='msg-area'>
                <input type='message' placeholder='Message here...' /><br />
              </div>
              <button type='submit' placeholder='Submit'>Submit </button>
            </div>
          </form>

        </div>

        <div class='contactform1'>
          <div className='contactinfo'>
            <div className='box'>
              <div className='icon'><LocationOnIcon /></div>
              <div className='text1'>
                <h3>Address</h3>
                <p> 23 Sir M. Visvesvaraya Marg,<br />
                  Indore,<br /> Madhya Pradesh<br /> 452003
                </p>
              </div>
            </div>

            <div className='box'>
              <div className='icon'><PhoneIcon /></div>
              <div className='text1'>
                <h3>Phone </h3>
                <p>xxxx-xxx-xxxx</p>
              </div>
            </div>

            <div className='box'>
              <div className='icon'><EmailIcon /></div>
              <div className='text1'>
                <h3>Email</h3>
                <p>xxxxx@gmail.com</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section >
    </>
  );
};

export default Contact;