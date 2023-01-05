import React from 'react';
import { useState } from 'react';

const ServiceContact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    const form = {
      name,
      email,
      subject,
      msg
   }

   console.log(form)

      const response = await fetch('/api/partnership',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })

      const content = await response.json();

      console.log(content)

      alert("Thanks for having interest to collaborate with us. We will get back to you soon.")

  }

  return (
    <>
      <div className="getin-touch-area-2 grey-bg-2 pt-130 pb-140">
        <div className="container">
          <h5 className="services-sm-title">Contact us</h5>
          <div className="row mt-55">
            <div className="col-xl-12">
              <div className="contact__form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-md-6">
                      <div className="contact__form-input">
                        <input id='name' value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-md-6">
                      <div className="contact__form-input">
                        <input id='email' value={email} onChange={e => setEmail(e.target.value)}  type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="contact__form-input">
                        <input id='subject' value={subject} onChange={e => setSubject(e.target.value)}  type="text" placeholder="Your Subject" />
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="contact__form-input">
                        <textarea id='msg' value={msg} onChange={e => setMsg(e.target.value)} placeholder="Write  Your Message"></textarea>
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="contact__btn">
                        <button type='submit' className="tp-solid-btn">Send your message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceContact;