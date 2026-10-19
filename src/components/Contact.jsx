import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Compose mailto link
    const mailtoLink = `mailto:rajasegarandhanush@gmail.com?subject=${encodeURIComponent(
      form.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `Hi Dhanush,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact">
      <div className="reveal" style={{ marginBottom: '3rem' }}>
        <div className="section-tag">✦ Let's Connect</div>
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="contact-wrapper reveal">
        {/* Left */}
        <div className="contact-info">
          <h3>Let's Build Something <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Amazing</span> Together</h3>
          <p>
            Whether you're looking for a dedicated intern, a freelance developer, or just want to
            chat about tech — my inbox is always open. I'll do my best to get back to you!
          </p>

          <div className="contact-items">
            <a href="mailto:rajasegarandhanush@gmail.com" className="contact-item">
              <div className="contact-item-icon">📧</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Email</div>
                <div style={{ fontWeight: 500 }}>rajasegarandhanush@gmail.com</div>
              </div>
            </a>
            <a href="tel:+94772943890" className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Phone</div>
                <div style={{ fontWeight: 500 }}>+94 772943890</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/rajasegaran-dhanush" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-item-icon">💼</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>LinkedIn</div>
                <div style={{ fontWeight: 500 }}>linkedin.com/in/rajasegaran-dhanush</div>
              </div>
            </a>
            <a href="https://github.com/RajasegaranDhanush" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-item-icon">🐙</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>GitHub</div>
                <div style={{ fontWeight: 500 }}>github.com/RajasegaranDhanush</div>
              </div>
            </a>
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Location</div>
                <div style={{ fontWeight: 500 }}>Courtlodge Kandapola, Nuwara Eliya, Sri Lanka</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right – Form */}
        <div className="contact-form reveal">
          {sent ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}>
              <div style={{ fontSize: '4rem' }}>✅</div>
              <h3 style={{ color: 'var(--primary-light)' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Your email client should have opened. Looking forward to connecting!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Internship Opportunity / Project Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Hi Dhanush, I'd like to discuss..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="form-submit" id="contact-submit-btn">
                <span>🚀</span> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
