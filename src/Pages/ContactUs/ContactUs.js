/* eslint-disable no-script-url */
import React, { Component } from 'react';
import Nav from '../../components/Navigation/Navigation'
import './ContactUs.css';
import Background from './contact-us.jpg';
import Email from '../../services/email';

class ContactUs extends Component {
    sendEmail = (e) => {
        e.preventDefault()
        const firstName = document.getElementById('first-name')
        const lastName = document.getElementById('last-name')
        const email = document.getElementById('email')
        const comment = document.getElementById('comment')
        let emailer = new Email();
        emailer.post({
            'first_name': firstName.value,
            'last_name': lastName.value,
            'email': email.value,
            'comment': comment.value
        }).then(() => {
            // alert('Emailed!');
            document.getElementById('error-message').innerHTML = 'Emailed!'
            // document.getElementById('error-message').style.display = 'block'
        }).catch((err) => {
            if (err.response) {
                document.getElementById('error-message').innerHTML = err.response.data.error
                // document.getElementById('error-message').style.display = 'block'
            }
        })
        document.getElementById('error-message').innerHTML = 'Emailing!'
        document.getElementById('error-message').style.display = 'block'
    }

    checkEmailValidity = (e) => {
        const email = e.target.value
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            e.target.setCustomValidity("");
        } else {
            e.target.setCustomValidity("Invalid email!");
        }
    }

    render() {
        return (
            <React.Fragment>
                <Nav />
                <div className="contact-us">
                    <div className="wrapper" style={{ backgroundImage: `url(${Background})` }}>
                        <div className="contact__container">
                            <div className="contact__title">
                                <h2>Contact us<hr /></h2>
                            </div>

                            <form action="#" onSubmit={this.sendEmail} className="contact__form">
                                <p>First Name</p>
                                <input required name="firstName" id="first-name" className="contact__form-input" type="text" />

                                <p>Last Name</p>
                                <input required name="lastName" id="last-name" className="contact__form-input" type="text" />

                                <p>Email</p>
                                <input required name="email" id="email" onChange={this.checkEmailValidity} className="contact__form-input" type="text" />

                                <p>Comment</p>
                                <textarea required name="comment" id="comment" className="contact__form-textarea" type="text"></textarea>

                                <input type="submit" value="Email" />
                                <h2 id="error-message">Error</h2>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactUs;