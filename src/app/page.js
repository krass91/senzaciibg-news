import ArticleCard from "../../components/ArticleCard";
import Sidebar from "../../components/Sidebar";
import Newsletter from "../../components/Newsletter";
const articles = [
  { id: "1", title: "GPT-5 ще промени начина, по който работим", excerpt: "Новите възможности на AI асистентите ще автоматизират повече задачи...", category: "AI Новини", categoryClass: "category-ai-news", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800", date: "2026-04-01", readTime: "5 мин" },
  { id: "2", title: "Как да използвате Claude за бизнес анализ", excerpt: "Практически ръководство за интегриране на AI в работния ви процес...", category: "AI за Бизнес", categoryClass: "category-ai-business", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800", date: "2026-03-30", readTime: "8 мин" },
  { id: "3", title: "Топ 10 AI инструменти за разработчици", excerpt: "Подборка от най-полезните AI решения за програмисти...", category: "AI Инструменти", categoryClass: "category-ai-tools", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800", date: "2026-03-28", readTime: "6 мин" },
  { id: "4", title: "Бъдещето на AI: Прогнози за 2027", excerpt: "Анализ на тенденциите и какво да очакваме от изкуствения интелект...", category: "AI Тенденции", categoryClass: "category-ai-trends", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800", date: "2026-03-25", readTime: "10 мин" },
];
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-xl">N</span></div>
              <span className="text-xl font-bold text-white">CyberNinjas</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-orange-500 font-medium">Начало</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Новини</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Ръководства</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Инструменти</a>
              <a href="#" className="text-gray-400 hover:text-white transition">За нас</a>
            </nav>
            <a href="/admin" className="text-gray-400 hover:text-orange-500 transition text-sm">Админ</a>
          </div>
        </div>
      </header>
      <section className="border-b border-[#262626] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Изкуствен интелект <span className="text-orange-500">на български</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Новини, ръководства и AI инструменти — ChatGPT, Claude и Gemini с примери, които можете да приложите веднага.</p>
          <div className="flex justify-center gap-8 mt-8 text-2xl font-bold text-gray-500">
            <div><span className="text-orange-500">54</span> статии</div>
            <div><span className="text-orange-500">5</span> категории</div>
            <div><span className="text-orange-500">100%</span> безплатно</div>
          </div>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><span className="w-1 h-6 bg-orange-500 rounded-full"></span>Последни новини</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{articles.map((a) => <ArticleCard key={a.id} article={a} />)}</div>
          </div>
          <Sidebar />
        </div>
      </main>
      <Newsletter />
      <footer className="border-t border-[#262626] py-8"><div className="max-w-7xl mx-auto px-4 text-center text-gray-500"><p>© 2026 CyberNinjas.ai - Всички права запазени</p></div></footer>
    </div>
  );
}
