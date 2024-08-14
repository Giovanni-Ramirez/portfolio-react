import { useForm, ValidationError } from '@formspree/react';
import '../assets/css/contact.css'

function Contact () {
    const [state, handleSubmit] = useForm("mldrnbbj");
    if (state.succeeded) {
        return <p>Thanks Hopfully we will be in Contact!</p>;
    }
    return (
        <section className='contact d-flex justify-content-center align-items-center'>
            <div className='formContainer'>
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit} >
                    <div className='mb-3'>
                        <label htmlFor="yourName" className="form-label">Your Name</label>
                        <input id="yourName" type="text" name="yourName" className="form-control"/>    
                        <ValidationError prefix="YourName" field="yourName" errors={state.errors}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input id="email" type="email" name="email" className="form-control"/>    
                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input id="phoneNumber" type="tel" name="phoneNumber" className="form-control"/>    
                        <ValidationError prefix="Number" field="phoneNumber" errors={state.errors}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="company" className="form-label">Your Company</label>
                        <input id="company" type="text" name="company" className="form-control"/>    
                        <ValidationError prefix="Company" field="company" errors={state.errors}/>
                    </div>
                    <div className='mb-3'>
                        <textarea id="message" name="message" className="form-control text-area"/>
                        <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        <button id='submitButton' type="submit" disabled={state.submitting}>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;