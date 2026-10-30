import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// All tech stack items with their icons and official URLs
// Perfect inverted pyramid: 12 -> 10 -> 8 -> 6 -> 4 -> 2
const techStack: TechItem[][] = [
  // Row 1 - 12 items (largest)
  [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://www.typescriptlang.org" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg", url: "https://angular.dev" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", url: "https://expressjs.com" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", url: "https://www.php.net" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://www.python.org" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", url: "https://www.java.com" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", url: "https://dart.dev" },
  ],
  // Row 2 - 10 items
  [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://www.mysql.com" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://www.mongodb.com" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg", url: "https://vitejs.dev" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://www.figma.com" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com" },
  ],
  // Row 3 - 8 items
  [
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://www.linux.org" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://www.docker.com" },
    { name: "Packet Tracer", icon: "https://cdn.simpleicons.org/cisco/90BA4C", url: "https://www.netacad.com" },
    { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark/1679A7", url: "https://www.wireshark.org" },
    { name: "XAMPP", icon: "https://cdn.simpleicons.org/xampp/F37726", url: "https://www.apachefriends.org" },
    { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg", url: "https://www.jetbrains.com/idea/" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://www.postman.com" },
    { name: "MS Office", icon: "https://img.icons8.com/color/96/microsoft-office-2019.png", url: "https://www.microsoft.com/microsoft-365" },
  ],
  // Row 4 - 6 items (networking fundamentals)
  [
    { name: "TCP/IP", icon: "https://img.icons8.com/fluency/96/network.png", url: "https://en.wikipedia.org/wiki/Internet_protocol_suite" },
    { name: "IP Addressing", icon: "https://img.icons8.com/fluency/96/network-card.png", url: "https://en.wikipedia.org/wiki/IP_address" },
    { name: "Routing", icon: "https://img.icons8.com/fluency/96/router.png", url: "https://en.wikipedia.org/wiki/Router_(computing)" },
    { name: "DNS", icon: "https://img.icons8.com/fluency/96/domain.png", url: "https://developer.mozilla.org/en-US/docs/Glossary/DNS" },
    { name: "Firewall", icon: "https://img.icons8.com/fluency/96/firewall.png", url: "https://en.wikipedia.org/wiki/Firewall_(computing)" },
    { name: "Servers & VMs", icon: "https://img.icons8.com/fluency/96/server.png", url: "https://en.wikipedia.org/wiki/Server_(computing)" },
  ],
  // Row 5 - 4 items
  [
    { name: "CCNA 200-301", icon: "https://img.icons8.com/fluency/96/certificate.png", url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html" },
    { name: "Cloud Computing", icon: "https://img.icons8.com/fluency/96/cloud.png", url: "https://azure.microsoft.com" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg", url: "https://github.com/features/actions" },
    { name: "Virtualization", icon: "https://cdn.simpleicons.org/virtualbox/183A61", url: "https://www.virtualbox.org" },
  ],
  // Row 6 - 2 items (tip of pyramid)
  [
    { name: "Cisco NetAcad", icon: "https://cdn.simpleicons.org/cisco/90BA4C", url: "https://www.netacad.com" },
    { name: "Cloud & DevOps", icon: "https://img.icons8.com/fluency/96/cloud.png", url: "https://en.wikipedia.org/wiki/DevOps" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
