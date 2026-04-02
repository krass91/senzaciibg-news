# CyberNinjas AI News Portal

Новинарски сайт с дизайн вдъхновен от cyberninjas.ai

## ?? Бързо стартиране

```bash
npm install
npm run dev
```

Сайтът се отваря на http://localhost:3000

## ?? Деплой

### Vercel (препоръчително)
```bash
npm i -g vercel
vercel
```

### Други платформи
```bash
npm run build
npm run start
```

## ?? Админ панел

- URL: `/admin`
- **Парола:** `CyberNinja2026!`

## ?? Добавяне на новини

### През админ панела
1. Отиди на `/admin`
2. Въведи паролата
3. Кликни "Добави новина"

### Директно в GitHub
Добави JSON файл в `src/content/articles/`:

```json
{
  "id": "my-article-slug",
  "title": "Заглавие",
  "excerpt": "Кратко описание...",
  "content": "Пълен текст...",
  "category": "AI Новини",
  "categoryClass": "category-ai-news",
  "image": "https://example.com/image.jpg",
  "date": "2026-04-02",
  "readTime": "5 мин",
  "slug": "my-article-slug",
  "tags": ["AI", "Новини"],
  "published": true
}
```

## ?? Конфигурация

Създай `.env` файл:

```env
GITHUB_TOKEN=github_pat_...
GITHUB_REPO=krass91/senzaciibg-news
```

### GitHub Token
1. https://github.com/settings/tokens
2. Generate new token (classic)
3. Избери `repo` scope

## ?? Структура

```
+-- src/
¦   +-- app/
¦   ¦   +-- page.js          # Начална страница
¦   ¦   +-- admin/           # Админ панел
¦   ¦   +-- layout.js
¦   ¦   L-- globals.css
¦   +-- components/
¦   ¦   +-- ArticleCard.js
¦   ¦   +-- Sidebar.js
¦   ¦   L-- Newsletter.js
¦   L-- lib/
¦       L-- articles.js      # GitHub API
+-- package.json
L-- tailwind.config.js
```

## ?? Категории

| Категория | CSS клас | Цвят |
|-----------|----------|------|
| AI Инструменти | `category-ai-tools` | Оранжев |
| AI Новини | `category-ai-news` | Виолетов |
| AI Ръководства | `category-ai-guides` | Син |
| AI за Бизнес | `category-ai-business` | Зелен |
| AI Тенденции | `category-ai-trends` | Розов |
