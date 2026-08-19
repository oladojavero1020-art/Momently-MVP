 "use client";
import {useState} from "react";
const cats=[["🎂","Birthday"],["🍼","Baby Shower"],["🎓","Graduation"],["💍","Wedding & Engagement"],["❤️","Anniversary"],["💼","Corporate"],["🎉","Other"]];
const listings=[
["🏠","Venue","Modern Event Studio","Edmonton · Up to 40 guests","$150/hr","4.9"],
["🎈","Decor","Elegant Balloon Décor","Edmonton · Birthdays & showers","From $150","4.8"],
["📸","Photography","Event Photography","Edmonton · 2-hour package","From $250","5.0"],
["🎂","Cake","Custom Celebration Cake","Edmonton · Custom designs","From $85","4.9"],
["🎨","Experience","Paint & Sip Night","Edmonton · Groups of 10–30","From $45/person","4.8"],
["🎁","Gifts","AVÉ Gifts Celebration Box","Edmonton · Pickup or delivery","From $75","5.0"]
];
export default function Home(){
 const [occasion,setOccasion]=useState("");
 const [guests,setGuests]=useState("");
 const [budget,setBudget]=useState("");
 const search=()=>document.getElementById("results")?.scrollIntoView({behavior:"smooth"});
 return <main>
  <nav className="nav"><div className="logo">MOMENTLY<span>•</span></div><div className="navlinks"><a href="#explore">Explore</a><a href="#how">How it works</a><a href="#providers">For providers</a></div><button className="outline" onClick={()=>document.getElementById("providers")?.scrollIntoView({behavior:"smooth"})}>List Your Business</button></nav>
  <section className="hero"><div className="hero-copy"><div className="eyebrow">EDMONTON'S CELEBRATION MARKETPLACE</div><h1>Make the <em>moment</em> happen.</h1><p>Find the perfect space, discover amazing local services, and bring your celebration together — all in one place.</p></div>
   <div className="search-card"><label>What are you celebrating?</label><select value={occasion} onChange={e=>setOccasion(e.target.value)}><option value="">Choose an occasion</option>{cats.map(([_,c])=><option key={c}>{c}</option>)}</select>
    <div className="row"><div><label>Guests</label><select value={guests} onChange={e=>setGuests(e.target.value)}><option value="">Any size</option><option>10–20</option><option>20–50</option><option>50–100</option><option>100+</option></select></div><div><label>Budget</label><select value={budget} onChange={e=>setBudget(e.target.value)}><option value="">Any budget</option><option>$250+</option><option>$500+</option><option>$1,000+</option><option>$2,500+</option></select></div></div>
    <div className="location">📍 Edmonton, Alberta</div><button className="primary" onClick={search}>Find options <span>→</span></button>
   </div></section>
  <section className="section" id="explore"><div className="section-head"><div><div className="eyebrow">START WITH THE OCCASION</div><h2>What are you celebrating?</h2></div><a href="#results">View all →</a></div><div className="categories">{cats.map(([icon,name])=><button key={name} onClick={()=>{setOccasion(name);search()}}><span>{icon}</span>{name}</button>)}</div></section>
  <section className="section warm" id="results"><div className="section-head"><div><div className="eyebrow">DISCOVER LOCAL</div><h2>Popular in Edmonton</h2><p>Sample listings for the MVP — real providers will be added after validation.</p></div></div><div className="grid">{listings.map(l=><article className="listing" key={l[2]}><div className="photo">{l[0]}<small>{l[1]}</small></div><div className="listing-body"><div className="rating">★ {l[5]}</div><h3>{l[2]}</h3><p>{l[3]}</p><strong>{l[4]}</strong><button className="textbtn" onClick={()=>alert("MVP preview: booking will be connected in the next phase.")}>View details →</button></div></article>)}</div></section>
  <section className="how section" id="how"><div className="eyebrow">SIMPLE BY DESIGN</div><h2>From idea to celebration.</h2><div className="steps"><div><b>01</b><h3>Tell us what you're planning</h3><p>Choose an occasion, guest count, location and budget.</p></div><div><b>02</b><h3>Discover your options</h3><p>Compare local spaces, services and experiences in one place.</p></div><div><b>03</b><h3>Build your moment</h3><p>Bring vendors together and request bookings for your celebration.</p></div></div></section>
  <section className="provider" id="providers"><div><div className="eyebrow">FOR LOCAL BUSINESSES</div><h2>Turn your services into bookings.</h2><p>Reach people who are already planning a celebration. Join the early provider list and help shape Momently's Edmonton launch.</p></div><button className="lightbtn" onClick={()=>alert("Provider signup is coming in the next MVP phase.")}>List Your Business →</button></section>
  <section className="cta"><div className="eyebrow">THE BIGGER VISION</div><h2>One celebration.<br/><em>Everything you need.</em></h2><p>Eventually, Momently will let customers build a complete celebration — venue, décor, food, photography, experiences and gifts — from one simple plan.</p></section>
  <footer><div className="logo">MOMENTLY<span>•</span></div><p>Make the moment happen.</p><small>© 2026 Momently MVP · Working brand name</small></footer>
 </main>
}