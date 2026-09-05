import { ArrowUpRight, Building2, Mail, MapPin } from "lucide-react";
import PortfolioStage, { WebsitePreview } from "../components/PortfolioStage";
import GroupLogo from "../components/GroupLogo";
import { businesses, milestones, values } from "../data/site";

const valueIcons = ["people", "growth", "experience", "future"];

export default function Home() {
  return <main>
    <header className="header"><div className="shell header-inner">
      <a href="#top" className="brand"><GroupLogo alt="KVN Group" /></a>
      <nav><a href="#businesses">Our Businesses</a><a href="#group">The Group</a><a href="#values">Our Values</a><a href="#story">Our Story</a><a href="#contact">Contact</a></nav>
      <a className="header-cta" href="#contact">Partner with us <ArrowUpRight size={15}/></a>
    </div></header>

    <PortfolioStage />

    <section className="intro shell" id="group"><div className="section-label">THE GROUP</div><div className="intro-grid">
      <h2>People at the centre. Places with purpose. <em>Possibilities ahead.</em></h2>
      <div className="intro-copy"><p>KVN Group brings together businesses and destinations designed around people. We believe the places we create should feel useful, welcoming and memorable, while every business should have a clear purpose and a long-term point of view.</p><p>Today, that philosophy comes to life through entertainment and celebrations. Tomorrow, it can extend to new places, new ideas and new experiences, without losing sight of the people who make them matter.</p></div>
    </div></section>

    <section className="businesses shell" id="businesses"><div className="section-head"><div><div className="section-label">OUR BUSINESSES</div><h2>Different places.<br/><em>One people-first purpose.</em></h2></div><p>Two businesses today, each creating a different kind of experience for people and communities.</p></div>
      <div className="business-grid">{businesses.map(b=><article className={`business-card ${b.className}`} key={b.id}>
        <div className="business-top"><span>{b.number} / {b.sector}</span><span>KVN GROUP</span></div>
        <a className="business-preview-link" href={b.href} target="_blank" rel="noreferrer" aria-label={`Open ${b.name} website`}><WebsitePreview item={b}/></a>
        <div className="business-body"><p className="business-location">{b.location}</p><h3>{b.strapline}</h3><p>{b.description}</p><div className="business-highlights">{b.highlights.map(h=><span key={h}>{h}</span>)}</div><a href={b.href} target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={17}/></a></div>
      </article>)}</div>
    </section>

    <section className="values" id="values"><div className="shell"><div className="section-label light">OUR VALUES</div><div className="values-head"><h2>People first.<br/><em>Possibilities follow.</em></h2><p>We think about the people who arrive, the places they enter, the teams who run them and the memories that remain after they leave.</p></div><div className="values-grid">{values.map(([number,title,text],i)=><article className="value" key={number}><div className="value-icon"><span>{valueIcons[i]}</span></div><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="story shell" id="story"><div className="section-label">OUR STORY</div><div className="story-head"><h2>A legacy of places.<br/><em>A future of possibilities.</em></h2><p>The KVN story is rooted in experiences that bring people together. From the cinema screen to the celebration hall, our businesses are connected by a simple idea: create places people want to return to.</p></div><div className="timeline">{milestones.map(([year,title,text])=><article key={year}><span>{year}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="tomorrow"><div className="shell tomorrow-inner"><div><div className="section-label light">A BETTER TOMORROW</div><h2>People create places.<br/>Places create <em>possibilities.</em></h2></div><p>Our next chapter is about creating more meaningful destinations and experiences. We will explore opportunities where people, place and purpose come together, building a portfolio with lasting relevance.</p></div></section>

    <section className="contact shell" id="contact"><div className="contact-card"><div><div className="section-label">CONNECT WITH KVN</div><h2>Let’s build<br/><em>what people value.</em></h2></div><div className="contact-info"><p>For business partnerships, destination opportunities and group-level enquiries, connect with KVN Group.</p><a className="email" href="mailto:info@kvnhospitality.com">info@kvnhospitality.com <ArrowUpRight size={18}/></a><div className="meta"><span><MapPin size={15}/> Chennai, Tamil Nadu, India</span><span><Building2 size={15}/> Entertainment · Hospitality · Experiences</span><span><Mail size={15}/> Business enquiries</span></div></div></div></section>

    <footer><div className="shell footer-inner"><GroupLogo alt="KVN Group" /><p>© {new Date().getFullYear()} KVN Group. Building a Brighter Tomorrow.</p><div><a href="#businesses">Businesses</a><a href="#values">Values</a><a href="#contact">Contact</a></div></div></footer>
  </main>;
}
