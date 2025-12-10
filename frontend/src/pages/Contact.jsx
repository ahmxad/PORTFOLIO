import React, { useState } from "react";
import Links from "../links/Links";
import "./Contact.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:w99709475@gmail.com?subject=Contact from Portfolio - ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h3>Get in Touch</h3>
          <p>I'd love to hear from you. Fill out the form below or connect via social media.</p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ marginBottom: 2, backgroundColor: 'rgba(255,255,255,0.5)' }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ marginBottom: 2, backgroundColor: 'rgba(255,255,255,0.5)' }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              sx={{ marginBottom: 2, backgroundColor: 'rgba(255,255,255,0.5)' }}
            />
            <Button 
              variant="contained" 
              type="submit" 
              endIcon={<SendIcon />}
              sx={{ backgroundColor: "var(--primary-color)", '&:hover': { backgroundColor: "var(--secondary-color)" } }}
            >
              Send Message
            </Button>
          </form>

          <div className="contact-info">
            <div className="social-links-wrapper">
              <h5>Connect</h5>
              <Links />
            </div>
            
            <div className="resume-section">
              <h5>Resume</h5>
              <Button 
                variant="outlined" 
                startIcon={<DownloadIcon />}
                href="/resume.pdf" 
                target="_blank"
                sx={{ 
                  color: "var(--primary-color)", 
                  borderColor: "var(--primary-color)",
                  marginTop: 1,
                  '&:hover': { backgroundColor: "var(--primary-color)", color: "white" }
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
