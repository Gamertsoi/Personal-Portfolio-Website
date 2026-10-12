import Link from "next/link";

export default function HomePage() {
  return (
    <section className="home-page content-width">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</div>
        <h1>
          Hello, I&apos;m
          <br />
          <span className="name-highlight">Gamertsoi.</span>
        </h1>
        <p className="hero-description">
          An Electronic Engineering Graduate with curiosity and passion for creating innovative software and hardware projects.
          I enjoy exploring new technologies and turning ideas into reality through both software and hardware projects.
          This website will update you on my latest projects and ideas. The update speed depends on my availability.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/projects">
            Explore my projects <span aria-hidden="true">↗</span>
          </Link>
          <Link className="text-link" href="/contact">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="hero-note">
          <span className="note-mark" aria-hidden="true">✳</span>
          <span>Curious by nature. Making things just because.</span>
        </div>
      </div>

      <div className="hero-art" aria-label="Abstract decorative illustration">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-sun" />
        <div className="art-card">
          <span className="art-card-label">CURRENTLY</span>
          <span className="art-card-title">Dreaming up<br />what&apos;s next<span className="name-highlight">.</span></span>
          <span className="art-card-bottom"><span /> ALWAYS IN PROGRESS</span>
        </div>
        <span className="art-spark spark-one">✳</span>
        <span className="art-spark spark-two">✳</span>
        <span className="art-caption">A WORK IN PROGRESS — JUST LIKE ME</span>
      </div>

      <div className="home-bottom">
        <span>SOFTWARE <i>×</i> HARDWARE <i>×</i> EVERYTHING IN BETWEEN</span>
      </div>
      <span className="page-index">01 / 03</span>
    </section>
  );
}
