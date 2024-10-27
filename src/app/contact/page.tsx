
import Navbar from "@/components/Navbar";

export default function Contact() {
  

  return (
    <main className='main h-screen'>
      <Navbar />
      <div className="contact-page">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-subtext">
          Have questions, opportunities, or just want to connect? Feel free to drop a message!
        </p>
        
        <form  className="contact-form">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            required 
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
          />

          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
           
            required
          ></textarea>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/amna-aftab-kifayat-81a5822b7/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
          <a href="https://github.com/amnakifayat13" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
        </div>
      </div>
    </main>
  );
}
