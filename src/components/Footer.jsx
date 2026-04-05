import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <p className="footer__text">
          Designed & Built by <span className="footer__highlight">Ahmad</span>
        </p>
        <p className="footer__copyright">© {year} — All rights reserved.</p>
      </div>
    </footer>
  );
}
