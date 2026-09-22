import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import GroupLogo from "../components/GroupLogo";
import { businesses, milestones, values } from "../data/site";

const KVN_HALL_IMAGE = "https://raw.githubusercontent.com/gearsganesh/KVN/main/assets/hero.webp";
const CINEMA_LOGO = "https://raw.githubusercontent.com/gearsganesh/Varadarajacinemas/main/assets/varadharaja-header-logo.png";

export default function Home() {
  return (
    <main>
      <header className="site-nav">
        <div className="nav-inner">
          <a href="#top" className="nav-logo-shell"><span className="nav-logo"><GroupLogo alt="KVN Group" /></span></a>
          <nav className="nav-links"><a href="#group">The Group</a><a href="#businesses">Businesses</a><a href="#story">Our Story</a><a href="#values">Values</a></nav>
          <a className="nav-cta" href="#contact">Connect <ArrowUpRight size={15} /></a>
        </div>
      </header>

      <section className="orbyt-hero" id="top">
        <div className="hero-photo" /><div className="hero-shade" /><div className="hero-grid" /><div className="hero-ring ring-one" /><div className="hero-ring ring-two" />
        <div className="hero-content">
          <div className="hero-brand-lockup"><GroupLogo alt="KVN Group · Building a Brighter Tomorrow" /></div>
          <p className="eyebrow">PEOPLE · PLACES · POSSIBILITIES</p>
          <h1>Building places<br /><em>people remember.</em></h1>
          <p className="hero-lead">KVN Group brings together entertainment and hospitality experiences shaped around people, places and the moments that connect them.</p>
          <div className="hero-actions"><a className="primary-button" href="#businesses">Explore the group <ArrowDown size={17} /></a><a className="text-button" href="#group">Our approach <ArrowUpRight size={16} /></a></div>
        </div>
        <aside className="hero-panel">
          <div className="hero-panel-top"><span>THE GROUP</span><span>CHENNAI · INDIA</span></div>
          <div className="hero-business-preview"><div className="preview-image cinema-preview"><img src={CINEMA_LOGO} alt="Varadaraja Cinemas" /></div><div><span>01 · ENTERTAINMENT</span><strong>Varadaraja Cinemas</strong><small>Chitlapakkam</small></div></div>
          <div className="hero-business-preview"><div className="preview-image hall-preview" /><div><span>02 · HOSPITALITY</span><strong>KVN Weddings & Conventions</strong><small>Velappanchavadi</small></div></div>
          <a href="#businesses" className="panel-link">View both businesses <ArrowUpRight size={16} /></a>
        </aside>
        <div className="hero-bottom"><span>KVN GROUP · CHENNAI</span><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span></div>
      </section>

      <section className="statement" id="group"><div className="statement-inner">
        <div><p className="eyebrow dark">THE GROUP</p><h2>People at the centre.<br />Places with purpose.<br /><em>Possibilities ahead.</em></h2></div>
        <div className="statement-copy"><p>KVN Group brings together businesses and destinations designed around people. We create places that feel welcoming, purposeful and memorable.</p><p>Today, our story is expressed through entertainment and celebrations. We are building forward carefully, with the same simple belief at the centre of every next step.</p><div className="statement-note"><span>01</span><span>People</span><span>Places</span><span>Possibilities</span></div></div>
      </div></section>

      <section className="businesses-story" id="businesses"><div className="section-intro"><div><p className="eyebrow dark">OUR BUSINESSES</p><h2>Two experiences.<br /><em>One KVN spirit.</em></h2></div><p>Two distinct destinations. One shared belief in creating places people want to return to.</p></div>
        <div className="business-stack">{businesses.map((business) => <article className={`business-feature ${business.className}`} key={business.id}>
          <div className="business-visual">
            {business.id === "varadaraja" ? <><div className="cinema-architecture"><span /><span /><span /><span /></div><div className="business-logo-card cinema-card"><img src={business.logo} alt={business.logoAlt} /></div><div className="visual-stat"><b>1979</b><span>THE STORY BEGINS</span></div></> : <><div className="hall-photo" /><div className="hall-overlay" /><div className="business-logo-card wedding-card"><img src={business.logo} alt={business.logoAlt} /></div><div className="visual-stat"><b>02</b><span>CELEBRATIONS · HOSPITALITY</span></div></>}
            <span className="business-number">{business.number}</span><span className="visual-caption">KVN GROUP · {business.sector}</span>
          </div>
          <div className="business-content"><p className="eyebrow dark">{business.location}</p><h3>{business.strapline}</h3><p>{business.description}</p><div className="business-tags">{business.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}</div><a className="feature-link" href={business.href} target="_blank" rel="noreferrer">Visit {business.name} <ArrowUpRight size={17} /></a></div>
        </article>)}</div>
      </section>

      <section className="values-story" id="values"><div className="values-intro"><p className="eyebrow">OUR VALUES</p><h2>What stays constant<br />as we move <em>forward.</em></h2><p>Different businesses. Different places. The same standards for how we build, operate and welcome people.</p></div>
        <div className="values-list">{values.map(([number, title, text]) => <article key={number} className="value-row"><span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={18} /></article>)}</div>
      </section>

      <section className="story-section" id="story"><div className="story-title"><p className="eyebrow dark">OUR STORY</p><h2>A legacy of places.<br /><em>A future of possibilities.</em></h2></div><div className="story-timeline">{milestones.map(([year, title, text]) => <article key={year} className="story-item"><span>{year}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={17} /></article>)}</div></section>

      <section className="future-section"><div className="future-orbit" /><div className="future-inner"><p className="eyebrow">A BRIGHTER TOMORROW</p><h2>People create places.<br />Places create <em>possibilities.</em></h2><p>Our next chapter is about creating more meaningful destinations and experiences, while keeping the people behind every place at the heart of the journey.</p><a className="primary-button light" href="#contact">Connect with KVN <ArrowUpRight size={17} /></a></div></section>

      <section className="contact-section" id="contact"><div className="contact-inner"><div><p className="eyebrow dark">CONNECT WITH KVN</p><h2>Let's build<br /><em>what people value.</em></h2></div><div className="contact-details"><p>For business partnerships, destination opportunities and group enquiries, connect with KVN Group.</p><a className="contact-email" href="mailto:info@kvnhospitality.com">info@kvnhospitality.com <ArrowUpRight size={18} /></a><div className="contact-meta"><span><MapPin size={15} /> Chennai, Tamil Nadu, India</span><span><Mail size={15} /> Business enquiries</span></div></div></div></section>

      <footer className="site-footer"><div className="footer-inner"><div className="footer-brand"><span><GroupLogo alt="KVN Group" /></span><p>BUILDING A BRIGHTER TOMORROW</p></div><div className="footer-nav"><a href="#group">The Group</a><a href="#businesses">Businesses</a><a href="#story">Our Story</a><a href="#contact">Contact</a></div><div className="footer-end">PEOPLE · PLACES · POSSIBILITIES<br />© 2026 KVN GROUP</div></div></footer>
    </main>
  );
}
