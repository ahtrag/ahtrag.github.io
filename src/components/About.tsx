import { motion } from 'framer-motion'
import profilePhoto from '../assets/profile_photo.jpg'

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-20 bg-dark-light">
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
            About{' '}
            <span className="bg-linear-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-light to-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-primary-light/20 to-transparent" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Frontend Developer
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I&apos;m a passionate frontend developer with a keen eye for design and a love for
              creating smooth, responsive web applications. I specialize in building modern
              user interfaces using React and its ecosystem, always focusing on performance
              and user experience.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              When I&apos;m not coding, you can find me exploring new technologies, contributing
              to open source, or learning about the latest trends in web development.
            </p>
            <div className="flex gap-6 text-sm">
              <div>
                <span className="text-2xl font-bold bg-linear-to-r from-primary-light to-primary bg-clip-text text-transparent">
                  3+
                </span>
                <p className="text-gray-400 mt-1">Years Experience</p>
              </div>
              <div>
                <span className="text-2xl font-bold bg-linear-to-r from-primary-light to-primary bg-clip-text text-transparent">
                  10+
                </span>
                <p className="text-gray-400 mt-1">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
