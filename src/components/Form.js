import React from 'react';
import emailjs from 'emailjs-com';
import './Form.css';



export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID , 
                process.env.REACT_APP_TEMPLATE_ID, 
                e.target, 
                process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                alert('Your mail is sent!');
            }, (error) => {
                console.log(error.text);
                alert('FAILED!' + error);
            }
        );
        e.target.reset();
    }

    return (
            <form className="contact-form" onSubmit={sendEmail}>
                <input className="input" type="hidden" name="contact_number" placeholder="Name" />
                    {/* <label>Name</label> */}
                    <input type="text" name="name" placeholder="Name" required/>
                    <input type="email" name="email" placeholder="Email" required />
        
                    <textarea className="input msg" name="message" placeholder="Message" required />

                    <input className="button" type="submit" value="Let's Talk"  />
            </form>
    );
}



