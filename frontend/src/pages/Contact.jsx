import Links from "../links/Links";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="Contact">
      <div className="contact-text">
        <h3>Contact</h3>
        <p>Soon I'll link backend to my website which will be in express js but you can still contact me through my socials listed below.</p>
      </div>
      <div className="links">
      <h5 style={{ textAlign: "center" }}>My Socials:</h5>
      <Links />
    </div>
    </div>
  );
}
