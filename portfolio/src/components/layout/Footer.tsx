export default function Footer() {
  return (
    <footer className="bg-dark text-white/60 py-8 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Umer Waqas. Built with{' '}
        <span className="text-primary-light">React</span> +{' '}
        <span className="text-secondary">Tailwind CSS</span>. All rights reserved.
      </p>
    </footer>
  )
}
