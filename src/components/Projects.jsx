import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { useLanguage } from '../contexts/languageContext'

const Projects = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      id: 1,
      title: 'Snake Game',
      description: t('snakedesc'),
      image: '/images/snake.png', 
      technologies: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
      github: 'https://github.com/Suas-dot/snake',
      demo: 'https://suasnake.netlify.app',
      featured: true
    },
    {
      id: 2,
      title: 'To-Do App',
      description: t('tododesc'),
      image: '/images/to-do-app.png',  
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/Suas-dot/to-do-app',
      demo: 'https://suas-to-do-app.netlify.app',
      featured: false
    },
    {
      id: 3,
      title: 'Gif Expert App',
      description: t('gifdesc'),
      image: '/images/gif-app.png', 
      technologies: ['React', 'Fetch API', 'CSS Modules'],
      github: 'https://github.com/Suas-dot/React1stApp',
      demo: 'https://suas1.netlify.app/',
      featured: false
    },
    // {
    //   id: 4,
    //   title: 'project 4',
    //   description: t('project4'),
    //   image: '/api/placeholder/600/400',
    //   technologies: ['Python', 'Django', 'Chart.js', 'Redis'],
    //   github: '#',
    //   demo: '#',
    //   featured: false
    // },
    // {
    //   id: 5,
    //   title: 'project 5',
    //   description: t('project5'),
    //   image: '/api/placeholder/600/400',
    //   technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    //   github: '#',
    //   demo: '#',
    //   featured: false
    // }
  ]

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative bg-dark-300 rounded-lg overflow-hidden border border-gray-800 hover:border-accent-100/50 transition-all duration-300 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        <div className="w-full h-48 bg-gradient-to-br from-accent-100/20 to-accent-200/20 flex items-center justify-center">
          <Eye className="text-accent-100" size={48} />
        </div>
        <div className="absolute inset-0 bg-dark-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-dark-200 rounded-lg text-white hover:bg-accent-100 transition-colors duration-200"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-dark-200 rounded-lg text-white hover:bg-accent-100 transition-colors duration-200"
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-100 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-accent-100/10 text-accent-100 rounded-full border border-accent-100/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-20 bg-dark-500">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('myProjects')} <span className="text-accent-100">{t('projects')}</span>
          </h2>
          <div className="w-24 h-1 bg-accent-100 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('projectsSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Suas-dot"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-accent-100 text-accent-100 font-medium rounded-lg hover:bg-accent-100 hover:text-white transition-all duration-200"
          >
            <Github className="mr-2" size={20} />
            {t('viewMoreGithub')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects