import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/languageContext'

const LanguageSwitcher = () => {
  const { language, changeLanguage, availableLanguages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languageNames = {
    es: 'Español',
    en: 'English',
  }

  const languageFlags = {
    es: '🇪🇸',
    en: '🇺🇸',
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 px-3 py-2 bg-dark-300 hover:bg-dark-200 text-white rounded-lg transition-colors duration-200 border border-gray-700 hover:border-accent-100/50"
      >
        <Globe size={16} />
        <span className="text-sm font-medium">
          {languageFlags[language]} {languageNames[language]}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 bg-dark-300 border border-gray-700 rounded-lg shadow-xl z-50 min-w-[150px]"
            >
              {availableLanguages.map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => {
                    changeLanguage(lang)
                    setIsOpen(false)
                  }}
                  whileHover={{ backgroundColor: '#1f2937' }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                    language === lang 
                      ? 'bg-accent-100/10 text-accent-100' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{languageFlags[lang]}</span>
                  <span className="text-sm font-medium">{languageNames[lang]}</span>
                  {language === lang && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto w-2 h-2 bg-accent-100 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher