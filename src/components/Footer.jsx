export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 text-center text-gray-400 bg-gray-950">
      <p>© {new Date().getFullYear()} Rifa Amril. Dibuat dengan ❤️ menggunakan React + Tailwind CSS.</p>
      <div className="mt-3 space-x-4">
        <a href="https://github.com/rifaamril" className="hover:text-teal-400">GitHub</a>
        <a href="https://linkedin.com/in/rifaamril" className="hover:text-teal-400">LinkedIn</a>
        <a href="mailto:rifa@example.com" className="hover:text-teal-400">Email</a>
      </div>
    </footer>
  )
}
