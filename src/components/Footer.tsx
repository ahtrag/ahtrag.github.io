export default function Footer() {
  return (
    <footer className="py-8 bg-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Gartha. Built with{' '}
          <span className="text-primary-light">React</span> &amp;{' '}
          <span className="text-primary-light">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  )
}
