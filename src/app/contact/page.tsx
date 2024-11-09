"use client"
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsAppMessage = () => {
    const whatsappMessage = `Name: ${name}%0A%0AMessage: ${message}`;
    const phone = "+923162391694"; 
    const whatsappURL = `https://wa.me/${phone}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="main h-screen">
      <Navbar />
      <div className="contact-page">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-subtext">
          Have questions, opportunities, or just want to connect? Feel free to drop a message!
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          
          <button
            type="button"
            onClick={sendWhatsAppMessage}
            className="submit-btn whatsapp-btn"
          >
            Send via WhatsApp
          </button>
        </form>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/amna-aftab-kifayat-81a5822b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/amnakifayat13"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
