import './contact.scss';
import {useState} from 'react';

function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
        
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" />

            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} >
                    <input type="email" placeholder='Email' />
                    <textarea placeholder='message'></textarea>
                    <button type='submit'>Send</button>
                </form>
                {message ? <span>"I'll reply ASAP"</span>: ''}
            </div>
        </div>
    )
}

export default Contact;
