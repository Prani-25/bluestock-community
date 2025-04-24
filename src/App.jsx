import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">BLUESTOCK</div>
        <nav className="nav-links">
          <a href="#">IPO</a>
          <a href="#">COMMUNITY</a>
          <a href="#">PRODUCTS</a>
          <a href="#">BROKERS</a>
          <a href="#">LIVE NEWS</a>
        </nav>
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up Now</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>The Most Active Community of Traders & Investors</h1>
          <p>
            Join now to interact with thousands of active traders and investors
            to learn and share your knowledge on our buzzing forum.
          </p>
          <button className="cta-button">Join Our Community</button>
        </div>
        <div className="hero-image">
          {/* Placeholder for chat image */}
          <div className="chat-preview">[Chat UI Preview]</div>
        </div>
      </section>

      <section className="features">
        <h2>be a part of trading & <br/>investments club</h2>
        <ul>
          <li>Rich environment for knowledge exchange.</li>
          <li>Stay connected about the latest stock market.</li>
          <li>Access exclusive community events, webinars, and meet-ups.</li>
        </ul>
        <div className="feature-tags">
          <span>Dynamic Discussions</span>
          <span>Expert Insights</span>
          <span>Real-Time Interaction</span>
        </div>
      </section>

      <section className="experts">
        <div className="experts-main">
        <h2>Team Bluestock Cares</h2>
        <p>Interact with our members to engage, clarify and contribute</p>
        </div>
        <div className="interact-options">
          <div className="interact-matter">
          <h3>Interact With Our <br/> Experts</h3>
          <ul>
            <li>Get valid suggestions</li>
            <li>Raise issues or concerns</li>
            <li>Ask your questions</li>
          </ul>
          </div>
          <div className="chat-preview">[Expert Chat Preview]</div>
        </div>
      </section>
    </div>
  );
}
