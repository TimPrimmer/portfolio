import React from 'react';

function Contact(props) {

  return (
    <div id="contact-section">

      <div id="contact-box">
        <h2>Contact me</h2>

        <form id="contact-form">

          <div class="form-block">
            <label for="Name" class="form-text">Name</label>
            <div class="form-field">
              <input type="text" id="Name" name="Name" required />
            </div>
          </div>

          <div class="form-block">
            <label for="Email" class="form-text">Email</label>
            <div class="form-field">
              <input type="email" id="Email" name="Email" required />
            </div>
          </div>

          <div class="form-block">
            <label for="Message" class="form-text">Message</label>
            <div class="form-field">
              <textarea id="Message" name="Message" rows="6" maxlength="3000" required></textarea>
            </div>
          </div>

          <div class="form-block">
            <button type="submit" id="contact-button">Send Message</button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default Contact;