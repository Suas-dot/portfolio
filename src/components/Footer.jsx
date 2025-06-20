import { motion } from 'framer-motion'
import { FaGithub, FaWhatsapp, FaEnvelope,} from 'react-icons/fa';
import { useLanguage } from '../contexts/languageContext'
import { Heart } from 'lucide-react'

const Footer = () => {
  const { t } = useLanguage()
  
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Suas-dot', label: 'GitHub' },
    { icon: FaWhatsapp, href: 'https://wa.me/593984789569', label: 'WhatsApp' },
    { icon: FaEnvelope, href: 'mailto:jasuast98@gmail.com', label: 'Gmail' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-500 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              <span className="text-accent-100">{"<"}</span>
              Portfolio
              <span className="text-accent-100">{"/>"}</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Desarrollador Full Stack
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center space-x-4 sm:space-x-6 order-1 md:order-2"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                 className="p-2 sm:p-3 bg-dark-300 hover:bg-accent-100 text-gray-300 hover:text-white rounded-lg transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right order-3"
          >
            <button
              onClick={scrollToTop}
              className="text-accent-100 hover:text-accent-200 transition-colors duration-200 font-medium text-sm sm:text-base"
            >
              {t('backToTop')}
            </button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 my-6 sm:my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center px-2"
        >
          <div className="text-gray-400 text-xs leading-tight">
            <div className="mb-1">© 2024 Portfolio</div>
             <div className="inline-flex items-center gap-1">
              <span>{t('madeWith')}</span>
              <Heart className="text-red-500" size={12} fill="currentColor" />
              <span>{t('andCoffee')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer