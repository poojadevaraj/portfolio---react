export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact-inner">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">
          Let's work<br /><span className="accent">together.</span>
        </h2>
        <p className="contact-sub">
          Open to full-time roles and freelance projects. Let's create something amazing.
        </p>
        <div className="contact-actions">
          <a href="mailto:abc@email.com" className="btn-primary">Send an Email</a>
          <a href="https://linkedin.com/in/abc" target="_blank" rel="noreferrer" className="btn-ghost">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
