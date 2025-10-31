

import React, { useState, useEffect, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import { Mail, Phone, Linkedin, MapPin, Briefcase, Camera, ShieldCheck, Wifi, Cpu, Wrench, Flame, Map, ArrowUp, Menu, X, ChevronDown, Siren, Send, Download } from 'lucide-react';

// --- DATA ---
const personalInfo = {
  name: "Ehika Eric",
  title: "Technicien Expert en Réseaux & Sécurité Électronique",
  company: "IRS.ci",
  location: "Abidjan, Côte d'Ivoire",
  email: "ericsonx15@gmail.com",
  whatsapp: "+2250576535792",
  whatsappDisplay: "+225 05 76 53 57 92",
  linkedin: "https://linkedin.com/in/ehikaeric-placeholder",
  about: "Technicien polyvalent et rigoureux avec plus de 5 ans d'expérience, je suis spécialisé dans la conception et le déploiement de solutions de sécurité intégrées. Mon expertise couvre la vidéosurveillance, le contrôle d'accès, et les infrastructures réseau complexes. Chez IRS.ci, ma mission est de garantir la robustesse et la performance des installations pour assurer la tranquillité d'esprit de nos clients."
};

const skills = [
  { name: "Vidéosurveillance (IP & Analogique)", icon: <Camera className="w-8 h-8 text-sky-400" /> },
  { name: "Contrôle d'Accès & Biométrie", icon: <ShieldCheck className="w-8 h-8 text-sky-400" /> },
  { name: "Câblage Structuré (Cat6, Fibre)", icon: <Wrench className="w-8 h-8 text-sky-400" /> },
  { name: "Configuration Réseau Avancée", icon: <Wifi className="w-8 h-8 text-sky-400" /> },
  { name: "Maintenance Informatique Proactive", icon: <Cpu className="w-8 h-8 text-sky-400" /> },
  { name: "Systèmes de Détection Incendie", icon: <Flame className="w-8 h-8 text-sky-400" /> },
  { name: "Solutions de Géolocalisation", icon: <Map className="w-8 h-8 text-sky-400" /> },
  { name: "Alarmes Anti-Intrusion", icon: <Siren className="w-8 h-8 text-sky-400" /> },
];

const masteredTools = [
  { name: "Adobe Photoshop", image: "https://i.imgur.com/a1rnhje.png", description: "Création et retouche d'images professionnelles." },
  { name: "ATEM Mini Pro", image: "https://i.imgur.com/Nn3ZeFx.jpg", description: "Mélangeur vidéo multi-caméras pour le streaming live." },
  { name: "Behringer X32", image: "https://i.imgur.com/AjLBdhR.jpg", description: "Console de mixage numérique pour la sonorisation." },
  { name: "Epson Projectors", image: "https://i.imgur.com/c0YK01R.jpg", description: "Installation et calibration de vidéoprojecteurs." },
  { name: "Blackmagic Design", image: "https://i.imgur.com/dpb8Zpz.jpg", description: "Écosystème de production vidéo professionnelle." },
  { name: "Câblage RJ45 Cat 6", image: "https://i.imgur.com/AEdOdzF.jpg", description: "Certification et déploiement de réseaux filaires." },
  { name: "Pack Office", image: "https://i.imgur.com/22KugEy.png", description: "Suite bureautique (Word, Excel, PowerPoint)." },
  { name: "Baies & Racks Socamont", image: "https://i.imgur.com/KpPkocQ.jpg", description: "Intégration et organisation d'infrastructures." },
  { name: "Linux", image: "https://i.imgur.com/S8tcbKO.png", description: "Administration de systèmes d'exploitation open-source." },
  { name: "Microsoft Azure", image: "https://i.imgur.com/dQyVyJ4.png", description: "Déploiement et gestion de services cloud." },
  { name: "HTML & CSS", image: "https://i.imgur.com/aIDMyH2.png", description: "Création et stylisation de pages web statiques." },
  { name: "TypeScript", image: "https://i.imgur.com/LhHlIpr.png", description: "Développement web robuste avec typage statique." },
  { name: "WordPress", image: "https://i.imgur.com/IJnZC6u.png", description: "Création et gestion de sites web dynamiques." },
];

const experiences = [
    {
    date: "2025",
    title: "Modernisation des Infrastructures Audiovisuelles et Salles de Crise",
    company: "Institut de Sécurité Maritime Interrégional (ISMI - ARSTM)",
    responsibilities: [
      "Déploiement de matériel audiovisuel haute qualité pour plusieurs salles de crise et un amphithéâtre.",
      "Installation d'équipements informatiques professionnels et de systèmes de communication de pointe.",
      "Mise en place de l'infrastructure réseau pour les modules de simulation et de formation maritime.",
      "Équipement complet des salles de conférence et des centres de formation.",
    ]
  },
  {
    date: "2024",
    title: "Installation de Mobilier Étudiant",
    company: "Institut Universitaire d'Abidjan (IUA)",
    responsibilities: [
      "Mise en place de mobilier professionnel pour les espaces étudiants.",
    ]
  },
  {
    date: "2023",
    title: "Déploiement de Salle Informatique",
    company: "Agence Nationale pour la Sécurité Alimentaire (ANSEA)",
    responsibilities: [
      "Installation complète d'une salle informatique : mobilier, postes de travail, et écran interactif.",
    ]
  },
  {
    date: "2022",
    title: "Équipement du Pôle Scientifique",
    company: "Université Félix Houphouët-Boigny (UFHB), Bingerville",
    responsibilities: [
      "Installation d'une salle informatique (mobilier, ordinateurs, écran interactif) pour le pôle d'innovation.",
    ]
  },
  {
    date: "2020",
    title: "Modernisation de Salle Informatique",
    company: "Institut National Polytechnique Félix Houphouët-Boigny (INPHB)",
    responsibilities: [
      "Mise en place d'une salle informatique moderne avec mobilier, ordinateurs et écran interactif.",
    ]
  },
  {
    date: "2019 - Présent",
    title: "Technicien Polyvalent",
    company: "IRS - Informatique, Réseaux, Sécurité & Services",
    responsibilities: [
      "Installation et configuration de systèmes de vidéosurveillance IP.",
      "Déploiement de solutions de contrôle d'accès et d'alarmes.",
      "Maintenance préventive et curative de parcs informatiques.",
      "Mise en place et certification de câblage réseau."
    ]
  },
  {
    date: "2017 - 2019",
    title: "Technicien de Maintenance Multimédia",
    company: "OSAPRO MULTIMEDIA",
    responsibilities: [
      "Support technique pour les équipements audiovisuels et informatiques.",
      "Gestion du parc informatique et des licences logicielles.",
      "Installation et maintenance des systèmes de projection et de sonorisation.",
      "Formation des utilisateurs aux nouveaux outils multimédias."
    ]
  }
];

const projects = [
  {
    title: "Déploiement Vidéosurveillance IP - Siège d'entreprise",
    description: "Installation complète de 64 caméras IP avec un système de gestion vidéo (VMS) centralisé pour la surveillance périmétrique et intérieure d'un bâtiment de bureaux.",
    image: "https://i.imgur.com/2GxnADg.png",
    tags: ["Vidéosurveillance", "Réseau IP", "Sécurité"]
  },
  {
    title: "Mise en place d'un réseau Wi-Fi unifié - Complexe Hôtelier",
    description: "Couverture Wi-Fi totale d'un hôtel de 120 chambres avec portail captif et gestion centralisée des points d'accès pour une connectivité optimale des clients.",
    image: "https://i.imgur.com/c1dVXic.png",
    tags: ["Wi-Fi", "Réseau", "Hôtellerie"]
  },
  {
    title: "Contrôle d'Accès Biométrique - Site Industriel",
    description: "Sécurisation des zones sensibles d'une usine via des lecteurs d'empreintes digitales et de badges, couplés à un logiciel de gestion des accès et des horaires.",
    image: "https://i.imgur.com/bSYs02V.jpeg",
    tags: ["Contrôle d'Accès", "Biométrie", "Industrie"]
  },
  {
    title: "Infrastructure de Câblage Structuré - Clinique Médicale",
    description: "Certification et déploiement d'un réseau de câblage Catégorie 6A pour supporter les applications critiques (données, voix, vidéo) d'une nouvelle clinique.",
    image: "https://i.imgur.com/V06kQ8S.jpeg",
    tags: ["Câblage", "Réseau", "Santé"]
  },
  {
    title: "Système de Détection Incendie - Centre Commercial",
    description: "Intégration d'un système de détection et d'alarme incendie adressable, conforme aux normes de sécurité les plus strictes, pour un grand centre commercial.",
    image: "https://i.imgur.com/KXHzOGo.png",
    tags: ["Détection Incendie", "Sécurité", "Normes"]
  },
  {
    title: "Alarme Anti-Intrusion Connectée - Résidence Privée",
    description: "Installation d'un système d'alarme intelligent avec détecteurs de mouvement, contacts de porte et gestion à distance via application mobile pour une villa de luxe.",
    image: "https://i.imgur.com/lshkaUs.jpeg",
    tags: ["Alarme", "Domotique", "Sécurité"]
  }
];

// --- REUSABLE COMPONENTS ---

interface SectionProps {
  title: string;
  children: ReactNode;
  id: string;
  className?: string;
}

const Section: FC<SectionProps> = ({ title, children, id, className = '' }) => (
  <section id={id} className={`py-16 md:py-24 lg:py-28 ${className}`}>
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
      <div className="text-center mb-12 md:mb-16 js-show-on-scroll">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
      </div>
      {children}
    </div>
  </section>
);

interface SkillCardProps {
  name: string;
  icon: ReactNode;
  index: number;
}

const SkillCard: FC<SkillCardProps> = ({ name, icon, index }) => (
  <div 
    className="bg-slate-800 p-6 rounded-lg flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 js-show-on-scroll"
    data-delay={`${100 + index * 100}ms`}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="font-semibold text-white text-sm sm:text-base">{name}</h3>
  </div>
);

interface ToolCardProps {
  name: string;
  image: string;
  description: string;
  index: number;
}

const ToolCard: FC<ToolCardProps> = ({ name, image, description, index }) => (
  <div
    className="relative bg-slate-800 p-4 sm:p-6 rounded-lg flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 group overflow-hidden min-h-[160px] sm:min-h-[180px] js-show-on-scroll"
    data-delay={`${100 + index * 100}ms`}
  >
    {/* Initial State */}
    <div className="flex flex-col items-center justify-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-90">
      <img src={image} alt={name} className="h-14 sm:h-16 md:h-20 mb-3 sm:mb-4 object-contain" />
      <h3 className="font-semibold text-white text-sm sm:text-base mt-2">{name}</h3>
    </div>
    {/* Hover State */}
    <div className="absolute inset-0 p-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out scale-90 group-hover:scale-100">
        <h3 className="font-bold text-sky-400 mb-2 text-sm sm:text-base">{name}</h3>
        <p className="text-slate-300 text-xs sm:text-sm">{description}</p>
    </div>
  </div>
);


interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, image, tags, index }) => (
  <div 
    className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 group hover:shadow-sky-500/20 hover:shadow-2xl js-show-on-scroll"
    data-delay={`${100 + index * 150}ms`}
  >
    <img src={`${image}?v=${index}`} alt={title} className="w-full h-48 object-cover" />
    <div className="p-5 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{title}</h3>
      <p className="text-slate-400 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-sky-900/50 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);


// --- MAIN APP COMPONENT ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmissionMessage('');
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionMessage('Votre message a été envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmissionMessage(''), 5000);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowBackToTop(window.scrollY > 300);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = (entry.target as HTMLElement).dataset.delay || '0ms';
                (entry.target as HTMLElement).style.animationDelay = delay;
                entry.target.classList.add('animate-fade-in-up');
                (entry.target as HTMLElement).style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.js-show-on-scroll');
    elements.forEach(el => {
        (el as HTMLElement).style.opacity = '0'; // Initial state
        observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href')?.substring(1);
      const targetElement = targetId ? document.getElementById(targetId) : null;
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMenuOpen) {
        setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { href: '#about', label: 'À Propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#tools', label: 'Outils' },
    { href: '#experience', label: 'Expérience' },
    { href: '#projects', label: 'Réalisations' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
          <a href="#" onClick={handleScrollToTop} className="text-xl font-bold text-white hover:text-sky-400 transition-colors">
            Ehika Eric
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={handleSmoothScroll} className="text-slate-300 hover:text-sky-400 transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Ouvrir le menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-900 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={handleSmoothScroll} className="text-3xl font-bold text-slate-300 hover:text-sky-400 transition-colors">
                  {link.label}
                </a>
              ))}
          </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
          >
            <source src="https://i.imgur.com/ozSMQrR.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
          <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-8 js-show-on-scroll">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                  {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-sky-400 mt-2 font-medium">
                  {personalInfo.title}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
                  <a href={`https://wa.me/${personalInfo.whatsapp}`} className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors">
                      <Phone className="w-4 h-4" />
                      {personalInfo.whatsappDisplay}
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors">
                      <Mail className="w-4 h-4" />
                      {personalInfo.email}
                  </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-4">
                  <a href="#projects" onClick={handleSmoothScroll} className="w-full sm:w-auto inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-all transform hover:scale-105">
                      Voir mes réalisations
                  </a>
              </div>
          </div>
          <a href="#about" onClick={handleSmoothScroll} className="absolute bottom-10 animate-bounce z-20" aria-label="Faire défiler vers le bas">
            <ChevronDown className="w-8 h-8 text-slate-500"/>
          </a>
        </section>

        {/* About Section */}
        <Section title="À Propos de Moi" id="about">
          <p className="max-w-3xl lg:max-w-4xl mx-auto text-center text-base sm:text-lg text-slate-400 leading-relaxed js-show-on-scroll" data-delay="100ms">
            {personalInfo.about}
          </p>
        </Section>

        {/* Skills Section */}
        <Section title="Compétences Clés" id="skills" className="bg-slate-800/50">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} index={index} />
            ))}
          </div>
        </Section>
        
        {/* Tools Section */}
        <Section title="Outils & Technologies Maîtrisés" id="tools">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {masteredTools.map((tool, index) => (
              <ToolCard key={tool.name} {...tool} index={index} />
            ))}
          </div>
        </Section>
        
        {/* Experience Section */}
        <Section title="Expérience Professionnelle" id="experience" className="bg-slate-800/50">
            <div className="max-w-4xl mx-auto relative">
                <div className="absolute left-2 sm:left-4 top-4 bottom-4 w-0.5 bg-slate-700"></div>
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-10 sm:pl-12 pb-12 js-show-on-scroll" data-delay={`${100 + index * 150}ms`}>
                        <div className="absolute left-0 sm:left-[9px] top-1 w-5 h-5 bg-sky-500 rounded-full border-4 border-slate-900"></div>
                        <div className="bg-slate-800 rounded-lg p-5 sm:p-6 shadow-lg border border-slate-700">
                             <div className="flex items-center space-x-4 mb-2">
                                <Briefcase className="w-6 h-6 text-sky-400"/>
                                <p className="font-semibold text-slate-400">{exp.date}</p>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{exp.title}</h3>
                            <p className="text-lg text-sky-400 mt-1">{exp.company}</p>
                            <ul className="mt-4 list-disc list-inside text-slate-400 space-y-2 text-sm sm:text-base">
                                {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        {/* Projects Section */}
        <Section title="Mes Réalisations" id="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section title="Contactez-Moi" id="contact" className="bg-slate-800/50">
          <div className="max-w-2xl mx-auto js-show-on-scroll" data-delay="100ms">
            <p className="text-base sm:text-lg text-slate-400 mb-8 text-center">
              Je suis disponible pour discuter de vos projets. N'hésitez pas à me contacter via ce formulaire.
            </p>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nom</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full bg-slate-800 border border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
                  placeholder="Votre nom complet"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full bg-slate-800 border border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
                  placeholder="Votre adresse email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleFormChange}
                  className="w-full bg-slate-800 border border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
                  placeholder="Bonjour Eric, ..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                  {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
                </button>
              </div>
            </form>
            {submissionMessage && (
              <p className="mt-6 text-center text-green-400 bg-green-900/50 py-3 px-4 rounded-md animate-fade-in">
                {submissionMessage}
              </p>
            )}
          </div>
        </Section>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 text-center text-slate-500">
            <div className="flex justify-center items-center gap-6 mb-4">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                    <Linkedin className="w-7 h-7"/>
                    <span className="sr-only">LinkedIn</span>
                </a>
                 <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                    <Phone className="w-7 h-7"/>
                    <span className="sr-only">WhatsApp</span>
                </a>
                 <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-sky-400 transition-colors">
                    <Mail className="w-7 h-7"/>
                    <span className="sr-only">Email</span>
                </a>
            </div>
          <p>&copy; {new Date().getFullYear()} Ehika Eric. Tous droits réservés.</p>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      <button 
        onClick={handleScrollToTop}
        className={`fixed bottom-8 right-8 bg-sky-500 text-white p-3 rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 transform ${showBackToTop ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        aria-label="Retour en haut"
      >
          <ArrowUp className="w-6 h-6"/>
      </button>
    </div>
  );
}
