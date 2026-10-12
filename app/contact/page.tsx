import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="inner-page content-width">
      <div className="eyebrow"><span className="eyebrow-line" /> SAY HELLO</div>
      <h1 className="inner-title">Let&apos;s make<br /><span className="name-highlight">something happen.</span></h1>
      <p className="inner-description">
        Have an idea, a question, or just want to say hi? I&apos;d love to hear from you.
      </p>
      <div className="empty-state contact-empty">
        <span className="empty-icon" aria-hidden="true">↗</span>
        <span className="empty-label">GET IN TOUCH</span>
        <h2>Find me here.</h2>
        <div className="contact-methods">
          <div className="contact-method">
            <svg className="contact-icon email-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <span>Email</span>
            <a href="mailto:gamertsoi0307@gmail.com">gamertsoi0307@gmail.com</a>
          </div>
          <div className="contact-method">
            <svg className="contact-icon discord-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.7 5.3a18 18 0 0 0-4.4-1.4l-.6 1.2a16.7 16.7 0 0 0-5.4 0l-.6-1.2a18 18 0 0 0-4.4 1.4C1.5 9.4.7 13.4 1.1 17.3a18 18 0 0 0 5.4 2.7l1.2-2a11.7 11.7 0 0 1-1.9-.9l.5-.4a12.8 12.8 0 0 0 11.4 0l.5.4a11.7 11.7 0 0 1-1.9.9l1.2 2a18 18 0 0 0 5.4-2.7c.5-4.6-.8-8.5-3.2-12ZM8.8 14.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.4 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
            </svg>
            <span>Discord</span>
            <span className="contact-value">gamertsoi</span>
          </div>
        </div>
        <Link className="text-link" href="/">Back to the introduction <span aria-hidden="true">→</span></Link>
      </div>
      <span className="page-index">03 / 03</span>
    </section>
  );
}
