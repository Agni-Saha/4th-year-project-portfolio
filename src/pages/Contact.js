import React, { useState } from 'react'

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const NameChange = (event) => {
        setName(event.target.value)
    }
    const EmailChange = (event) => {
        setEmail(event.target.value)
    }
    const MessageChange = (event) => {
        setMessage(event.target.value)
    }

    const FormSubmit = (event) => {
        event.preventDefault()
        console.log(name, email)
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div>
            <div className="my-5">
                <h1 className="text-center page-header">Contact Me</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 col-10 mx-auto">
                                <form onSubmit={FormSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1"
                                            className="form-label">
                                            Name
                                        </label>
                                        <input type="text" className=""
                                            id="exampleFormControlInput1"
                                            name="name"
                                            value={name}
                                            onChange={NameChange}
                                            placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput2"
                                            className="form-label">
                                            Email
                                        </label>
                                        <input type="email" className=""
                                            id="exampleFormControlInput2"
                                            name="email"
                                            value={email}
                                            onChange={EmailChange}
                                            placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1"
                                            className="form-label">
                                            Message
                                        </label>
                                        <textarea className=""
                                            id="exampleFormControlTextarea1"
                                            name="message"
                                            value={message}
                                            onChange={MessageChange}
                                            rows="3">
                                        </textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn-submit" type="submit">Submit form</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 col-10 mx-auto mb-5 personal_contact">
                                <div className="contact-info text-center">
                                    <h2 className="contact-column-heading">
                                        Contact Links
                                    </h2>
                                    <ul>
                                        <li><a href="#filluplater">
                                            <span className="icon">
                                                <i className="fas fa-phone-alt"></i>
                                            </span>
                                            <span className="text">+91 834 698 3581</span>
                                        </a></li>
                                        <li><a href="#filluplater">
                                            <span className="icon">
                                                <i className="far fa-envelope"></i>
                                            </span>
                                            <span className="text">agnisaha337599@gmail.com</span>
                                        </a></li>
                                        <li><a href="#filluplater">
                                            <span className="icon">
                                                <i className="fas fa-location-arrow"></i>
                                            </span>
                                            <span className="text">Kolkata, West Bengal, India</span>
                                        </a></li>
                                    </ul>
                                </div>
                                <div className="social-info">
                                    <h2 className="contact-column-heading">
                                        Social Links
                                    </h2>
                                    <ul>
                                        <li><a href="https://www.facebook.com/">
                                            <i className="fab fa-facebook-f"></i>
                                        </a></li>
                                        <li><a href="https://www.twitter.com/">
                                            <i className="fab fa-twitter"></i>
                                        </a></li>
                                        <li><a href="https://www.instagram.com/">
                                            <i className="fab fa-instagram"></i>
                                        </a></li>
                                        <li><a href="https://co.linkedin.com/">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
