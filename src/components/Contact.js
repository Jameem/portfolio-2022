import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()
  const [messageSent, setMessageSent] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.CONTACT_SERVICE_ID,
        process.env.CONTACT_TEMPLATE_ID,
        form.current,
        process.env.CONTACT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
          setMessageSent(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div className="edrea_tm_section hidden animated" id="contact">
      <div className="section_inner">
        <div className="edrea_tm_contact">
          <div className="edrea_tm_main_title">
            <h3>
              Get in <span className="coloring">Touch</span>
            </h3>
          </div>
          <div className="wrapper">
            <div className="left">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-location" />
                    <span>
                      <a href="#" className="href_location">
                        Avon str. 22, NYC, USA
                      </a>
                    </span>
                  </div>
                </li>

                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                      <a href="mailto:example@gmail.com">example@gmail.com</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-facebook-rect" />
                    <span>
                      <a href="https://www.facebook.com">@facebookNick</a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="fields">
                <form
                  ref={form}
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  onSubmit={sendEmail}
                >
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="first">
                    <ul>
                      <li>
                        <div className="list_inner">
                          <input
                            name="from_name"
                            type="text"
                            placeholder="Name"
                            autoComplete="off"
                            required
                          />
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <input
                            name="from_email"
                            type="text"
                            placeholder="Email"
                            autoComplete="off"
                            required
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      name="message"
                      placeholder="Message"
                      defaultValue={""}
                      required
                    />
                  </div>
                  {!messageSent ? (
                    <div className="edrea_tm_button">
                      <input
                        type="submit"
                        value="Send Message"
                        className="edrea_tm_button"
                      />
                    </div>
                  ) : (
                    <div className="returnmessage">
                      Your message has been sent successfully.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
