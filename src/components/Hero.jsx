import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { FaGithub, FaWhatsapp, FaEnvelope,} from 'react-icons/fa';
import { useLanguage } from '../contexts/languageContext'

const Hero = () => {
  const { t } = useLanguage()
  
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Suas-dot', label: 'GitHub' },
    { icon: FaWhatsapp, href: 'https://wa.me/593984789569', label: 'WhatsApp' },
    { icon: FaEnvelope, href: 'mailto:jasuast98@gmail.com', label: t('Gmail') },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-dark-600 pt-20 md:pt-0">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-100/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-8 md:py-0">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent-100 font-mono text-lg mb-4"
            >
              {t('hello')}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4"
            >
              Jonnathan Suasnavas
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-6 md:mb-8"
            >
              {t('fullStackDeveloper')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              {t('heroDescription')}
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-4 sm:space-x-6 mb-8 md:mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-dark-200 hover:bg-accent-100 text-gray-300 hover:text-white rounded-lg transition-all duration-200"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 md:mb-16 px-4 sm:px-0"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 bg-accent-100 text-white font-medium rounded-lg hover:bg-accent-200 transition-colors duration-200 text-center"
            >
              {t('viewProjects')}
            </motion.a>
            {/* <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 border border-accent-100 text-accent-100 font-medium rounded-lg hover:bg-accent-100 hover:text-white transition-all duration-200 text-center"
            >
              {t('contactMe')}
            </motion.a> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 cursor-pointer"
        >
          <ArrowDown size={20} className="md:w-6 md:h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero