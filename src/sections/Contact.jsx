import { useState } from 'react';
import './Contact.css';
import { siteContact, socialProfiles } from '../siteConfig.js';

const initialFormValues = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address, such as name@example.com.';
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please add a subject.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please write a message.';
  }

  return errors;
}

function FieldError({ id, message }) {
  if (!message) {
    return null;
  }

  return (
    <span className="contact__field-error" id={id}>
      {message}
    </span>
  );
}

export default function Contact() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [preparedMailto, setPreparedMailto] = useState('');
  const whatsappMessage =
    'Hello Akash, I visited your portfolio and would like to connect with you.';
  const emailMessage =
    'Hello Akash, I visited your portfolio and would like to connect with you.';
  const whatsappUrl = siteContact.whatsappNumber
    ? `https://wa.me/${siteContact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : '';
  const emailUrl = siteContact.email
    ? `mailto:${siteContact.email}?subject=${encodeURIComponent('Contact from Portfolio Website')}&body=${encodeURIComponent(emailMessage)}`
    : '';

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }));
    setFeedback(null);
    setPreparedMailto('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);
    setFeedback(null);
    setPreparedMailto('');

    if (Object.keys(validationErrors).length > 0) {
      setFeedback({
        type: 'error',
        message: 'Please correct the highlighted fields before continuing.',
      });
      return;
    }

    if (!siteContact.email) {
      setFeedback({
        type: 'error',
        message: 'Email delivery is not configured. Please use another contact method.',
      });
      return;
    }

    const subject = encodeURIComponent(formValues.subject.trim());
    const body = encodeURIComponent(
      `${formValues.message.trim()}\n\nFrom: ${formValues.fullName.trim()}\nReply-to: ${formValues.email.trim()}`,
    );

    setPreparedMailto(`mailto:${siteContact.email}?subject=${subject}&body=${body}`);
    setFeedback({
      type: 'info',
      message:
        'Your email app can open a prepared message. It has not been sent; review it and send it from your email app.',
    });
  }

  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact__inner">
        <header className="contact__header">
          <p className="contact__eyebrow">GET IN TOUCH</p>
          <h2 className="contact__title" id="contact-title">
            Let's <span>Connect!</span>
          </h2>
          <p className="contact__intro">
            Have a question or want to talk about a project? Reach out by email
            or prepare a message using the form.
          </p>
        </header>

        <div className="contact__layout">
          <div className="contact__details">
            <h3>Contact details</h3>
            <p className="contact__details-intro">
              Choose a direct link, or use the form to prepare an email.
            </p>

            <div className="contact__actions" aria-label="Direct contact options">
              {whatsappUrl && (
                <a
                  className="contact__action contact__action--whatsapp"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Akash on WhatsApp"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12.04 2a9.78 9.78 0 0 0-8.38 14.86L2.2 21.8l5.08-1.33A9.83 9.83 0 1 0 12.04 2Zm0 17.96a8.08 8.08 0 0 1-4.12-1.13l-.3-.18-3.01.79.8-2.94-.2-.31A8.08 8.08 0 1 1 12.04 19.96Zm4.43-6.05c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
                  </svg>
                  <span>
                    <small>QUICK CHAT</small>
                    <strong>WhatsApp</strong>
                  </span>
                  <span className="contact__action-arrow" aria-hidden="true">↗</span>
                </a>
              )}

              {emailUrl && (
                <a
                  className="contact__action contact__action--email"
                  href={emailUrl}
                  aria-label="Send Akash an email"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-.4 2L12 12.05 4.4 6h15.2ZM4 18V7.8l7.45 5.96a.85.85 0 0 0 1.1 0L20 7.8V18H4Z" />
                  </svg>
                  <span>
                    <small>SEND A MESSAGE</small>
                    <strong>{siteContact.email}</strong>
                  </span>
                  <span className="contact__action-arrow" aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            <div className="contact__socials">
              <p className="contact__detail-label">SOCIAL PROFILES</p>
              <ul>
                {socialProfiles.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            className="contact__form"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="contact__fields">
              <label className="contact__field">
                <span>Full Name</span>
                <input
                  autoComplete="name"
                  aria-describedby={errors.fullName ? 'contact-name-error' : undefined}
                  aria-invalid={Boolean(errors.fullName)}
                  name="fullName"
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  value={formValues.fullName}
                />
                <FieldError
                  id="contact-name-error"
                  message={errors.fullName}
                />
              </label>

              <label className="contact__field">
                <span>Email Address</span>
                <input
                  autoComplete="email"
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  aria-invalid={Boolean(errors.email)}
                  name="email"
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  type="email"
                  value={formValues.email}
                />
                <FieldError
                  id="contact-email-error"
                  message={errors.email}
                />
              </label>

              <label className="contact__field contact__field--full">
                <span>Subject</span>
                <input
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  aria-invalid={Boolean(errors.subject)}
                  name="subject"
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  value={formValues.subject}
                />
                <FieldError
                  id="contact-subject-error"
                  message={errors.subject}
                />
              </label>

              <label className="contact__field contact__field--full">
                <span>Message</span>
                <textarea
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  aria-invalid={Boolean(errors.message)}
                  name="message"
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows="5"
                  value={formValues.message}
                />
                <FieldError
                  id="contact-message-error"
                  message={errors.message}
                />
              </label>
            </div>

            {feedback && (
              <div
                className={`contact__feedback contact__feedback--${feedback.type}`}
                role={feedback.type === 'error' ? 'alert' : 'status'}
              >
                <p>{feedback.message}</p>
                {preparedMailto && (
                  <a href={preparedMailto}>Open your email app to send</a>
                )}
              </div>
            )}

            <button className="contact__submit" type="submit">
              Send Message
            </button>
            <p className="contact__form-note">
              This form does not send data to a server. You will review and send
              the prepared message in your email app.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
