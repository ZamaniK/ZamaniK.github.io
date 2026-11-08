import { useEffect, useState } from 'react';
import { FaAdjust, FaChartBar, FaCloud, FaCodeBranch, FaDatabase, FaEnvelope, FaFileAlt, FaGithub, FaLinkedinIn, FaMobileAlt, FaPalette, FaProjectDiagram, FaRobot, FaShieldAlt, FaStore, FaSun } from 'react-icons/fa';
import { SiBootstrap, SiClaude, SiCss, SiDatabricks, SiDocker, SiDotnet, SiFastapi, SiFirebase, SiGit, SiGithub, SiGithubcopilot, SiHtml5, SiJavascript, SiJquery, SiMysql, SiNodedotjs, SiOrcid, SiPodman, SiPostgresql, SiPython, SiQlik, SiReact, SiTypescript } from 'react-icons/si';

const projects = [
  {
    number: '01', type: 'DATA PLATFORMS', filter: 'data', title: 'Data lakehouse for public service',
    description: 'A research and data platform contribution focused on the information needs of a South African government-sector training authority.',
    image: 'img/Comparison-of-modern-data.png', alt: 'Data warehouse architecture illustration',
    stack: ['Azure', 'Data engineering', 'Governance'], featured: true,
    need: 'Bring data management and analytics into focus for a government-sector training authority.',
    architecture: 'Contributed to analysis, design and implementation of data management solutions, connecting lakehouse concepts with governance and reporting needs.',
    decision: 'Treat data stewardship, platform design and future analytical use as related design concerns.',
    outcome: 'Research contribution published as a book chapter in 2024.',
  },
  {
    number: '02', type: 'DATA ENGINEERING', filter: 'data', title: 'Modern data warehouse',
    description: 'A university departmental initiative exploring a modern cloud data foundation for connected analysis and reporting.',
    image: 'img/Comparison-of-modern-data.png', alt: 'Modern data warehouse architecture',
    stack: ['Azure Data Lake Gen2', 'Data Factory', 'Azure SQL'],
    need: 'Develop a modern data foundation using Microsoft Azure services.',
    architecture: 'The project technology stack included Azure Data Lake Gen2, Azure Data Factory and Azure SQL databases.',
    decision: 'Combine cloud storage, data movement and relational data services as parts of one data platform.',
    outcome: 'Contributed as a project team member. No quantified operational metrics were provided.',
  },
  {
    number: '03', type: 'BOOKING SYSTEM', filter: 'app', title: 'Bounce trampoline park bookings',
    description: 'A team-built booking application for a trampoline park, developed with Agile delivery and a focus on the customer booking journey.',
    image: 'img/bounce1.jpg', alt: 'Bounce trampoline park booking project', stack: ['ASP.NET MVC', 'C#', 'Agile'],
    need: 'Create a web-based booking system for trampoline park services.',
    architecture: 'ASP.NET MVC application built by a team of eight, with Zamani as team lead and full-stack developer.',
    decision: 'Deliver in Agile sprints so the team could review and present working increments.',
    outcome: 'Completed and presented work across three project sprints.',
    link: 'https://github.com/ZamaniK/TrampolinePark',
  },
  {
    number: '04', type: 'COMMERCE APPLICATION', filter: 'app', title: 'Nguni Foods commerce platform',
    description: 'A team-built commerce experience that brings product and customer journeys into a single web application.',
    image: 'img/nguni.png', alt: 'Nguni Foods identity', stack: ['C#', 'ASP.NET MVC', 'SQL'],
    need: 'Support a digital commerce journey for products and customers.',
    architecture: 'ASP.NET MVC and C# application with SQL, Ajax, jQuery and Bootstrap.',
    decision: 'Use a structured MVC foundation and incremental team delivery to organize application responsibilities.',
    outcome: 'Delivered a unified commerce application. Business performance metrics were not provided.',
    link: 'https://github.com/ZamaniK/NguniFoods_Ecommerce_ASP.NET_MVC',
  },
  {
    number: '05', type: 'LEARNING PLATFORM', filter: 'app', title: 'e-School learning platform',
    description: 'A responsive learning management system designed to support online education and course workflows.',
    image: 'img/LMS.jpg', alt: 'e-School Learning Management System', stack: ['ASP.NET MVC', 'C#', 'Responsive web'],
    need: 'Provide an online platform for learning workflows.',
    architecture: 'Full-stack ASP.NET MVC application organized around learning management tasks.',
    decision: 'Use a responsive web application to support access across common screen sizes.',
    outcome: 'Delivered an online learning platform. Usage and learning outcome metrics were not available.',
    link: 'https://github.com/ZamaniK/ShoolsLMS',
  },
  {
    number: '06', type: 'API & INTEGRATION', filter: 'api', title: 'Furniture store API',
    description: 'A mobile furniture store backed by an ASP.NET Web API, separating the client experience from server-side capabilities.',
    image: 'img/xamarin.png', alt: 'Xamarin application project', stack: ['ASP.NET Web API', 'C#', 'Xamarin'],
    need: 'Connect a mobile storefront to server-side business logic and data.',
    architecture: 'Xamarin client integrated with an ASP.NET Web API backend.',
    decision: 'Keep the client and API responsibilities separate to define a clear integration boundary.',
    outcome: 'Demonstrates an API-backed mobile commerce pattern.',
    link: 'https://github.com/ZamaniK/The_Plug_Xamarin_Ecommerce',
  },
  {
    number: '07', type: 'API & INTEGRATION', filter: 'api', title: 'Imozulu weather app',
    description: 'A location-aware mobile weather experience that combines live weather and news services with Firebase-backed user features.',
    image: 'img/weatherapp.jpg', alt: 'Imozulu weather application', stack: ['Weather API', 'News API', 'Firebase'],
    need: 'Bring location-aware weather updates and related news into one mobile app.',
    architecture: 'Integrated GPS location, Weather and News APIs, Firebase Authentication and Firebase Storage.',
    decision: 'Use external APIs for current information and Firebase services for user identity and stored data.',
    outcome: 'Delivered an integrated mobile application experience.',
    link: 'https://github.com/ZamaniK/ImozuluWeatherApp',
  },
  {
    number: '08', type: 'MOBILE COMMERCE', filter: 'app', title: 'React Native e-commerce',
    description: 'A cross-platform commerce application built to explore mobile-first shopping workflows.',
    image: 'img/maxresdefault.jpg', alt: 'React Native e-commerce application demonstration', stack: ['React Native', 'JavaScript', 'Commerce'],
    need: 'Deliver an e-commerce experience across mobile platforms.',
    architecture: 'A cross-platform application built with React and React Native.',
    decision: 'Use shared application code to support web and mobile experiences.',
    outcome: 'Demonstrated cross-platform application development.',
    link: 'https://www.youtube.com/watch?v=b18I7LCZaPA',
  },
];

const capabilityGroups = [
  { id: '01', title: 'Build reliable software', description: 'Backend services, APIs and enterprise applications with clear boundaries and maintainable foundations.', skills: ['C#', '.NET', 'Python', 'FastAPI', 'JavaScript', 'RESTful APIs'] },
  { id: '02', title: 'Make data useful', description: 'Well-considered data models, analytics and reporting that bring business information into view.', skills: ['SQL Server', 'PostgreSQL', 'Power BI', 'Database design', 'Business intelligence'] },
  { id: '03', title: 'Connect and improve', description: 'Practical integration, automation and delivery practices that help systems work together.', skills: ['Docker', 'Podman', 'Git', 'System integration', 'Process automation'] },
];

const toolStackGroups = [
  {
    id: '01', title: 'Languages & frameworks', intro: 'Application development across web, mobile and backend services.',
    tools: ['C#', '.NET', 'ASP.NET MVC', 'ASP.NET Web API', 'Python', 'FastAPI', 'JavaScript', 'TypeScript', 'Node.js', 'React', 'React Native', 'Xamarin', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap'],
  },
  {
    id: '02', title: 'Data & analytics', intro: 'Database platforms, cloud data engineering and decision support.',
    tools: ['SQL Server', 'PostgreSQL', 'Azure SQL', 'Azure Data Lake Gen2', 'Azure Data Factory', 'Databricks', 'Power BI', 'Data warehousing', 'Business intelligence', 'Data governance'],
  },
  {
    id: '03', title: 'Cloud, DevOps & integration', intro: 'Tools and practices for packaging, connecting and improving systems.',
    tools: ['Azure', 'Docker', 'Podman', 'Git', 'GitHub', 'DevOps', 'REST APIs', 'System integration', 'Process automation', 'Firebase'],
  },
];

const orbitStacks = [
  { id: 'data', label: 'DATA PLATFORMS', tools: ['SQL Server', 'PostgreSQL', 'MySQL', 'Firebase', 'Azure SQL', 'Databricks', 'Azure Data Lake', 'Azure Data Factory'] },
  { id: 'api', label: 'APIS & ENGINEERING', tools: ['Webhooks', 'ASP.NET API', 'FastAPI', 'REST APIs', 'Git', 'Docker', 'Podman', 'Node.js'] },
  { id: 'bi', label: 'BUSINESS INTELLIGENCE', tools: ['Microsoft Power BI', 'Qlik', 'Tableau', 'Data Analytics', 'Reporting', 'Dashboards', 'Data Warehouse', 'Business Intelligence'] },
  { id: 'ai', label: 'AI PAIRING', tools: ['GitHub Copilot', 'OpenAI Codex', 'Claude', 'ChatGPT'] },
];

const journey = [
  { date: 'FEB 2024 - PRESENT', type: 'CAREER', title: 'Developer - Information Technology', org: 'G.U.D Holdings Pty (Ltd.) | Durban, KwaZulu-Natal', text: 'Develop software within the Information Technology department, contributing to enterprise solutions and operational needs.' },
  { date: 'APR 2023 - JAN 2024', type: 'CAREER', title: 'Data Engineer Intern', org: 'Durban University of Technology | External Modern Data Warehouse project', text: 'Collaborated on a cloud data warehouse using Azure Data Lake Gen2, Azure Data Factory, Azure SQL and Azure Storage. Completed an Honours mini-dissertation on a data lakehouse governance framework, achieving 80% in Applied Research.' },
  { date: 'JAN - DEC 2023', type: 'CAREER', title: 'Academic Assistant | Part-time', org: 'Durban University of Technology', text: 'Supported C#, ASP.NET, MVC, MVVM, HTML, CSS and JavaScript learning, and introduced data migration practices. Contributed to a 20% improvement in database-related exam scores and received a 95% student satisfaction rating.' },
  { date: 'JUL - DEC 2022', type: 'CAREER', title: 'Student Tutor | Part-time', org: 'Durban University of Technology', text: 'Supported Applications Development projects with C#, ASP.NET, MVC, MVVM, HTML, CSS, JavaScript, Bootstrap and jQuery. Introduced Azure Web hosting and Git version control; reported outcomes included 30% improved project quality, 25% faster launches and 35% fewer coding errors. Received a 98% satisfaction rating.' },
  { date: 'MAR - MAY 2022', type: 'CAREER', title: 'Marketing Assistant | Part-time', org: 'Credico Financial Services | Pietermaritzburg', text: 'Part-time marketing role in a customer-facing financial services environment.' },
  { date: 'OCT - DEC 2021', type: 'CAREER', title: 'Sales Assistant | Part-time', org: 'Webbers Clothing & Footwear | Durban', text: 'Part-time retail sales and customer service experience.' },
  { date: 'JAN - DEC 2023', type: 'EDUCATION', title: 'Bachelor of Information Communications Technology Honours', org: 'Durban University of Technology | Information Technology', text: 'Overall grade: 71%. Achieved 80% (Distinction) in Applied Research.' },
  { date: 'JAN - DEC 2022', type: 'EDUCATION', title: 'Advanced Diploma in Information and Communications Technology', org: 'Durban University of Technology | Information Technology', text: 'Graduated Cum Laude.' },
  { date: 'JAN 2018 - DEC 2021', type: 'EDUCATION', title: 'National Diploma in ICT Applications Development', org: 'Durban University of Technology | Information Technology', text: 'Undergraduate qualification focused on ICT application development.' },
];

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;

function StackIcon({ label }: { label: string }) {
  const name = label.toLowerCase();
  const iconColor = name.includes('docker') ? 'icon-docker' : name.includes('podman') ? 'icon-podman' : name.includes('git') ? 'icon-git' : name.includes('postgres') ? 'icon-postgres' : name.includes('mysql') ? 'icon-mysql' : name.includes('power bi') ? 'icon-powerbi' : name.includes('databricks') ? 'icon-databricks' : name.includes('javascript') ? 'icon-javascript' : name.includes('python') ? 'icon-python' : name.includes('fastapi') ? 'icon-fastapi' : name.includes('firebase') ? 'icon-firebase' : name.includes('qlik') ? 'icon-qlik' : name.includes('claude') ? 'icon-claude' : name.includes('copilot') ? 'icon-copilot' : name.includes('codex') || name.includes('chatgpt') ? 'icon-ai' : name.includes('c#') || name.includes('.net') || name.includes('asp.net') ? 'icon-dotnet' : name.includes('azure') ? 'icon-azure' : '';
  const props = { className: `stack-icon ${iconColor}`, 'aria-hidden': true as const };
  if (name.includes('c#') || name.includes('.net') || name.includes('asp.net')) return <SiDotnet {...props} />;
  if (name.includes('python')) return <SiPython {...props} />;
  if (name.includes('fastapi')) return <SiFastapi {...props} />;
  if (name.includes('javascript')) return <SiJavascript {...props} />;
  if (name.includes('typescript')) return <SiTypescript {...props} />;
  if (name.includes('node')) return <SiNodedotjs {...props} />;
  if (name.includes('react')) return <SiReact {...props} />;
  if (name.includes('postgres')) return <SiPostgresql {...props} />;
  if (name.includes('docker')) return <SiDocker {...props} />;
  if (name.includes('podman')) return <SiPodman {...props} />;
  if (name === 'git' || name.includes('github')) return name.includes('github') ? <SiGithub {...props} /> : <SiGit {...props} />;
  if (name.includes('firebase')) return <SiFirebase {...props} />;
  if (name.includes('mysql')) return <SiMysql {...props} />;
  if (name.includes('qlik')) return <SiQlik {...props} />;
  if (name.includes('claude')) return <SiClaude {...props} />;
  if (name.includes('copilot')) return <SiGithubcopilot {...props} />;
  if (name.includes('chatgpt') || name.includes('codex')) return <FaRobot {...props} />;
  if (name.includes('webhook')) return <FaCodeBranch {...props} />;
  if (name.includes('databricks')) return <SiDatabricks {...props} />;
  if (name.includes('bootstrap')) return <SiBootstrap {...props} />;
  if (name.includes('jquery')) return <SiJquery {...props} />;
  if (name.includes('html')) return <SiHtml5 {...props} />;
  if (name.includes('css')) return <SiCss {...props} />;
  if (name.includes('power bi') || name.includes('tableau') || name.includes('intelligence') || name.includes('analytics')) return <FaChartBar {...props} />;
  if (name.includes('sql') || name.includes('database') || name.includes('warehouse')) return <FaDatabase {...props} />;
  if (name.includes('azure')) return <FaCloud {...props} />;
  if (name.includes('api') || name.includes('integration')) return <FaCodeBranch {...props} />;
  if (name.includes('governance')) return <FaShieldAlt {...props} />;
  if (name.includes('xamarin') || name.includes('mobile')) return <FaMobileAlt {...props} />;
  if (name.includes('commerce')) return <FaStore {...props} />;
  return <FaProjectDiagram {...props} />;
}

function SocialIcon({ name }: { name: 'email' | 'linkedin' | 'github' | 'orcid' | 'cv' }) {
  const iconProps = { size: 19, 'aria-hidden': true as const };
  switch (name) {
    case 'linkedin': return <FaLinkedinIn {...iconProps} />;
    case 'github': return <FaGithub {...iconProps} />;
    case 'orcid': return <SiOrcid {...iconProps} />;
    case 'cv': return <FaFileAlt {...iconProps} />;
    default: return <FaEnvelope {...iconProps} />;
  }
}

function BrandMark() {
  return <svg className="brand-mark" viewBox="0 0 44 44" aria-hidden="true" focusable="false">
    <rect x="1" y="1" width="42" height="42" rx="12" fill="#173323" stroke="#79945c" strokeOpacity=".5"/>
    <path d="M9.5 14h11L9.5 30h11" fill="none" stroke="#f5f7ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 30V14l5.2 7 5.3-7v16" fill="none" stroke="#d8ff43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="34.5" cy="9.5" r="2" fill="#d8ff43"/>
  </svg>;
}

type ThemePreference = 'system' | 'light' | 'dark' | 'contrast';

function ThemePicker() {
  const [theme, setTheme] = useState<ThemePreference>(() => {
    try {
      const saved = window.localStorage.getItem('portfolio-theme');
      return saved === 'light' || saved === 'dark' || saved === 'contrast' ? saved : 'system';
    } catch {
      return 'system';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { window.localStorage.setItem('portfolio-theme', theme); } catch { /* Keep the choice for this session. */ }
  }, [theme]);

  const ThemeIcon = theme === 'light' ? FaSun : theme === 'dark' ? FaAdjust : FaPalette;
  return <label className="theme-picker"><ThemeIcon aria-hidden="true"/><span>Theme</span><select aria-label="Choose a color theme" value={theme} onChange={(event) => setTheme(event.target.value as ThemePreference)}><option value="system">System</option><option value="light">Light</option><option value="dark">Dark</option><option value="contrast">High contrast</option></select></label>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-25% 0px -65% 0px' });
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const links = [['about', 'About'], ['work', 'Selected work'], ['research', 'Research'], ['skills', 'Expertise'], ['toolkit', 'Tools & stacks'], ['journey', 'Journey']];
  return <><a className="skip-link" href="#main-content">Skip to content</a><header className="site-header"><a className="wordmark" href="#home" aria-label="Zamani Mthembu - home"><BrandMark/><span className="wordmark-name">ZAMANI MTHEMBU<small>SOFTWARE · DATA · RESEARCH</small></span></a><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button><nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">{links.map(([id, label]) => <a aria-current={active === id ? 'page' : undefined} className={active === id ? 'active' : ''} key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <Arrow diagonal /></a><ThemePicker /></nav></header></>;
}

function Hero() {
  const firstLine = 'Building software';
  const secondLine = 'that helps teams ';
  const emphasis = 'make better decisions.';
  const prefixLength = firstLine.length + 1 + secondLine.length;
  const titleLength = prefixLength + emphasis.length;
  const [typedChars, setTypedChars] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedChars(titleLength);
      return;
    }
    const timer = window.setInterval(() => {
      setTypedChars((current) => {
        if (current >= titleLength) {
          window.clearInterval(timer);
          return current;
        }
        return current + 1;
      });
    }, 52);
    return () => window.clearInterval(timer);
  }, [titleLength]);

  const firstTyped = Math.min(typedChars, firstLine.length);
  const secondTyped = Math.max(0, Math.min(secondLine.length, typedChars - firstLine.length - 1));
  const emphasisTyped = Math.max(0, typedChars - prefixLength);
  const cursor = <span className="typing-cursor" aria-hidden="true"/>;

  return <section className="hero" id="home"><div className="hero-grain"/><div className="hero-inner"><div className="hero-copy"><div className="availability"><span/> SOFTWARE DEVELOPER & ICT RESEARCHER <i>·</i> DURBAN, ZA</div><h1 className="hero-title-write" aria-label={`${firstLine} ${secondLine}${emphasis}`}><span className="hero-title-reserve" aria-hidden="true">{firstLine}<br/>{secondLine}<em>{emphasis}</em></span><span className="hero-title-typed" aria-hidden="true"><span className="hero-title-line">{firstLine.slice(0, firstTyped)}{typedChars <= firstLine.length && cursor}</span><br/><span>{secondLine.slice(0, secondTyped)}{typedChars > firstLine.length && typedChars <= prefixLength && cursor}</span><em>{emphasis.slice(0, emphasisTyped)}{typedChars > prefixLength && typedChars < titleLength && cursor}</em></span></h1><p className="hero-intro">I design reliable software, data platforms and digital experiences that connect business needs, governance, and practical engineering outcomes.</p><div className="hero-ctas"><a className="button button-light" href="#work">See selected work <Arrow /></a><a className="hero-link hero-social" href="https://www.linkedin.com/in/zamani-mthembu-5750371b6/" target="_blank" rel="noreferrer"><SocialIcon name="linkedin" />Connect on LinkedIn <Arrow diagonal /></a></div><div className="hero-credentials"><div><span>01 / ENGINEERING</span><b>Enterprise software</b></div><div><span>02 / RESEARCH</span><b>Data governance</b></div><div><span>03 / DELIVERY</span><b>Business outcomes</b></div></div></div><div className="hero-art"><div className="solar-system" aria-label="Slow, animated 3D-style orbits of Zamani’s data, integration, business intelligence and AI tools">{orbitStacks.map((orbit) => <div className={`orbital-ring ring-${orbit.id}`} key={orbit.id} role="group" aria-label={orbit.label}><div className="orbit-spinner">{orbit.tools.map((tool, index) => <div className={`orbit-tool orbit-tool-${index + 1}`} key={tool} title={tool} aria-label={tool}><span className="orbit-tool-face"><StackIcon label={tool}/></span></div>)}</div></div>)}<div className="solar-core"><span>BUSINESS<br/>SYSTEMS</span><b>ZM</b><small>DATA × SOFTWARE</small></div><div className="solar-spark spark-one"/><div className="solar-spark spark-two"/><div className="solar-spark spark-three"/></div><div className="art-caption"><span>LIVE TOOL ECOSYSTEM</span><span>DATA → INSIGHT → ACTION</span></div></div></div><div className="hero-scroll"><span>SCROLL TO EXPLORE</span><i/><span>THOUGHTFUL TECHNOLOGY, REAL-WORLD IMPACT</span></div></section>;
}

function About() {
  return <section className="about section-pad" id="about"><div className="section-label"><span>01</span> PROFILE</div><div className="about-grid"><h2>Research-minded.<br/><em>Business-aware.</em></h2><div className="about-copy"><p className="lead-copy">I’m Zamani Khulekani Mthembu, a software developer and ICT professional with an Advanced Diploma in Information and Communications Technology (Cum Laude) and a Bachelor of Information Communications Technology Honours (71%, with 80% in Applied Research).</p><p>I build software and data systems that help organisations turn complexity into clear operational decisions, scalable applications, and more reliable digital services.</p><div className="about-stats"><div><b>01</b><span>Published<br/>book chapter</span></div><div><b>02</b><span>Academic<br/>distinctions</span></div><div><b>03</b><span>Core focus areas<br/>data, software, delivery</span></div></div></div></div></section>;
}

function ProofSection() {
  return <section className="proof section-pad" id="proof">
    <div className="section-label"><span>02</span> WHY IT WORKS</div>
    <div className="proof-intro"><div><p className="eyebrow">ENGINEERING WITH CONTEXT</p><h2>Business needs become<br/><em>systems people can trust.</em></h2></div><p>I bring business understanding, software engineering and research-led data thinking into one delivery approach—so the result solves the real problem and can keep improving.</p></div>
    <div className="proof-grid">
      <article className="proof-card"><div className="proof-card-top"><span>01 / UNDERSTAND</span><FaProjectDiagram aria-hidden="true"/></div><h3>Start with the work</h3><p>Map requirements to real users, operational workflows and constraints before choosing the technical approach.</p></article>
      <article className="proof-card"><div className="proof-card-top"><span>02 / MAKE DATA USEFUL</span><FaDatabase aria-hidden="true"/></div><h3>Design for trust and insight</h3><p>Bring database design, data governance, analytics and reporting together to support dependable information and better decisions.</p></article>
      <article className="proof-card"><div className="proof-card-top"><span>03 / DELIVER & IMPROVE</span><FaCodeBranch aria-hidden="true"/></div><h3>Connect the whole system</h3><p>Build and integrate applications, APIs and data platforms, then support and refine them across the delivery lifecycle.</p></article>
    </div>
    <div className="proof-evidence"><div className="proof-evidence-heading"><span>PROVEN THROUGH LEARNING & DELIVERY</span><a href="#research">Explore research <Arrow diagonal/></a></div><div className="proof-evidence-grid"><div><b>80%</b><span>Honours Applied Research</span></div><div><b>20%</b><span>Improvement in database exam scores</span></div><div><b>95%</b><span>Academic Assistant satisfaction</span></div><div><b>98%</b><span>Student Tutor satisfaction</span></div></div></div>
    <div className="proof-method" aria-label="Delivery lifecycle"><span>REQUIREMENTS</span><i>→</i><span>DATA & DESIGN</span><i>→</i><span>BUILD & INTEGRATE</span><i>→</i><span>SUPPORT & IMPROVE</span></div>
  </section>;
}

function ValueSection() {
  const valueItems = [
    { title: 'Enterprise applications & APIs', description: 'Build backend services and business applications around real workflows, with clear architecture that is easier to extend and support.', icon: <FaProjectDiagram aria-hidden="true"/>, stack: ['C# / .NET', 'Python / FastAPI', 'REST APIs'], outcome: 'Maintainable software, ready to evolve', index: '01' },
    { title: 'Data platforms & decision support', description: 'Shape connected data foundations, reporting platforms and dashboards that help teams see what is happening and decide what to do next.', icon: <FaChartBar aria-hidden="true"/>, stack: ['SQL Server', 'PostgreSQL', 'Power BI'], outcome: 'Clearer visibility and trusted insight', index: '02' },
    { title: 'Integration & process automation', description: 'Connect services and reduce repetitive steps with API integrations, data movement and practical workflow automation.', icon: <FaCodeBranch aria-hidden="true"/>, stack: ['System integration', 'Docker / Podman', 'Git'], outcome: 'More consistent, connected processes', index: '03' },
  ];

  return <section className="value section-pad" id="value"><div className="section-label"><span>01</span> WHAT I DELIVER</div><div className="section-heading"><div><p className="eyebrow">SOLUTIONS BUILT AROUND THE WORK</p><h2>From business challenge<br/>to <em>useful technology.</em></h2></div><p>I turn complex requirements into scalable software and data solutions—designed for real users, operational needs and long-term improvement.</p></div><div className="value-grid">{valueItems.map((item) => <article className="value-card reveal" key={item.title}><div className="value-card-top"><span className="value-index">{item.index} / CAPABILITY</span><span className="value-icon">{item.icon}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="value-stack">{item.stack.map((skill) => <span key={skill}>{skill}</span>)}</div><div className="value-outcome"><span>DESIGNED TO ENABLE</span><b>{item.outcome}</b></div></article>)}</div><a className="value-link" href="#work">Explore project case studies <Arrow diagonal/></a></section>;
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return <article className={`project-card project-${project.filter} ${project.featured ? 'featured' : ''}`}><div className="project-image"><img src={project.image} alt={project.alt}/><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span><span className="image-arrow"><Arrow diagonal /></span><span className="image-caption">CASE STUDY&nbsp; / &nbsp;{project.number}</span></div><div className="project-body"><div className="project-kicker"><span>{project.filter === 'data' ? '▤' : project.filter === 'api' ? '⌘' : '▣'}</span>{project.filter === 'data' ? 'DATA & ANALYTICS' : project.filter === 'api' ? 'CONNECTED SYSTEMS' : 'APPLICATION DEVELOPMENT'}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.stack.map((skill) => <span className="stack-tag" key={skill}><StackIcon label={skill}/><span>{skill}</span></span>)}</div><details className="project-details"><summary>View project details <span>+</span></summary><div className="case-study"><p><b>Problem space</b>{project.need}</p><p><b>Architecture & approach</b>{project.architecture}</p><p><b>Engineering decision</b>{project.decision}</p><p><b>Value delivered</b>{project.outcome}</p></div></details>{project.link && <a className="github-link" href={project.link} target="_blank" rel="noreferrer">{project.link.includes('youtube.com') ? 'Watch project demo' : 'View source project'} <Arrow diagonal /></a>}</div></article>;
}

function Work() {
  const [filter, setFilter] = useState('all');
  const filters: { id: string; label: string; count: number }[] = [
    { id: 'all', label: 'All Work', count: projects.length },
    { id: 'data', label: 'Data', count: projects.filter((project) => project.filter === 'data').length },
    { id: 'app', label: 'Applications', count: projects.filter((project) => project.filter === 'app').length },
    { id: 'api', label: 'API & Integration', count: projects.filter((project) => project.filter === 'api').length },
  ];
  const shown = projects.filter((project) => filter === 'all' || project.filter === filter);
  return <section className="work section-pad" id="work"><div className="section-label"><span>02</span> SELECTED WORK</div><div className="section-heading"><div><p className="eyebrow">ENGINEERING WITH INTENTION</p><h2>Complex problems.<br/><em>Useful outcomes.</em></h2></div><p>Case studies in enterprise data, application development and integration—designed to make the thinking behind each solution visible.</p></div><div className="work-toolbar"><span className="project-count">SHOWING <b>{String(shown.length).padStart(2, '0')}</b> OF {String(projects.length).padStart(2, '0')} PROJECTS</span><div className="filters" role="group" aria-label="Filter selected work">{filters.map(({ id, label, count }) => <button type="button" key={id} aria-pressed={filter === id} className={`${filter === id ? 'selected' : ''} filter-${id}`} onClick={() => setFilter(id)}><span>{label}</span><small>{String(count).padStart(2, '0')}</small></button>)}</div></div><div className="project-grid">{shown.map((project) => <ProjectCard key={project.number} project={project}/>)}</div><a className="all-github" href="https://github.com/ZamaniK" target="_blank" rel="noreferrer"><span>MORE CODE, EXPERIMENTS & LEARNING</span>Explore GitHub <Arrow diagonal /></a></section>;
}

function Research() {
  return <section className="research section-pad" id="research"><div className="research-side"><div className="section-label light-label"><span>03</span> RESEARCH & RECOGNITION</div><p className="eyebrow">PUBLISHED WORK · 2024</p><div className="publication-mark">CH.<br/><b>07</b></div><div className="research-aside-note">DATA SYSTEMS<br/>FOR PUBLIC VALUE</div></div><div className="research-main"><h2>Data platforms<br/>with <em>purpose.</em></h2><p className="research-lead">Developing a Data Lakehouse for a South African Government-Sector Training Authority</p><p className="research-book">In <em>Machine Learning and Data Science Techniques for Effective Government Service Delivery</em></p><p className="research-description">My published book chapter explores lakehouse development for a South African public-sector training authority. This research complements my practical interest in governance, data management and analytics that supports better institutional decisions.</p><a className="doi-link" href="https://doi.org/10.4018/978-1-6684-9716-6.ch007" target="_blank" rel="noreferrer">10.4018/978-1-6684-9716-6.ch007 <Arrow diagonal /></a><div className="research-rule"/><div className="research-contribution"><span>UNIVERSITY DEPARTMENTAL PROJECT</span><p>Contributed to the analysis, design and implementation of data management solutions in a data warehousing project.</p></div></div></section>;
}

function Skills() {
  return <section className="skills section-pad" id="skills"><div className="section-label"><span>04</span> CAPABILITIES</div><div className="section-heading"><div><p className="eyebrow">A SYSTEMS-LEVEL TOOLKIT</p><h2>From data model<br/>to <em>user impact.</em></h2></div><p>Technical breadth grounded in problem-solving, careful analysis and a focus on why the system needs to exist.</p></div><div className="capability-grid">{capabilityGroups.map((group) => <article className="capability-card reveal" key={group.id}><div className="cap-top"><span>{group.id} / 03</span><span className="cap-symbol">{group.id === '01' ? '⌘' : group.id === '02' ? '▤' : '↗'}</span></div><h3>{group.title}</h3><p>{group.description}</p><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div><div className="principles"><span>HOW I WORK</span>{['Analytical problem solving', 'Software architecture', 'Data governance', 'Lifecycle ownership', 'Continuous learning'].map((principle) => <b key={principle}>{principle}</b>)}</div></section>;
}

function Toolkit() {
  const totalTools = toolStackGroups.reduce((total, group) => total + group.tools.length, 0);
  return <section className="toolkit section-pad" id="toolkit"><div className="section-label"><span>05</span> TOOLS & STACKS</div><div className="section-heading"><div><p className="eyebrow">THE TECHNOLOGY I WORK WITH</p><h2>A practical, evolving<br/><em>engineering toolkit.</em></h2></div><p>Languages, frameworks, data platforms and delivery tools drawn from my project work, research and professional experience.</p></div><div className="toolkit-summary"><span>{String(totalTools).padStart(2, '0')} TOOLS & TECHNOLOGIES</span><span>GROUPED BY HOW I USE THEM</span></div><div className="toolkit-grid">{toolStackGroups.map((group) => <article className="toolkit-card" key={group.id}><div className="toolkit-card-head"><span>{group.id} / 03</span><span className="toolkit-orbit" aria-hidden="true">✳</span></div><h3>{group.title}</h3><p>{group.intro}</p><div className="toolkit-items">{group.tools.map((tool) => <span className="tool-chip" key={tool}><StackIcon label={tool}/><span>{tool}</span></span>)}</div></article>)}</div><p className="toolkit-note">Toolset reflects technologies used across the portfolio and professional experience.</p></section>;
}

function Journey() {
  return <section className="journey section-pad" id="journey"><div className="section-label"><span>06</span> EXPERIENCE & EDUCATION</div><div className="section-heading"><div><p className="eyebrow">A CAREER IN PROGRESS</p><h2>Grounded in learning.<br/><em>Growing through work.</em></h2></div><p>From Information Technology studies to enterprise development and research, each step has widened my view of what useful technology can do.</p></div><div className="timeline">{journey.map((item, i) => <article className="timeline-entry" key={item.title}><div className="timeline-date">{item.date}</div><div className="timeline-marker"><span/></div><div className="timeline-content"><div className="timeline-type">{item.type} / 0{i + 1}</div><h3>{item.title}</h3><p className="timeline-org">{item.org}</p><p className="timeline-description">{item.text}</p></div></article>)}</div><div className="distinctions"><span>ACADEMIC QUALIFICATIONS</span><b>National Diploma in ICT Applications Development</b><b>Advanced Diploma in ICT <i>|</i> Cum Laude</b><b>Bachelor of ICT Honours <i>|</i> 71% overall</b><b>Applied Research <i>|</i> 80%</b></div></section>;
}

function Future() {
  return <section className="future section-pad"><div className="future-index">CAREER NORTH STAR<br/>07 / THE LONG VIEW</div><div><p className="eyebrow">CURIOSITY, CRAFT, CONTRIBUTION</p><h2>Build systems.<br/><em>Help shape what’s next.</em></h2><p className="future-copy">My ambition is to grow into a Senior Software Developer, then a Solutions Architect, and ultimately a Technology Leader—designing enterprise-scale systems, driving digital transformation and bringing research-informed thinking to modern software practice.</p><div className="career-path"><span>SOFTWARE DEVELOPER</span><i>→</i><span>SENIOR DEVELOPER</span><i>→</i><span>SOLUTIONS ARCHITECT</span><i>→</i><span>TECHNOLOGY LEADER</span></div></div></section>;
}

function Contact() {
  const contactLinks = [
    { href: 'mailto:Zamanikat100@gmail.com', label: 'Email', icon: 'email' as const },
    { href: 'https://www.linkedin.com/in/zamani-mthembu-5750371b6/', label: 'LinkedIn', icon: 'linkedin' as const, external: true },
    { href: 'https://github.com/ZamaniK', label: 'GitHub', icon: 'github' as const, external: true },
    { href: 'https://orcid.org/0000-0002-5468-9793', label: 'ORCID', icon: 'orcid' as const, external: true },
    { href: 'cv.html', label: 'CV', icon: 'cv' as const },
  ];

  return <section className="contact section-pad" id="contact"><div className="section-label"><span>08</span> CONTACT</div><div className="contact-panel"><div className="contact-main"><p className="eyebrow">OPEN TO GOOD PROBLEMS</p><h2>Let’s make something<br/><em>work better.</em></h2><p className="contact-summary">I’m available for software development, data platform work, research-informed product thinking, and digital transformation conversations.</p><div className="contact-actions"><a className="contact-cta" href="mailto:Zamanikat100@gmail.com?subject=Project%20Inquiry">Discuss a software challenge <Arrow diagonal /></a><a className="secondary-cta" href="cv.html">Download CV <Arrow diagonal /></a></div></div><div className="contact-points"><div><span>01</span><p>System design and software delivery</p></div><div><span>02</span><p>Data architecture and decision support</p></div><div><span>03</span><p>Research-informed product and process improvement</p></div></div></div><div className="contact-footer">{contactLinks.map((link) => <a key={link.label} className={`social-link social-${link.icon}`} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}><SocialIcon name={link.icon} /><span>{link.label}</span><Arrow diagonal /></a>)}</div></section>;
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return <><Header/><main id="main-content"><Hero/><About/><ProofSection/><ValueSection/><Work/><Research/><Skills/><Toolkit/><Journey/><Future/><Contact/></main><footer className="footer"><a className="footer-brand" href="#home" aria-label="Zamani Mthembu - back to top"><BrandMark/></a><p>SOFTWARE · DATA · RESEARCH</p><span>© {new Date().getFullYear()} ZAMANI MTHEMBU</span><a href="#home">BACK TO TOP ↑</a></footer></>;
}
