export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-teal-400">Hubungi Saya</h2>
      <p className="text-gray-300 mb-8">
        Tertarik untuk berkolaborasi atau punya pertanyaan? Kirim pesan saja!
      </p>
      <form className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Nama Anda"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-400"
        />
        <input
          type="email"
          placeholder="Email Anda"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-400"
        />
        <textarea
          rows="5"
          placeholder="Pesan Anda"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-400"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-semibold rounded-lg transition"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  )
}
