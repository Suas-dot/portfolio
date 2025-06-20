import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../contexts/languageContext'

const Skills = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: t('frontend'),
      skills: [
        { name: 'React', level: 80 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        
      ]
    },
    {
      title: t('backend'),
      skills: [
        { name: 'Node.js', level:80 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 90 },
      ]
    },
    {
      title: t('tools'),
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Webpack', level: 80 },
        { name: 'Jest', level: 85 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-dark-600">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('mySkills')} <span className="text-accent-100">{t('skills')}</span>
          </h2>
          <div className="w-24 h-1 bg-accent-100 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('skillsSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-dark-300 p-6 rounded-lg border border-gray-800"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-accent-100 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 
                        }}
                        className="bg-accent-100 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills