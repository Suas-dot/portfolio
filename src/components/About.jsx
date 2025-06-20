import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Coffee, Lightbulb } from 'lucide-react'
import { useLanguage } from '../contexts/languageContext'

const About = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { icon: Code, label: t('projectsCompleted'), value: '50+' },
    { icon: Coffee, label: t('cupsOfCoffee'), value: '500+' },
    { icon: Lightbulb, label: t('ideasConverted'), value: '100+' },
  ]

  return (
    <section id="about" className="py-20 bg-dark-500">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('aboutTitle')} <span className="text-accent-100">{t('me')}</span>
          </h2>
          <div className="w-24 h-1 bg-accent-100 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('aboutText1')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('aboutText2')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('aboutText3')}
            </p>
            
            <motion.a
              href="/Jonnathan-Suasnavas-CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-accent-100 text-white font-medium rounded-lg hover:bg-accent-200 transition-colors duration-200"
            >
              {t('downloadCV')}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-dark-300 p-6 rounded-lg border border-gray-800 hover:border-accent-100/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent-100/10 rounded-lg">
                    <stat.icon className="text-accent-100" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About