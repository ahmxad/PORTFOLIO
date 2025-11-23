import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
export default function Links() {
  return (
    <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
      <a
        href="https://www.instagram.com/ahmad9099x/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} color="#E1306C" />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-ahmad-tech-guy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} color="#0A66C2" />
      </a>
      <a
        href="https://github.com/ahmxad"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} color="#000000" /> 
      </a>
      <a href="mailto:w99709475@gmail.com">
        <FaEnvelope size={30} color="#D44638" />
      </a>
    </div>
  );
}
