"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { businesses } from "../data/site";
import type { Business } from "../data/site";

function WebsitePreview({ item }: { item: Business }) {
  return <div className={`website-preview ${item.className}`}>
    <div className="preview-chrome"><div className="preview-dots"><i/><i/><i/></div><span>{item.websitePreview.replace(/^https?:\/\//,"")}</span><span className="preview-live">LIVE SITE ↗</span></div>
    <div className="preview-viewport"><div className="preview-fallback"><img src={item.logo} alt={item.logoAlt}/><strong>{item.name}</strong><small>{item.location}</small></div><iframe src={item.websitePreview} title={`${item.name} website preview`} loading="lazy"/></div>
  </div>;
}

export default function PortfolioStage(){
  const [active,setActive]=useState(0); const item=businesses[active];
  useEffect(()=>{const id=window.setInterval(()=>setActive(v=>(v+1)%businesses.length),6500);return()=>window.clearInterval(id)},[]);
  return <section className={`hero ${item.className}`} id="top"><div className="hero-grain"/><div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/><div className="hero-shell shell">
    <div className="hero-copy"><div className="hero-kicker">PEOPLE · PLACES · POSSIBILITIES</div><AnimatePresence mode="wait"><motion.div key={item.id} initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} transition={{duration:.45}}><p className="hero-index">{item.number} / {item.sector}</p><h1>Building a<br/><span>brighter tomorrow.</span></h1><p className="hero-description">KVN Group brings together businesses, destinations and experiences with a long-term view of what people value.</p><div className="hero-business"><img src={item.logo} alt={item.logoAlt}/><div><strong>{item.name}</strong><small>{item.location}</small></div></div><a className="hero-link" href={item.href} target="_blank" rel="noreferrer">Explore business <ArrowUpRight size={17}/></a></motion.div></AnimatePresence></div>
    <div className="hero-side"><div className="hero-lockup"><div className="brand-mark hero-brand">KVN</div><div className="brand-sub hero-brand-sub">GROUP · BUILDING A BRIGHTER TOMORROW</div></div><div className="hero-switcher"><div className="micro-row"><span>OUR BUSINESSES</span><span>02</span></div>{businesses.map((b,i)=><button key={b.id} className={i===active?"switch active":"switch"} onClick={()=>setActive(i)}><span>{b.number}</span><strong>{b.name}</strong><ChevronRight size={16}/></button>)}</div></div>
  </div><a href="#businesses" className="scroll-cue">Scroll to explore <span>↓</span></a></section>;
}
export { WebsitePreview };
