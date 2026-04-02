const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO || "krass91/senzaciibg-news";
const ARTICLES_PATH = "src/content/articles";
export async function getArticles() {
  if (!GITHUB_TOKEN) return getSampleArticles();
  const [owner, repo] = GITHUB_REPO.split("/");
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${ARTICLES_PATH}`, { headers: { Authorization: `token ${GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" } });
    if (!response.ok) return getSampleArticles();
    const files = await response.json();
    const articles = await Promise.all(files.filter((f) => f.name.endsWith(".json")).map(async (file) => { const r = await fetch(file.download_url); return await r.json(); }));
    return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (e) { return getSampleArticles(); }
}
export async function saveArticle(article) {
  if (!GITHUB_TOKEN) throw new Error("GITHUB_TOKEN not configured");
  const [owner, repo] = GITHUB_REPO.split("/");
  const filename = `${article.slug || article.id}.json`;
  const content = JSON.stringify(article, null, 2);
  const encodedContent = Buffer.from(content).toString("base64");
  let sha;
  try {
    const existing = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${ARTICLES_PATH}/${filename}`, { headers: { Authorization: `token ${GITHUB_TOKEN}` } });
    if (existing.ok) { const d = await existing.json(); sha = d.sha; }
  } catch (e) {}
  const method = sha ? "PUT" : "POST";
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${ARTICLES_PATH}/${filename}`;
  const response = await fetch(url, { method, headers: { Authorization: `token ${GITHUB_TOKEN}`, "Content-Type": "application/json" }, body: JSON.stringify({ message: `Update article: ${article.title}`, content: encodedContent, sha: sha }) });
  if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
  return await response.json();
}
export async function deleteArticle(articleId) {
  if (!GITHUB_TOKEN) throw new Error("GITHUB_TOKEN not configured");
  const [owner, repo] = GITHUB_REPO.split("/");
  const filename = `${articleId}.json`;
  const existing = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${ARTICLES_PATH}/${filename}`, { headers: { Authorization: `token ${GITHUB_TOKEN}` } });
  if (!existing.ok) throw new Error("File not found");
  const existingData = await existing.json();
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${ARTICLES_PATH}/${filename}`, { method: "DELETE", headers: { Authorization: `token ${GITHUB_TOKEN}`, "Content-Type": "application/json" }, body: JSON.stringify({ message: `Delete article: ${articleId}`, sha: existingData.sha }) });
  if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
  return true;
}
function getSampleArticles() {
  return [{ id: "1", title: "GPT-5 ще промени начина, по който работим", excerpt: "Новите възможности на AI асистентите...", category: "AI Новини", categoryClass: "category-ai-news", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800", date: "2026-04-01", readTime: "5 мин", slug: "gpt-5-promeni-nachina", content: "Пълен текст..." }];
}
