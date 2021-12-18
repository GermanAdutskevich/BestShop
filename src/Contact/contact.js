import "./main.scss";
import React from "react";

function Contact() {
    return (
      <section className="section_contact">
        <div className="contact_container">
          <div className="contact_info">
            <h3 className="contact_h3">Any questions?</h3>
            <p className="contact_text">Leave your email address or call us!</p>
            <div className="contact_mail_and_num">
              <p className="contact_email">info@bestshop.xyz</p>
              <p className="contact_num">123 456 789</p>
            </div>
          </div>
          <div className="contact_form">
            <form>
              <label for="name" className="form_title">
                Name
              </label>
              <br />
              <input type="text" id="name" name="name" />
              <br />
              <label for="email" className="form_title">
                Email
              </label>
              <br />
              <input type="email" id="email" name="email" />
              <div className="consent_check">
                <label class="checkbox_container">
                    <input type="checkbox"/>
                    <span class="contact_checkmark"></span>
                  </label>
                <label for="agree" className="contact_consent">
                  I hereby give consent for my personal data included in my
                  application to
                  <br /> be processed for the purposes of the recruitment
                  process under the
                  <br /> European Parliament's and Council of the European Union
                  Regulation
                  <br /> on the Protection of Natural Persons as of 27 April
                  2016, with regard to
                  <br /> the processing of personal data and on the free
                  movement of such data,
                  <br /> and repealing Directive 95/46 / EC (Data Protection
                  Directive)
                </label>
              </div>
              <p className="contact_send">
                <input type="submit" value="Send" className="contact_submit" />
              </p>
            </form>
          </div>
        </div>
      </section>
    );
}

export default Contact;