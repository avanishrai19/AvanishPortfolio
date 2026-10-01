import { useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, GitBranch, Mail, Send } from 'lucide-react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section-space section-border" id="contact">
      <div className="section-wrap">
        <div className="contact-heading">
          <p className="eyebrow section-eyebrow">06 / CONTACT</p>
          <h2 className="section-title">Let&apos;s talk about what you&apos;re building.</h2>
          <p>Open to conversations about projects, learning, and early-career opportunities.</p>
        </div>
        <div className="contact-layout">
          <aside className="contact-panel">
            <h3>Find me online</h3>
            <div className="contact-links">
              <a href="https://github.com/avanishrai19" rel="noreferrer" target="_blank">
                <span>
                  <GitBranch size={17} /> GitHub
                </span>
                <ArrowUpRight size={15} />
              </a>
              <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                <span>
                  <BriefcaseBusiness size={17} /> LinkedIn
                </span>
                <ArrowUpRight size={15} />
              </a>
              <a href="mailto:raiavanish657@gmail.com">
                <span>
                  <Mail size={17} /> raiavanish657@gmail.com
                </span>
                <ArrowUpRight size={15} />
              </a>
            </div>
            <p className="contact-note">
              Add your LinkedIn profile URL to make these contact details personal.
            </p>
          </aside>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-fields">
              <label>
                Name
                <input autoComplete="name" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input
                  autoComplete="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </label>
              <label className="message-field">
                Message
                <textarea
                  name="message"
                  placeholder="Tell me a little about it..."
                  required
                  rows="4"
                />
              </label>
            </div>
            {/* TODO: Connect this form to a backend or email service before accepting messages. */}
            <div className="form-footer">
              <button type="submit">
                Send message <Send size={14} />
              </button>
              <p aria-live="polite">
                {submitted
                  ? 'Thanks! This form is a preview and does not send messages yet.'
                  : 'Form preview · no backend connected'}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
