import { config } from "../config";
import "./styles/CallToAction.css";

// Gmail web compose link (works in any browser, even without a local mail client)
const hireSubject = encodeURIComponent(
  "Contact from your portfolio – Internship / PFE / Junior role"
);
const hireBody = encodeURIComponent(
  "Hi Amine,\n\nI found your portfolio and I would like to discuss an opportunity with you.\n\nBest regards,\n"
);
const hireMailto = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  config.contact.email
)}&su=${hireSubject}&body=${hireBody}`;

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <a
          href={hireMailto}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          Hire Me →
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
