export default function ArticleCard({ article }) {
  return (
    <article className="bg-[#171717] rounded-xl overflow-hidden border border-[#262626] hover:border-orange-500/50 transition group">
      <div className="relative h-48 overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
        <span className={`absolute top-3 left-3 ${article.categoryClass} px-3 py-1 rounded-full text-xs font-semibold`}>{article.category}</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-orange-500 transition">{article.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-500"><span>{article.date}</span><span>{article.readTime} четене</span></div>
      </div>
    </article>
  );
}
