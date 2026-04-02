"use client";
import { useState } from "react";
const ADMIN_PASSWORD = "CyberNinja2026!";
export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (e) => { e.preventDefault(); if (password === ADMIN_PASSWORD) { setIsAuthenticated(true); setError(""); } else { setError("Грешна парола"); } };
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <div className="bg-[#171717] border border-[#262626] rounded-xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">🔐 Админ панел</h1>
          <form onSubmit={handleLogin}>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Въведете парола" className="w-full px-4 py-3 bg-[#262626] border border-[#404040] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition mb-4" />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button type="submit" className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition">Вход</button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-xl">N</span></div>
              <span className="text-xl font-bold text-white">CyberNinjas - Админ</span>
            </div>
            <a href="/" className="text-gray-400 hover:text-white transition">← Обратно към сайта</a>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-[#171717] border border-[#262626] rounded-xl p-8">
          <h1 className="text-2xl font-bold text-white mb-8">Управление на новини</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button className="p-4 bg-[#262626] hover:bg-orange-500/20 border border-[#404040] hover:border-orange-500/50 rounded-lg transition text-left"><div className="text-xl mb-2">➕</div><div className="font-semibold text-white">Добави новина</div><div className="text-sm text-gray-400">Нова статия</div></button>
            <button className="p-4 bg-[#262626] hover:bg-orange-500/20 border border-[#404040] hover:border-orange-500/50 rounded-lg transition text-left"><div className="text-xl mb-2">📝</div><div className="font-semibold text-white">Редактирай</div><div className="text-sm text-gray-400">Промени съществуваща</div></button>
            <button className="p-4 bg-[#262626] hover:bg-orange-500/20 border border-[#404040] hover:border-orange-500/50 rounded-lg transition text-left"><div className="text-xl mb-2">🗑️</div><div className="font-semibold text-white">Изтрий</div><div className="text-sm text-gray-400">Премахни статия</div></button>
          </div>
          <div className="border border-[#262626] rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#262626]"><tr><th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Задание</th><th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Категория</th><th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Дата</th><th className="px-4 py-3 text-right text-sm font-semibold text-gray-300">Действия</th></tr></thead>
              <tbody className="divide-y divide-[#262626]">
                <tr className="hover:bg-[#262626]/50 transition"><td className="px-4 py-3 text-white">GPT-5 ще промени начина, по който работим</td><td className="px-4 py-3"><span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">AI Новини</span></td><td className="px-4 py-3 text-gray-400">2026-04-01</td><td className="px-4 py-3 text-right"><button className="text-orange-500 hover:text-orange-400 mr-3">Редактирай</button><button className="text-red-500 hover:text-red-400">Изтрий</button></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}