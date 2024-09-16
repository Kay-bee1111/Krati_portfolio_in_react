import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/xjvndqwp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className='contact'>
    <div className="contact-me">
      <h2 className='headingg'>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className='submit' type="submit">Send Message</button>
      </form></div>
    </div>
  );
};

export default ContactMe;
