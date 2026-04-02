export default function Newsletter() {
  return (
    <section className="bg-[#171717] border-t border-b border-[#262626] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Бюлетин</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Абонирайте се за AI новини - получавайте най-новите статии директно в пощата си. Без спам.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input type="email" placeholder="Вашият имейл" className="flex-1 px-4 py-3 bg-[#262626] border border-[#404040] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition" />
          <button type="submit" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition">Абонирай се</button>
        </form>
      </div>
    </section>
  );
}
