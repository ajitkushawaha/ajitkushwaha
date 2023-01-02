import React from 'react'
import './contact.css'
import { ImUsers } from "react-icons/im";

const Contact = ()=> {
  return (
   <section id="contact-section">
      <div className="contact__cont">
          <div className="contact__titles">
            <ImUsers className="contactIcon"/>
             <h3 className="titles">Contact</h3>
             <p className="pera">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, similique dolores blanditiis unde velit ea sit culpa cumque laudantium, atque facilis deserunt quas! Officia autem deserunt repellat velit, eaque ullam.</p>
          </div>
          <div className="address">
            <div className="map__add">
                <iframe id="map" height="400px" width="500px" src="https://www.bing.com/maps/embed?h=400&w=500&cp=26.889722369198616~75.63142776489258&lvl=17&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
                </iframe>
            </div>
            <div className="cotact__form">
              <form action="post" className='contact__form'>
                <input type="text" name="name" placeholder="Name" required/>
                <input type="text" name="Email" placeholder="Email" required/>
                <input type="text" name="Subject" placeholder="Subject" required/>
                <textarea rows="7" className='textArea' placeholder='message'></textarea>
                <div className="form__btn">
                <button>Send</button>
                </div>
              </form>
            </div>
          </div>
      </div>
   </section>
  )
}

export default Contact