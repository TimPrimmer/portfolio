import React from 'react';

function Contact(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("Name").value;
    let message = document.getElementById("Message").value;
    // action="mailto:timprimmer@gmail.com?subject=Reaching out to you via your portfolio site" method="post" encType="text/plain"
    console.log("ahh");
    window.open(`mailto:timprimmer@gmail.com?subject=${name} - Reaching out to you via your portfolio site&body=${message}`);
  }

  return (
    <div id="contact-section">

      <div id="contact-box">
        <h2>Contact me</h2>

        <form id="contact-form" onSubmit={handleSubmit}>

          <div className="form-block">
            <label htmlFor="Name" className="form-text">Name</label>
            <div className="form-field">
              <input type="text" id="Name" name="Name" required />
            </div>
          </div>

          <div className="form-block">
            <label htmlFor="Email" className="form-text">Email</label>
            <div className="form-field">
              <input type="email" id="Email" name="Email" required />
            </div>
          </div>

          <div className="form-block">
            <label htmlFor="Message" className="form-text">Message</label>
            <div className="form-field">
              <textarea id="Message" name="Message" rows="6" maxLength="3000" required></textarea>
            </div>
          </div>

          <div className="form-block">
            <button type="submit" id="contact-button">Send Message</button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default Contact;