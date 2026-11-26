export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "ai-ml" | "web" | "blockchain" | "analytics";
  categoryLabel: string;
  tags: string[];
  coverImage: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  status: "live" | "completed";
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  iconUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  color: string;
  icon: "brain" | "code" | "blocks" | "database" | "sparkles";
  skills: SkillItem[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
}

export const profile = {
  name: "Krisha Raval",
  shortMonogram: "K.",
  splashMonogram: "K.",
  email: "krisha.raval4406@gmail.com",
  phone: "+91 93134 79022",
  location: "Rajkot, Gujarat, India – 360009",
  locationShort: "Rajkot, India (Open to Remote)",
  role: "AI Engineer & Web/Mobile Developer",
  heroSubtitles: [
    "Krisha Raval.",
    "an AI Engineer.",
    "a Web & Mobile App Developer.",
    "an ML & NLP Builder.",
    "a Blockchain Developer.",
    "Krisha Raval.",
  ],
  heroDescription:
    "AI Engineer in training pursuing B.Tech in Computer Engineering (Artificial Intelligence), building intelligent ML systems, Web3 solutions, and custom websites & mobile applications.",
  aboutHeadline: "I build intelligent systems, websites & mobile apps that blend AI and human impact.",
  aboutSummary:
    "AI Engineer in training, currently pursuing a Bachelor's degree in Computer Engineering – Artificial Intelligence at Marwadi University. Skilled in Python, AI/ML, Blockchain, and building responsive websites and mobile applications. Seeking opportunities for innovation and practical industrial experience.",
  aboutExtended:
    "My journey spans from foundational Computer Engineering during my Diploma at Darshan University to specializing in Artificial Intelligence at Marwadi University (NAAC A+). Alongside publishing a medical hardware patent, publishing an NLP research paper, and completing an internship at TSS Consultancy Pvt. Ltd., I build practical websites, mobile applications, AI/NLP systems, and decentralized Web3 solutions.",
  mission:
    "To engineer intelligent, accessible websites, mobile applications, and AI systems that bridge real-world communication and healthcare gaps—turning complex machine learning and Web3 concepts into tools people can effortlessly rely on.",
  vision:
    "A future where assistive AI, early mental-health screening, and transparent decentralized technologies are widely accessible to communities everywhere, especially across emerging healthcare and educational ecosystems.",
  socials: {
    github: "https://github.com/krisharaval",
    linkedin: "https://www.linkedin.com/in/krisha-raval",
    email: "mailto:krisha.raval4406@gmail.com",
  },
  resumePdf: "/krisha-raval-resume.pdf",
};

export const techStackIcons = [
  {
    name: "Python",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "React / Mobile",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Solidity",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
  },
  {
    name: "HTML5",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "MySQL",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "TensorFlow",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Web3.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/web3js/web3js-original.svg",
  },
  {
    name: "Git",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "VS Code",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  {
    name: "Linux",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
];

export const projects: Project[] = [
  {
    id: "signverse-ai",
    title: "SignVerse AI",
    description:
      "Real-time bidirectional communication platform powered by AI to bridge the communication gap between hearing and speech-impaired individuals using Indian Sign Language (ISL).",
    longDescription:
      "Developed an AI-powered real-time bidirectional communication platform designed to bridge the communication gap between hearing and speech-impaired individuals using Indian Sign Language (ISL). The system translates ISL hand gestures into readable text/speech and converts spoken language back into visual sign representations for inclusive, two-way conversation.",
    category: "ai-ml",
    categoryLabel: "AI / Computer Vision",
    tags: ["Python", "TensorFlow", "JavaScript", "HTML5", "CSS3"],
    coverImage: "/images/projects/signverse-ai.png",
    featured: true,
    year: "2026",
    status: "completed",
    metrics: [
      { label: "Domain", value: "AI & Accessibility" },
      { label: "Language", value: "Indian Sign Language" },
      { label: "Mode", value: "Real-Time Bidirectional" },
    ],
    challenge:
      "Hearing and speech-impaired individuals frequently face friction in everyday and healthcare interactions because most translation tools focus only on one-way American Sign Language recognition rather than real-time Indian Sign Language.",
    solution:
      "Built a bidirectional pipeline combining computer vision gesture recognition with a clean browser interface, enabling instant ISL-to-text translation alongside speech/text-to-sign output.",
    highlights: [
      "Real-time Indian Sign Language (ISL) gesture recognition",
      "Bidirectional translation between signers and non-signers",
      "Accessible, low-latency web interface built with HTML5, CSS3 & JavaScript",
    ],
  },
  {
    id: "talkwell",
    title: "TalkWell",
    description:
      "AI-based mental health detection platform using Natural Language Processing (NLP) to identify early signs of mental health concerns from user-generated text. Published Research Paper (May 2026).",
    longDescription:
      "Built an NLP-powered mental health detection system that analyzes user-generated text to surface early indicators of emotional distress and mental health concerns. Backed by the published research paper 'TalkWell – AI-Based Mental Health Detection Using NLP' (8 May 2026), designed with a supportive, privacy-conscious workflow aimed at timely early intervention.",
    category: "ai-ml",
    categoryLabel: "AI / NLP & Research",
    tags: ["Python", "Machine Learning", "NLP", "HTML5"],
    coverImage: "/images/projects/talkwell.png",
    featured: true,
    year: "2026",
    status: "completed",
    metrics: [
      { label: "Domain", value: "Healthcare NLP" },
      { label: "Research Paper", value: "Published 8 May 2026" },
      { label: "Goal", value: "Early Intervention" },
    ],
    challenge:
      "Early signs of stress, anxiety, or depression often go unnoticed in everyday written text until symptoms escalate.",
    solution:
      "Engineered an NLP classification pipeline that preprocesses text, extracts linguistic and sentiment patterns, and flags potential risk levels with clear, supportive context.",
    highlights: [
      "Published Research Paper: 'TalkWell – AI-Based Mental Health Detection Using NLP' (8 May 2026)",
      "Automated sentiment and emotional distress pattern detection",
      "NLP text preprocessing and feature extraction in Python",
    ],
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System (HMS)",
    description:
      "Web Development project built with Firebase, HTML5, and CSS3 featuring patient records, appointment scheduling, doctor/pharmacy workflows, and role-based dashboards.",
    longDescription:
      "Engineered a comprehensive Hospital Management System (HMS) for the Web Development subject using Firebase, HTML5, CSS3, and JavaScript. Provides real-time cloud database synchronization and role-based workflows for Admins, Doctors, Patients, and Pharmacy staff to manage registrations, appointments, and medical records.",
    category: "web",
    categoryLabel: "Web Development / Healthcare",
    tags: ["Firebase", "HTML5", "CSS3", "JavaScript"],
    coverImage: "",
    featured: true,
    year: "2026",
    status: "completed",
    metrics: [
      { label: "Subject", value: "Web Development" },
      { label: "Backend", value: "Firebase" },
      { label: "Frontend", value: "HTML5 & CSS3" },
    ],
    challenge:
      "Traditional hospital record and appointment workflows often suffer from manual paperwork, fragmented patient histories, and slow coordination between doctors and pharmacies.",
    solution:
      "Built a responsive web application backed by Firebase Realtime/Firestore database and clean HTML5/CSS3 interfaces for seamless patient registration, appointment management, and role-based portals.",
    highlights: [
      "Doctor, Patient, Admin, and Pharmacy management workflows",
      "Real-time patient registration, medical history tracking, and appointment scheduling via Firebase",
      "Responsive web interface crafted with HTML5, CSS3 & JavaScript",
    ],
  },
  {
    id: "house-price-predictor",
    title: "House Price Predictor – Advanced Java",
    description:
      "Implemented a regression-based GUI application in Advanced Java predicting house prices using location, size, and price trend features.",
    longDescription:
      "Developed an Advanced Java desktop GUI application powered by regression modeling to estimate real estate prices. Users input property attributes such as location, square-footage size, and market price trend indicators to receive instant, data-driven price predictions.",
    category: "ai-ml",
    categoryLabel: "Machine Learning / Java GUI",
    tags: ["Java", "Machine Learning", "Regression", "GUI"],
    coverImage: "",
    featured: true,
    year: "2025",
    status: "completed",
    metrics: [
      { label: "Language", value: "Advanced Java" },
      { label: "Model", value: "Linear Regression" },
      { label: "Interface", value: "Interactive GUI" },
    ],
    challenge:
      "Homebuyers and analysts need a straightforward way to estimate property values based on multiple correlated factors like location, area, and historical price trends.",
    solution:
      "Implemented a multi-feature regression model integrated into a clean Advanced Java GUI that computes and displays predicted house prices in real time.",
    highlights: [
      "Regression-based predictive model using location, size, and price trend features",
      "Interactive desktop GUI built with Advanced Java",
      "Clean input validation and instant price estimation output",
    ],
  },
  {
    id: "defi-bank",
    title: "DeFi Bank DApp",
    description:
      "Decentralized banking application enabling users to deposit/stake tokens, earn interest rewards, borrow against collateral, and withdraw funds seamlessly without a central bank.",
    longDescription:
      "Built a decentralized finance (DeFi) banking DApp using Solidity (DeFiBank.sol) and Web3 frontend integration. Users connect MetaMask to stake ERC-20 tokens, track real-time staking and reward balances, and withdraw or borrow against collateral transparently on-chain.",
    category: "blockchain",
    categoryLabel: "Blockchain / DeFi",
    tags: ["Solidity", "Ethereum", "Web3", "JavaScript", "HTML5", "CSS3"],
    coverImage: "",
    featured: false,
    year: "2026",
    status: "completed",
    metrics: [
      { label: "Contract", value: "DeFiBank.sol" },
      { label: "Core Features", value: "Stake, Reward & Borrow" },
      { label: "Wallet", value: "MetaMask / Web3" },
    ],
    challenge:
      "Providing transparent, non-custodial staking and interest distribution without relying on centralized financial intermediaries.",
    solution:
      "Implemented DeFiBank.sol with on-chain staking mappings, reward issuance logic, and a real-time Web3 dashboard for deposit and withdrawal operations.",
    highlights: [
      "On-chain token staking and automated reward calculation",
      "MetaMask wallet connection with real-time balance dashboard",
      "Transparent deposit, borrow, and withdrawal smart contract flows",
    ],
  },
  {
    id: "degree-verification",
    title: "Degree Certificate Verification",
    description:
      "Tamper-proof blockchain system for educational institutions to issue verifiable digital degrees so employers can instantly authenticate academic credentials.",
    longDescription:
      "Developed a decentralized Degree Certificate Verification platform powered by Solidity (DegreeVerification.sol) and cryptographic hashing/IPFS concepts. Universities issue verifiable degree records on-chain while employers and recruiters can verify authenticity in seconds without manual paperwork.",
    category: "blockchain",
    categoryLabel: "Blockchain / EdTech",
    tags: ["Solidity", "Ethereum", "Web3", "JavaScript", "HTML5"],
    coverImage: "",
    featured: false,
    year: "2026",
    status: "completed",
    metrics: [
      { label: "Contract", value: "DegreeVerification.sol" },
      { label: "Use Case", value: "Anti-Forgery Credentials" },
      { label: "Verification", value: "Instant Public Check" },
    ],
    challenge:
      "Academic degree forgery and slow manual verification create friction for both universities and hiring organizations.",
    solution:
      "Stored cryptographic certificate hashes on-chain via DegreeVerification.sol with dedicated portals for university issuance and instant employer verification.",
    highlights: [
      "Tamper-proof on-chain certificate hash registry",
      "University admin issuance and public employer verification portal",
      "Eliminates fake degrees with zero-trust cryptographic proof",
    ],
  },
  {
    id: "agri-direct-connect",
    title: "AgriDirect & Smart Farming",
    description:
      "Blockchain supply chain and smart farming platform connecting farmers directly with buyers while ensuring transparent crop provenance and fair pricing.",
    longDescription:
      "Built a decentralized agriculture supply-chain DApp (AgriDirectConnect.sol & AgriSupplyChain.sol) paired with smart farming insights. Enables farmers to list produce directly on-chain, track supply-chain state transitions transparently, and eliminate exploitative middlemen.",
    category: "blockchain",
    categoryLabel: "Blockchain / AgriTech",
    tags: ["Solidity", "Ethereum", "Web3", "JavaScript", "HTML5"],
    coverImage: "",
    featured: false,
    year: "2026",
    status: "completed",
    metrics: [
      { label: "Contracts", value: "AgriDirectConnect & SupplyChain" },
      { label: "Domain", value: "Smart Farming" },
      { label: "Impact", value: "Direct Farmer-to-Buyer" },
    ],
    challenge:
      "Farmers often lose significant margins to opaque middlemen while consumers lack verifiable origin tracking for produce.",
    solution:
      "Created Solidity smart contracts governing crop listing, direct purchase settlements, and immutable supply-chain provenance stages.",
    highlights: [
      "Dual smart contract architecture (AgriDirectConnect.sol & AgriSupplyChain.sol)",
      "Transparent farm-to-market state tracking",
      "Interactive Web3 storefront for direct agricultural trade",
    ],
  },
  {
    id: "smart-trading-vault",
    title: "Smart Trading Vault",
    description:
      "Automated AI-assisted decentralized trading vault combining off-chain market signal analysis with non-custodial smart contract trade execution.",
    longDescription:
      "Engineered a decentralized Smart Trading Vault (SmartTradingVault.sol) where users deposit funds into a non-custodial vault and authorized AI/algorithmic strategy signals trigger verifiable on-chain swaps and portfolio tracking.",
    category: "blockchain",
    categoryLabel: "Blockchain & AI Trading",
    tags: ["Solidity", "Ethereum", "Python", "Web3", "JavaScript"],
    coverImage: "",
    featured: false,
    year: "2026",
    status: "completed",
    metrics: [
      { label: "Contract", value: "SmartTradingVault.sol" },
      { label: "Model", value: "Non-Custodial Vault" },
      { label: "Signals", value: "AI-Driven Execution" },
    ],
    challenge:
      "Automated crypto trading bots typically require handing over private keys or funds to centralized platforms.",
    solution:
      "Built a non-custodial Solidity vault restricting execution strictly to authorized trade functions while users retain full deposit/withdrawal control.",
    highlights: [
      "Non-custodial vault deposits and withdrawals via SmartTradingVault.sol",
      "Authorized executor pattern for AI-generated trade triggers",
      "Real-time portfolio & trade history monitoring dashboard",
    ],
  },
  {
    id: "decentralized-voting",
    title: "Decentralized Voting System",
    description:
      "Transparent, immutable one-wallet-one-vote election DApp ensuring tamper-proof ballots and real-time public result verification.",
    longDescription:
      "Developed a decentralized voting application powered by Solidity (Election.sol) on Ethereum. Enforces strict one-wallet-one-vote integrity on-chain, supports admin candidate management, and displays live tamper-proof election tallies.",
    category: "blockchain",
    categoryLabel: "Blockchain / Governance",
    tags: ["Solidity", "Ethereum", "Web3", "JavaScript", "HTML5"],
    coverImage: "",
    featured: false,
    year: "2026",
    status: "completed",
    metrics: [
      { label: "Contract", value: "Election.sol" },
      { label: "Integrity", value: "One-Wallet-One-Vote" },
      { label: "Results", value: "Real-Time On-Chain" },
    ],
    challenge:
      "Centralized digital voting systems are vulnerable to database manipulation and lack public auditability.",
    solution:
      "Implemented Election.sol with voter address tracking mappings so each verified wallet can cast a single immutable ballot.",
    highlights: [
      "Immutable vote recording with duplicate-vote prevention",
      "Admin panel for candidate registration & election lifecycle",
      "Live transparent vote-count visualization",
    ],
  },
  {
    id: "cpp-comment-remover",
    title: "C/C++ Comment Remover (Compiler Design)",
    description:
      "Lexical analyzer & DFA state machine tool built with Lex/Flex, C, Python, and an interactive web IDE to strip C/C++ comments while preserving strings and escape sequences.",
    longDescription:
      "Built a complete Compiler Design mini-project featuring three implementations of a C/C++ Comment Remover: an industrial Lex/Flex specification (comment_remover.l) with exclusive start states, pure C and Python Deterministic Finite Automaton (DFA) engines, and an interactive browser IDE visualizer.",
    category: "web",
    categoryLabel: "Compiler Design & Web IDE",
    tags: ["Python", "JavaScript", "HTML5", "CSS3", "C/C++"],
    coverImage: "",
    featured: false,
    year: "2025",
    status: "completed",
    metrics: [
      { label: "Engines", value: "Lex/Flex, C & Python DFA" },
      { label: "States", value: "6-State Finite Automaton" },
      { label: "Interface", value: "Interactive Web IDE" },
    ],
    challenge:
      "Naively stripping // or /* */ breaks string literals (e.g., URLs like https://...), character constants, and escaped quotes.",
    solution:
      "Modeled a 6-state DFA (NORMAL, SLASH_FOUND, SINGLE_LINE_COMM, MULTI_LINE, STAR_IN_COMM, STRING/CHAR) across Lex, C, Python, and JS.",
    highlights: [
      "Preserves strings, char constants, escaped quotes, and division operators",
      "Implemented in Lex/Flex, C, Python, and interactive JavaScript Web IDE",
      "Real-time analytics and edge-case preset testing in browser",
    ],
  },
  {
    id: "netflix-powerbi-dashboard",
    title: "Netflix Content Analytics Dashboard",
    description:
      "Business Analytics project developed using Microsoft Power BI to analyze Netflix's global catalog across genres, ratings, release years, and country production.",
    longDescription:
      "Designed and built for the Business Analytics subject using Microsoft Power BI (Netflix_Dashboard.pbix) to explore Netflix's movie and TV show catalog. Transforms raw content metadata into clear KPIs, genre breakdowns, rating distributions, and geographic trends.",
    category: "analytics",
    categoryLabel: "Business Analytics / Power BI",
    tags: ["Power BI", "Business Analytics", "Data Visualization"],
    coverImage: "",
    featured: false,
    year: "2026",
    status: "completed",
    metrics: [
      { label: "Subject", value: "Business Analytics" },
      { label: "Software", value: "Microsoft Power BI" },
      { label: "Insights", value: "Genres, Ratings & Trends" },
    ],
    challenge:
      "Large entertainment catalog datasets are difficult to interpret without structured filtering across content type, region, and release timeline.",
    solution:
      "Built a multi-visual Power BI report with interactive slicers, trend charts, and KPI cards for rapid exploratory business analysis.",
    highlights: [
      "Movies vs. TV Shows distribution and growth-over-time visuals",
      "Top genres, maturity ratings, and country-wise content breakdown",
      "Interactive Power BI slicers for dynamic cross-filtering",
    ],
  },
  {
    id: "cognitive-bias-detection",
    title: "Cognitive Bias Detection",
    description:
      "Web Mining project designed to identify and classify cognitive biases in web datasets and text using pattern recognition techniques.",
    longDescription:
      "Engineered for the Web Mining subject as a pattern recognition and text mining model that analyzes structured and textual web inputs to identify, categorize, and surface cognitive biases for clearer analytical decision-making.",
    category: "analytics",
    categoryLabel: "Web Mining & Pattern Recognition",
    tags: ["Python", "Web Mining", "Machine Learning"],
    coverImage: "/images/projects/cognitive-bias.png",
    featured: false,
    year: "2025",
    status: "completed",
    metrics: [
      { label: "Subject", value: "Web Mining" },
      { label: "Technique", value: "Pattern Recognition" },
    ],
    challenge:
      "Subtle cognitive biases in web content and human writing logs are hard to spot manually across large volumes of data.",
    solution:
      "Applied web mining feature engineering and pattern recognition classifiers in Python to systematically detect and label bias categories.",
    highlights: [
      "Pattern recognition pipeline for multi-class bias identification",
      "Web data preprocessing and feature mining in Python",
      "Clear classification reporting for downstream evaluation",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const achievementsAndCertifications = [
  {
    title: 'Patent Published — "Automated Medical Storage and Dispensing System"',
    issuer: "Published Intellectual Property — Healthcare & Automation Tech",
    year: "Jan 2026",
  },
  {
    title: 'Research Paper — "TalkWell – AI-Based Mental Health Detection Using NLP"',
    issuer: "Published Research Paper — Natural Language Processing & Healthcare AI",
    year: "8 May 2026",
  },
  {
    title: "Deep Learning for Developers & NLP Specialization (4 Certifications)",
    issuer: "Infosys Springboard — Python NLP, NLP Fundamentals, NLP for Developers, Deep Learning",
    year: "Jun–Aug 2026",
  },
  {
    title: "Microsoft Power BI: Data Analysis & AI Dashboards & Business Intelligence",
    issuer: "Udemy & Infosys Springboard — Verified BI & Data Analytics Certifications",
    year: "Jun 2026",
  },
  {
    title: "Google for Education AI Implementation Program & AI Tools Workshop",
    issuer: "upEducators (Google for Education Partner) & be10X",
    year: "2026",
  },
  {
    title: "SAMPARK'26 (IEEE Gujarat Section) & Rural Healthcare Hackathon",
    issuer: "IEEE Student Branch PDEU & Healthcare Tech Hackathon",
    year: "2026",
  },
];

export const certificates: CertificateItem[] = [
  {
    title: "Natural Language Processing for Developers",
    issuer: "Infosys Springboard",
    date: "August 3, 2026",
  },
  {
    title: "AI Tools and ChatGPT Workshop",
    issuer: "be10X",
    date: "August 2, 2026",
  },
  {
    title: "Deep Learning for Developers",
    issuer: "Infosys Springboard",
    date: "July 13, 2026",
  },
  {
    title: "Natural Language Processing using Python",
    issuer: "Infosys Springboard",
    date: "June 24, 2026",
  },
  {
    title: "Microsoft Power BI: Data Analysis & AI Dashboards (2026)",
    issuer: "Udemy",
    date: "June 15, 2026",
    credential: "UC-570d14cd-09ba-4c0c-aa58-1e4369ae61c8",
  },
  {
    title: "Natural Language Processing Fundamentals",
    issuer: "Infosys Springboard",
    date: "June 15, 2026",
  },
  {
    title: "BI – Business Intelligence",
    issuer: "Infosys Springboard",
    date: "June 14, 2026",
  },
  {
    title: "Google for Education AI Implementation Program 2026 (Student AI Masterclass)",
    issuer: "upEducators (Google for Education Partner)",
    date: "February 23, 2026",
  },
  {
    title: "SAMPARK'26 Participation Certificate",
    issuer: "IEEE Gujarat Section & IEEE Student Branch PDEU",
    date: "January 18, 2026",
  },
];

export const education = [
  {
    period: "2023 — 2027",
    degree: "B.Tech – Computer Engineering (Artificial Intelligence)",
    institution: "Marwadi University (NAAC A+), Rajkot, Gujarat",
    score: "CGPA: 8.60",
    description:
      "Pursuing a specialized Bachelor's degree in Computer Engineering – Artificial Intelligence with a focus on Machine Learning, NLP, Data Mining, Web & Mobile App Development, and Blockchain.",
  },
  {
    period: "2021 — 2024",
    degree: "Diploma – Computer Engineering",
    institution: "Darshan University, Rajkot, Gujarat",
    score: "CGPA: 8.64",
    description:
      "Built strong fundamentals in programming, database management, computer networks, and full-stack software development.",
  },
  {
    period: "2020 — 2021",
    degree: "Class X (Secondary Education)",
    institution: "Dholakiya School, Gujarat Board",
    score: "85 Percentile",
    description:
      "Completed secondary education with strong academic performance in mathematics and science.",
  },
];

export const experience = [
  {
    period: "June 2026 — September 2026",
    role: "Internship Trainee",
    company: "TSS Consultancy Pvt. Ltd. (in association with Marwadi University, Rajkot)",
    description:
      "Successfully completed an intensive Internship Training Programme conducted by TSS Consultancy Pvt. Ltd. in association with Marwadi University, gaining practical industrial software and engineering experience.",
  },
];

export const workshopsAndActivities = [
  "TSS Industrial Visit – Marwadi University, Rajkot, Gujarat",
  "Students Interest Group – Placements and Future Skills Workshop",
  "Antigravity Seminar – Prompt Engineering & AI Tools",
  "Access for Rural Healthcare in Nabha – Hackathon Participant",
  "Volunteer: AISTS Event, IEEE",
  "SAMPARK'26 Participant – IEEE Gujarat Section at PDEU (Jan 2026)",
];

export const skillCategories: SkillCategory[] = [
  {
    id: "web-mobile",
    title: "Web & Mobile App Development",
    color: "#00D4FF",
    icon: "code",
    skills: [
      {
        name: "Website Development (Full-Stack)",
        level: 90,
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "Mobile Application Development",
        level: 85,
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "HTML5 & CSS3",
        level: 95,
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        level: 88,
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI, Machine Learning & Data Analytics",
    color: "#6C47FF",
    icon: "brain",
    skills: [
      {
        name: "Python",
        level: 92,
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "Machine Learning",
        level: 88,
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Natural Language Processing (NLP)",
        level: 86,
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "Data Mining & Pattern Recognition",
        level: 85,
      },
      {
        name: "Microsoft Power BI & BI Dashboards",
        level: 86,
      },
      {
        name: "Prompt Engineering & AI Tools",
        level: 90,
      },
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    color: "#FFB347",
    icon: "blocks",
    skills: [
      {
        name: "Ethereum",
        level: 84,
      },
      {
        name: "Solidity & Smart Contracts",
        level: 85,
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
      },
      {
        name: "Web3.js",
        level: 82,
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/web3js/web3js-original.svg",
      },
      {
        name: "Remix IDE",
        level: 88,
      },
      {
        name: "MetaMask",
        level: 88,
      },
    ],
  },
  {
    id: "database-tools",
    title: "Databases & Developer Tools",
    color: "#4ECDC4",
    icon: "database",
    skills: [
      {
        name: "MySQL",
        level: 88,
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "Git & GitHub",
        level: 88,
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        level: 95,
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
    ],
  },
];

export const quotes = [
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
];
