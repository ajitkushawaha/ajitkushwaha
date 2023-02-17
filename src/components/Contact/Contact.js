import React from 'react'
import './contact.css'
import { ImUsers } from "react-icons/im";
import { useState } from 'react';

const Contact = ()=> {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

const handleSubmit =(event)=>{
     event.preventDefault();
}

  return (
   <section id="contact-section">
      <div className="contact__cont">
          <div className="contact__titles">
            <ImUsers className="contactIcon"/>
             <h3 className="titles">Contact</h3>
             <p className="pera"> Feel free to reach out to me using the following contact details:
             </p>
          </div>
          <div className="address">
            {/* <div className="map__add">
                <iframe id="map" height="400px" width="500px" src="https://www.bing.com/maps/embed?h=400&w=500&cp=26.889722369198616~75.63142776489258&lvl=17&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
                </iframe>
            </div> */}
            <div className="cotact__form" >
              <form action="post" className="contact__form" onSubmit={handleSubmit}>
                <input type="text" value={name}  placeholder="Name" required onChange={((e)=> setName(e.target.value))}/>
                <input type="text" value={email}  placeholder="Email" required onChange={((e)=> setEmail(e.target.value))}/>
                <input type="text" value={subject}  placeholder="Subject" required onChange={((e)=> setSubject(e.target.value))}/>
                <textarea rows="7" value={message} className="textArea" placeholder="message" onChange={((e)=> setMessage(e.target.value))}></textarea>
                <div className="form__btn">
                <button type='submit'>Send</button>
                </div>
              </form>
            </div>
          </div>
      </div>
   </section>
  )
}

export default Contact