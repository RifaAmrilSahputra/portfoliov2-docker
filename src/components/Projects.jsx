const projects = [
  {
    title: 'Boardify Mobile',
    desc: 'Aplikasi mobile untuk bimbingan skripsi berbasis task prioritization.',
    link: '#'
  },
  {
    title: 'Web Dashboard Admin',
    desc: 'Sistem manajemen data berbasis web dengan Express dan Tailwind.',
    link: '#'
  },
  {
    title: 'AI Depression Detection',
    desc: 'Model hybrid stacking ensemble untuk deteksi depresi berbasis citra wajah.',
    link: '#'
  },
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-teal-400">Proyek Saya</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-left hover:border-teal-400 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{proj.title}</h3>
            <p className="text-gray-400 mb-4">{proj.desc}</p>
            <a
              href={proj.link}
              className="text-teal-400 hover:underline font-medium"
            >
              Lihat Detail →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
