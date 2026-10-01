import { useState } from 'react';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/karyle-zhienelle-baylon-42231b382/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/zhienelle',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/karylezhnll',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/karylebaylon',
  },
];

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || '';
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formElement = event.currentTarget;

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      setStatus({
        type: 'error',
        message: 'Please enter a valid name, email address, and message.',
      });
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please complete your name, email, and message before sending.',
      });
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message:
          'The contact form is not configured yet. Please use LinkedIn or GitHub for now.',
      });
      return;
    }

    setIsLoading(true);
    setStatus({
      type: 'pending',
      message: 'Sending your message…',
    });

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: form.name.trim(),
            from_email: form.email.trim(),
            message: form.message.trim(),
            reply_to: form.email.trim(),
            ...(contactEmail ? { to_email: contactEmail } : {}),
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`EmailJS request failed with status ${response.status}`);
      }

      setForm(initialForm);
      setStatus({
        type: 'success',
        message: 'Message sent. Thanks for reaching out — I’ll get back to you soon.',
      });
    } catch (error) {
      console.error('Contact form submission failed:', error);

      setStatus({
        type: 'error',
        message:
          'Something went wrong while sending your message. Please try again or reach out through LinkedIn.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-page" data-navbar-theme="light">
      <section
        className="contact-page__section"
        aria-labelledby="contact-page-title"
      >
        <div className="container contact-page__container">
          <div className="contact-page__intro">
            <p className="contact-page__eyebrow">07 / Contact</p>

            <h1 id="contact-page-title">Let’s talk.</h1>

            <p className="contact-page__lead">
              Have a project, role, or idea in mind?
              <br />
              I’d love to hear about it.
            </p>

            <div className="contact-page__links" aria-label="Contact links">
              {contactEmail && (
                <a href={`mailto:${contactEmail}`}>
                  <span>Email</span>
                  <span className="contact-page__link-value">{contactEmail}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}

              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>

            <div className="contact-page__mobile-memoji" aria-hidden="true">
              <img src="/assets/wave.png" alt="" />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__header">
              <p className="contact-form__kicker">Send a message</p>
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="contact-form__footer">
              <button type="submit" disabled={isLoading}>
                <span>{isLoading ? 'Sending…' : 'Send message'}</span>
                {!isLoading && <span aria-hidden="true">↗</span>}
              </button>

              <p
                className={`contact-form__status contact-form__status--${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            </div>

          </form>

          <div className="contact-page__desktop-memoji" aria-hidden="true">
            <img src="/assets/wave.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
