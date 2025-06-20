import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations = {
  es: {
    // Navbar
    home: 'Inicio',
    about: 'Sobre mí',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
    
    // Hero
    hello: 'Hola, soy',
    fullStackDeveloper: 'Desarrollador Full Stack',
    heroDescription: 'Creo experiencias digitales excepcionales que combinan diseño elegante con código limpio y funcionalidad robusta.',
    viewProjects: 'Ver Proyectos',
    contactMe: 'Contactar',
    
    // About
    aboutTitle: 'Sobre',
    me: 'Mí',
    aboutText1: 'Me formé como ingeniero químico, pero encontré mi verdadera pasión en la creación de apps, ideas y soluciones. Soy autodidacta, curioso y siempre en evolución.',
    aboutText2: 'Me enfoco en escribir código limpio, crear experiencias intuitivas y resolver problemas complejos con soluciones elegantes y escalables.',
    aboutText3: 'Cuando no estoy programando, disfruto explorar nuevas tecnologías, contribuir a proyectos open source y apoyar a otros desarrolladores en su camino.',
    downloadCV: 'Descargar CV',
    projectsCompleted: 'Proyectos Completados',
    cupsOfCoffee: 'Tazas de Café',
    ideasConverted: 'Ideas Convertidas',
    
    // Skills
    mySkills: 'Mis',
    skillsSubtitle: 'Tecnologías y herramientas que domino para crear soluciones completas',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Herramientas',
    
    // Projects
    myProjects: 'Mis',
    projectsSubtitle: 'Una selección de proyectos que demuestran mis habilidades y experiencia',
    viewMoreGithub: 'Ver más en GitHub',
    
    // Project descriptions
    snakedesc: 'Un juego clásico de Snake hecho con JavaScript moderno y diseño responsivo.',
    tododesc: 'Una aplicación sencilla para gestionar tareas diarias con diseño intuitivo y funcional.',
    gifdesc: 'App para buscar y explorar GIFs animados usando la API de Giphy.',
    // socialAnalyticsDesc: 'Herramienta de análisis para redes sociales con métricas en tiempo real y reportes automáticos.',
    // portfolioDesc: 'Sitio web portfolio responsivo con animaciones fluidas y diseño minimalista.',
    // blogCMSDesc: 'Sistema de gestión de contenidos para blogs con editor markdown y SEO optimizado.',
    
    // Contact
    workTogether: 'Trabajemos',
    together: 'Juntos',
    contactSubtitle: '¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.',
    contactInfo: 'Información de Contacto',
    contactText: 'Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes o simplemente charlar sobre tecnología. No dudes en contactarme.',
    email: 'Email',
    phone: 'Teléfono',
    location: 'Ubicación',
    name: 'Nombre',
    subject: 'Asunto',
    message: 'Mensaje',
    sendMessage: 'Enviar Mensaje',
    messageSent: 'Mensaje enviado correctamente!',
    
    // Footer
    madeWith: 'Hecho con',
    andCoffee: 'y café',
    backToTop: 'Volver arriba ↑',
    
    // Loading
    loadingPortfolio: 'Cargando portfolio...'
  },
  
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero
    hello: 'Hello, I\'m',
    fullStackDeveloper: 'Full Stack Developer',
    heroDescription: 'I create exceptional digital experiences that combine elegant design with clean code and robust functionality.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    
    // About
    aboutTitle: 'About',
    me: 'Me',
    aboutText1: 'I studied chemical engineering, but I found my true passion in creating — apps, ideas, and solutions. I’m self-taught, curious, and always evolving.',
    aboutText2: 'I focus on writing clean code, crafting intuitive user experiences, and solving complex problems with elegant, scalable solutions.',
    aboutText3: 'When I’m not coding, I enjoy exploring new technologies, contributing to open source, and mentoring other developers on their journey.',
    downloadCV: 'Download CV',
    projectsCompleted: 'Projects Completed',
    cupsOfCoffee: 'Cups of Coffee',
    ideasConverted: 'Ideas Converted',
    
    // Skills
    mySkills: 'My',
    skillsSubtitle: 'Technologies and tools I master to create complete solutions',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',
    
    // Projects
    myProjects: 'My',
    projectsSubtitle: 'A selection of projects that demonstrate my skills and experience',
    viewMoreGithub: 'View more on GitHub',
    
    // Project descriptions
    snakedesc: 'A classic Snake game built with modern JavaScript and responsive design.',
    tododesc: 'A simple app to manage daily tasks with an intuitive and functional design.',
    gifdesc: 'An app to search and explore animated GIFs using the Giphy API.',
    // socialAnalyticsDesc: 'Social media analytics tool with real-time metrics and automated reports.',
    // portfolioDesc: 'Responsive portfolio website with smooth animations and minimalist design.',
    // blogCMSDesc: 'Blog content management system with markdown editor and SEO optimization.',
    
    // Contact
    workTogether: 'Let\'s Work',
    together: 'Together',
    contactSubtitle: 'Have a project in mind? I\'d love to hear your ideas and help bring them to life.',
    contactInfo: 'Contact Information',
    contactText: 'I\'m always open to discussing new opportunities, interesting projects, or simply chatting about technology. Don\'t hesitate to reach out.',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    name: 'Name',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    messageSent: 'Message sent successfully!',
    
    // Footer
    madeWith: 'Made with',
    andCoffee: 'and coffee',
    backToTop: 'Back to top ↑',
    
    // Loading
    loadingPortfolio: 'Loading portfolio...'
  }
  
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage)
      localStorage.setItem('portfolio-language', newLanguage)
    }
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  const value = {
    language,
    changeLanguage,
    t,
    availableLanguages: Object.keys(translations)
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}