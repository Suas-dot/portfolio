import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useLanguage } from '../contexts/languageContext'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Limpiar mensajes de estado al escribir
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    // Validaciones adicionales
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Por favor completa todos los campos requeridos.' 
      })
      setIsSubmitting(false)
      return
    }

    console.log('🚀 Iniciando envío de email...')
    console.log('📝 Datos del formulario:', formData)

    try {
      // Inicializar EmailJS
      console.log('🔧 Inicializando EmailJS...')
      emailjs.init('D4wYQ5OVPsgENtvpM')

      console.log('📨 Enviando email con los siguientes parámetros:')
      console.log('Service ID:', 'service_9rq4tvi')
      console.log('Template ID:', 'template_t2bz8vc')
      console.log('Public Key:', 'D4wYQ5OVPsgENtvpM')

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Mensaje desde el portfolio',
        message: formData.message,
        to_email: 'jasuast98@gmail.com',
      }

      console.log('📋 Template params:', templateParams)

      const result = await emailjs.send(
        'service_9rq4tvi',
        'template_t2bz8vc',
        templateParams,
        'D4wYQ5OVPsgENtvpM'
      )

      console.log('✅ Respuesta de EmailJS:', result)
      console.log('Status:', result.status)
      console.log('Text:', result.text)
      
      if (result.status === 200) {
        setSubmitStatus({ 
          type: 'success', 
          message: '¡Mensaje enviado exitosamente! Te responderé pronto.' 
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(`EmailJS status: ${result.status}`)
      }
    } catch (error) {
      console.error('❌ Error completo:', error)
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
      
      let errorMessage = 'Hubo un error al enviar tu mensaje. '
      
      if (error.status === 400) {
        errorMessage += 'Verifica que todos los campos estén completos.'
      } else if (error.status === 401) {
        errorMessage += 'Error de autenticación con EmailJS.'
      } else if (error.status === 404) {
        errorMessage += 'Servicio o template no encontrado.'
      } else if (error.text) {
        errorMessage += `Detalles: ${error.text}`
      } else {
        errorMessage += 'Por favor intenta nuevamente.'
      }
      
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage
      })
    }

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: t('email') || 'Email',
      value: 'jasuast98@gmail.com',
      link: 'mailto:jasuast98@gmail.com'
    },
    {
      icon: Phone,
      title: t('phone') || 'Teléfono',
      value: '+593984789569',
      link: 'tel:+593984789569'
    },
    {
      icon: MapPin,
      title: t('location') || 'Ubicación',
      value: 'Quito, Ecuador',
      link: 'https://www.google.com/maps/place/Quito,+Ecuador'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-dark-600">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('workTogether') || 'Trabajemos'} <span className="text-accent-100">{t('together') || 'Juntos'}</span>
          </h2>
          <div className="w-24 h-1 bg-accent-100 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('contactSubtitle') || 'Estoy disponible para nuevos proyectos y colaboraciones. ¡Hablemos!'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contactInfo') || 'Información de Contacto'}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                {t('contactText') || 'No dudes en contactarme para discutir tu próximo proyecto o cualquier oportunidad de colaboración.'}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-dark-300 rounded-lg border border-gray-800 hover:border-accent-100/50 transition-all duration-200 group"
                >
                  <div className="p-3 bg-accent-100/10 rounded-lg group-hover:bg-accent-100/20 transition-colors duration-200">
                    <info.icon className="text-accent-100" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-300 p-8 rounded-lg border border-gray-800"
          >
            {/* Mensaje de estado */}
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-900/50 border border-green-500 text-green-300' 
                  : 'bg-red-900/50 border border-red-500 text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    {t('name') || 'Nombre'} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-200 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-accent-100 transition-colors duration-200"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    {t('email') || 'Email'} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-200 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-accent-100 transition-colors duration-200"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  {t('subject') || 'Asunto'}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-200 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-accent-100 transition-colors duration-200"
                  placeholder="Asunto de tu mensaje"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  {t('message') || 'Mensaje'} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-200 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-accent-100 transition-colors duration-200 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-3 px-6 bg-accent-100 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accent-200'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t('sendMessage') || 'Enviar Mensaje'}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact