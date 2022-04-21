import React, { useRef } from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'


const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title"> Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone}
                         alt="" 
                         className="c-icon" 
                         />
                         +112345 455 75
                    </div>
                    <div className="c-info-item">
                        <img src={Email}
                         alt="" 
                         className="c-icon" 
                         />
                         contact@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address}
                         alt="" 
                         className="c-icon" 
                         />
                         245 King Street, Touterie Victoria 8520 Australia
                    </div>
                    
                </div>
            </div>
            <div className="c-right">
               <p className="c-desc">
                <b> what's your story?</b>Get in touch. Always available for
                    freelancing if the right project comes along. me.
               </p>

               <form ref={formRef} onSubmit={handleSubmit}>
                  <input type="text" placeholder="Name" name="user_name" />
                  <input type="text" placeholder="Subject" name="user_subject" />
                  <input type="text" placeholder="Email" name="user_email" />
                  <textarea type="text" placeholder="Message" name="message" />
                  <button>Submit </button>
               </form>
                
            </div>
        </div>
    </div>
  )
}

export default Contact