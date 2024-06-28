import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState(''); // State for managing error message
  const [responseMessage, setResponseMessage] = useState(''); // State for managing response

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://52.86.14.235:8080/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        setResponseMessage(result.message);
        setError(''); // Clear any previous error message
      } else {
        setError('Failed to submit form. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to submit form. Please check your network connection.');
    }
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </section>
  );
};

export default Contact;
