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

            <a className="contact__email" href={`mailto:${siteContact.email}`}>
              <span className="contact__detail-label">EMAIL</span>
              <span>{siteContact.email}</span>
            </a>

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
