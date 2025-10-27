const skills = [
  'React.js', 'Next.js', 'Flutter', 'Node.js', 'Express', 'Tailwind CSS', 'MySQL', 'Prisma'
]

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-teal-400">Keahlian</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-5 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-200 hover:border-teal-400 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
