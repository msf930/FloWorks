"use client"

import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/86988090-cdda-11ee-bb69-515451de93af";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <div className="contactSubmited">
        <div className="contactSubmitedTitle">Thank you!</div>
        <div className="contactSubmitedBody">We&apos;ll be in touch soon.</div>
      </div>
    );
  }

  return (
    <div className="contact">
        <div className="contactLeft">
            <div className="contactHeroTextContainer">
                <h2>Contact Us</h2>
                <p>
                    Don’t wait to enhance your plumbing solutions with our trusted expertise. 
                    Reach out to us now to schedule your service and discover the FloWorks difference. 
                    Your satisfaction is our priority, and we’re here to make your plumbing needs effortless and efficient.
                </p>
            </div>

        </div>
        <div className="contactRight">
            <div className="contactFormContainer">
                <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                className="contactForm"
                >
                <div className="contactNameContainer">
                    <h3>Name</h3>
                    <div className="nameContainer">
                        <div className="nameInputItem">
                            <input
                            type="text"
                            placeholder="First"
                            name="nameFirst"
                            className="contactInputName"
                            required
                            />
                        </div>
                        <div className="nameInputItem">
                            <input
                            type="text"
                            placeholder="Last"
                            name="nameLast"
                            className="contactInputName"
                            required
                            />
                        </div>
                    </div>
                </div>
                <div className="contactInputContainer">
                    <h3>Email</h3>
                    <div className="contactTextContainer">
                        <div className="textInputItem">
                            <input
                            type="email"
                            placeholder="you@gmail.com"
                            name="email"
                            className="contactInputText"
                            required
                            />
                        </div>
                    </div>
                </div>
                <div className="contactInputContainer">
                    <h3>Phone</h3>
                    <div className="contactTextContainer">
                        <div className="textInputItem">
                            <input
                            type="tel"
                            placeholder="111-111-1111"
                            name="phone"
                            className="contactInputText"
                            required
                            />
                        </div>
                    </div>
                </div>
                <div className="contactInputAreaContainer">
                    <h3>Message</h3>
                    <div className="contactTextAreaContainer">
                        <div className="textInputItem">
                            <textarea
                                placeholder="Your message"
                                name="message"
                                className="contactInputTextArea"
                                required
                                />
                        </div>
                    </div>
                </div>
                
                <div className="contactSubmitContainer">
                    <div></div>
                    <button
                    className="contactSubmitBtn"
                    type="submit"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactForm;