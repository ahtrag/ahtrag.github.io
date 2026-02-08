import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  live: string
}

const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A modern web application built with React and Tailwind CSS featuring responsive design and smooth animations.',
    image: project1,
    tags: ['React', 'Tailwind CSS', 'Vite'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Two',
    description:
      'A full-featured dashboard application with data visualization and real-time updates.',
    image: project2,
    tags: ['React', 'TypeScript', 'Chart.js'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Three',
    description:
      'An e-commerce platform with a clean UI, cart functionality, and seamless checkout experience.',
    image: project3,
    tags: ['Next.js', 'Tailwind CSS', 'Stripe'],
    github: '#',
    live: '#',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-20 bg-dark-light">
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
            My{' '}
            <span className="bg-linear-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-light to-primary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            A selection of projects I&apos;ve worked on
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group rounded-xl overflow-hidden bg-dark/50 border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary-light border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
