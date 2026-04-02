export default function Sidebar() {
  const categories = [
    { name: "AI Инструменти", count: 12, color: "bg-orange-500/20 text-orange-400" },
    { name: "AI Новини", count: 18, color: "bg-purple-500/20 text-purple-400" },
    { name: "AI Ръководства", count: 15, color: "bg-blue-500/20 text-blue-400" },
    { name: "AI за Бизнес", count: 8, color: "bg-green-500/20 text-green-400" },
    { name: "AI Тенденции", count: 6, color: "bg-pink-500/20 text-pink-400" },
  ];
  const tags = ["ChatGPT", "Claude", "Gemini", "Midjourney", "Stable Diffusion", "OpenAI", "Anthropic", "Google AI", "Microsoft", "Automation"];
  return (
    <aside className="space-y-8">
      <div className="bg-[#171717] rounded-xl p-6 border border-[#262626]">
        <h3 className="text-lg font-bold text-white mb-4">Категории</h3>
        <ul className="space-y-3">{categories.map((c) => (<li key={c.name}><a href="#" className="flex items-center justify-between group"><span className={`px-3 py-1 rounded-full text-sm ${c.color}`}>{c.name}</span><span className="text-gray-500 text-sm group-hover:text-white transition">{c.count}</span></a></li>))}</ul>
      </div>
      <div className="bg-[#171717] rounded-xl p-6 border border-[#262626]">
        <h3 className="text-lg font-bold text-white mb-4">Тагове</h3>
        <div className="flex flex-wrap gap-2">{tags.map((t) => (<a key={t} href="#" className="px-3 py-1 bg-[#262626] text-gray-400 text-sm rounded-full hover:bg-orange-500 hover:text-white transition">{t}</a>))}</div>
      </div>
      <div className="bg-[#171717] rounded-xl p-6 border border-[#262626]">
        <h3 className="text-lg font-bold text-white mb-4">Популярни</h3>
        <ul className="space-y-4">{[1,2,3].map((n) => (<li key={n} className="flex gap-3"><span className="text-2xl font-bold text-[#404040]">{n}</span><a href="#" className="text-gray-300 hover:text-orange-500 transition text-sm leading-tight">Как AI трансформира бизнеса през 2026</a></li>))}</ul>
      </div>
    </aside>
  );
}