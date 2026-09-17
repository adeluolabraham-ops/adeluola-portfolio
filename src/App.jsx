import{useEffect,useState}from'react';
import{ArrowDownRight,ArrowUpRight,Menu,X,Instagram,Mail,Play,Plus}from'lucide-react';

const projects=[
 {no:'01',title:'The Lagos Condition',kind:'Documentary',place:'Lagos / Nigeria',className:'lagos'},
 {no:'02',title:'Meet the Creatives',kind:'Documentary Series',place:'The Avenue',className:'creatives'},
 {no:'03',title:'UNILAG Madhouse',kind:'Culture / Film',place:'University of Lagos',className:'madhouse'},
 {no:'04',title:'Juju & Butterflies',kind:'Visual Story',place:'Yoruba / Contemporary',className:'juju'}
];
const journal=[
 ['01','The story is bigger than the frame.','Notes on looking closer.'],
 ['02','What makes a place feel like home?','People, memory and the streets between them.'],
 ['03','Behind the work: building from what is real.','A field note from The Avenue.']
];
function Mark({small=false}){return <div className={small?'mark small':'mark'}><span>ABE'S</span><b>AVE.</b></div>}
function App(){
 const[loaded,setLoaded]=useState(false);const[menu,setMenu]=useState(false);const[active,setActive]=useState(null);
 useEffect(()=>{const t=setTimeout(()=>setLoaded(true),1250);return()=>clearTimeout(t)},[]);
 const jump=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)};
 return <div className={loaded?'site ready':'site'}>
  <div className="loader"><div className="loader-sign"><Mark/><i>EVERY STORY HAS AN ADDRESS.</i></div><div className="loader-line"><span/></div></div>
  <header className="nav">
   <button className="nav-brand" onClick={()=>jump('home')}><Mark small/></button>
   <div className={'nav-links '+(menu?'open':'')}><button onClick={()=>jump('home')}>Home</button><button onClick={()=>jump('avenue')}>The Avenue</button><button onClick={()=>jump('work')}>Work</button><button onClick={()=>jump('films')}>Films</button><button onClick={()=>jump('studio')}>Studio</button><button onClick={()=>jump('journal')}>Journal</button><button onClick={()=>jump('contact')}>Contact</button></div>
   <button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
  </header>

  <main>
   <section id="home" className="hero">
    <div className="hero-kicker"><span>ABE'S AVE. PRODUCTIONS</span><span>LAGOS · NIGERIA</span></div>
    <div className="hero-stage"><div className="hero-image"><div className="hero-sun"/><div className="hero-copy"><p>STORIES / PEOPLE / CULTURE</p><h1>Every story<br/><em>has a place.</em></h1></div><span className="hero-index">00 / 01</span></div></div>
    <div className="hero-foot"><p>Film · Photography · Documentaries · Experiences</p><button onClick={()=>jump('avenue')}><span>Enter The Avenue</span><ArrowDownRight/></button></div>
   </section>

   <section id="avenue" className="intro">
    <div className="chapter"><span>01</span><span>THE AVENUE</span></div>
    <div className="intro-grid"><p className="display">A creative production house telling <em>real stories</em> through film, photography and visual culture.</p><div className="intro-aside"><p>ABE'S AVE. is a place for stories with texture. We follow people, culture and the quiet details that make a moment worth remembering.</p><p>Not everything needs to be louder. Some things simply need to be seen.</p><button onClick={()=>jump('studio')}>Discover the studio <ArrowUpRight/></button></div></div>
    <div className="streetline"><span>THE AVENUE</span><i/><span>EST. 2024</span></div>
   </section>

   <section id="work" className="work-section">
    <div className="chapter"><span>02</span><span>SELECTED ADDRESSES</span></div>
    <div className="section-title"><h2>Stories we've<br/><em>visited.</em></h2><p>Selected films, documentaries and visual projects from The Avenue.</p></div>
    <div className="project-list">{projects.map((p,i)=><article className="project" key={p.title} onClick={()=>setActive(active===i?null:i)}><div className={'project-media '+p.className}><span>{p.no}</span><div className="media-center"><Play/></div></div><div className="project-meta"><div><small>{p.kind}</small><h3>{p.title}</h3><p>{p.place}</p></div><ArrowUpRight/></div>{active===i&&<div className="project-more">Project story <Plus/> <span>Selected case study coming soon.</span></div>}</article>)}</div>
   </section>

   <section id="films" className="film-section">
    <div className="film-backdrop"><div className="film-word">FILM</div></div>
    <div className="film-content"><div className="chapter light"><span>03</span><span>FILMS</span></div><h2>Moving images.<br/><em>Living stories.</em></h2><p>Documentary films, campaign films, event stories and visual worlds built around people.</p><button onClick={()=>jump('contact')}>Start a film <ArrowUpRight/></button></div>
   </section>

   <section className="photo-section">
    <div className="chapter"><span>04</span><span>PHOTOGRAPHY</span></div>
    <div className="photo-grid"><div className="photo p1"><span>PORTRAIT / 01</span></div><div className="photo p2"><span>STREET / 02</span></div><div className="photo p3"><span>CULTURE / 03</span></div><div className="photo p4"><span>PEOPLE / 04</span></div></div>
    <div className="photo-caption"><p>Photography that lets a moment <em>stay.</em></p><span>Portraits · Culture · Editorial · Events</span></div>
   </section>

   <section id="studio" className="studio">
    <div className="chapter"><span>05</span><span>STUDIO NOTES</span></div>
    <div className="studio-grid"><h2>We don't just<br/><em>make content.</em></h2><div><p className="big">We build visual experiences around ideas worth caring about.</p><p>From the first conversation to the final frame, we bring creative direction, production and storytelling together. The goal is simple: make something honest enough to feel, and crafted enough to remember.</p><div className="service-tags"><span>Creative Direction</span><span>Film & Video</span><span>Photography</span><span>Documentaries</span><span>Events</span><span>Visual Experiences</span></div></div></div>
   </section>

   <section id="journal" className="journal">
    <div className="chapter"><span>06</span><span>JOURNAL</span></div><div className="journal-head"><h2>Field<br/><em>notes.</em></h2><p>Thoughts from the road, the edit suite and everywhere stories happen.</p></div>
    <div className="journal-list">{journal.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight/></article>)}</div>
   </section>

   <section className="collab"><p>“The best stories are not waiting for a camera. They are waiting for someone to notice.”</p><span>— ABE'S AVE. / STUDIO NOTE 001</span></section>

   <section id="contact" className="contact"><div className="chapter dark"><span>07</span><span>CONTACT</span></div><div className="contact-grid"><h2>Let's meet<br/><em>on The Avenue.</em></h2><div><p>Have a story, campaign, film or idea that needs a home?</p><a href="mailto:abesavenueproductions@gmail.com">abesavenueproductions@gmail.com <ArrowUpRight/></a><div className="contact-links"><a href="https://instagram.com/abesavenueofficial" target="_blank" rel="noreferrer">Instagram <Instagram/></a><a href="mailto:abesavenueproductions@gmail.com">Email <Mail/></a></div></div></div></section>
  </main>
  <footer><Mark small/><div><span>ABE'S AVE. PRODUCTIONS</span><span>Stories. People. Culture.</span></div><span>© 2026</span></footer>
 </div>
}
export default App;