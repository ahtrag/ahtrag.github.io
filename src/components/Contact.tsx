import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FiMail, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

interface Social {
  name: string
  icon: IconType
  href: string
  color: string
}

const socials: Social[] = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/ahtrag',
    color: 'hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: '#',
    color: 'hover:text-[#0077B5]',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    href: '#',
    color: 'hover:text-[#1DA1F2]',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In{' '}
            <span className="bg-linear-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-light to-primary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Feel free to reach out if you want to collaborate or just say hello!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
          >
            <div className="flex items-center gap-4 p-6 rounded-xl bg-dark-light/50 border border-white/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FiMail className="text-primary-light text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">hello@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-dark-light/50 border border-white/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FiMapPin className="text-primary-light text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">Indonesia</p>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 mb-6">Find me on</p>
            <div className="flex justify-center gap-6">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`w-14 h-14 rounded-full bg-dark-light/50 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
