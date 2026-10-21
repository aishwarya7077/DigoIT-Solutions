import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import BrandWordmark from "./BrandWordmark.jsx";
import { services, company } from "../data/services.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="footer-logo" to="/" aria-label="DigoIT Global — home">
              <img className="footer-logo__img" src="/footer-logo.png" alt="DigoIT Global" />
              <BrandWordmark />
            </Link>
            <p>
              Engineering intelligent, secure and scalable IT solutions — AI, cloud,
              ERP, SAP and IoT that help businesses modernize and grow.
            </p>
            <div className="footer-social mt-lg">
              <a href={company.website} target="_blank" rel="noopener noreferrer" aria-label="Website"><Icon name="globe" /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><Icon name="twitter" /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.id}><Link to={s.to}>{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in touch</h4>
            <ul className="footer-contact">
              <li><Icon name="pin" /><span>{company.address}</span></li>
              <li><Icon name="phone" /><a href={company.phoneHref}>{company.phone}</a></li>
              <li><Icon name="mail" /><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><Icon name="globe" /><a href={company.website} target="_blank" rel="noopener noreferrer">{company.websiteLabel}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Turning Ideas Into Impact.</span>
        </div>
      </div>
    </footer>
  );
}
