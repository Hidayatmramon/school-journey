# Vue

Small projects from learning Vue 3 with Vite, plus the Laravel API behind a company-profile site.

| Folder | What it covers |
|---|---|
| `learning-vue`, `learning-day2` | Vue 3 basics: components and templates |
| `vue-card` | A card component |
| `vue-todolist` | A to-do list app |
| `vue-router` | Navigating between pages with Vue Router 4 |
| `compro-learning-vue`, `compro-wikrama-pertemuan-3` | Company-profile website practice |
| `compro-wikrama-pertemuan-4` | Company-profile site with Vue Router and an `Api` folder for API calls |
| `api-wikrama` | Laravel API for a company-profile site: home, services, portfolio, blog, categories, and a contact form |

## Running the Vue projects

Requirements: Node.js.

```bash
cd vue/vue-todolist
npm install
npm run dev
```

## Running the API

Requirements: PHP 8, Composer, and MySQL.

```bash
cd vue/api-wikrama
composer install
cp .env.example .env
php artisan key:generate
```

Create an empty database, set `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD` in `.env`, and import `api-wikrama.sql`. Then run:

```bash
php artisan serve
```
