# first-vue-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

---

## Integrating with a Laravel backend 🔗

Follow these steps to connect this Vue app to your Laravel API:

1. Configure Vite env vars
   - Copy `.env.example` to `.env.local` and set `VITE_API_BASE_URL` to your Laravel host (e.g. `http://localhost:8000`).
   - Set `VITE_API_WITH_CREDENTIALS=true` if you use cookie-based auth (Laravel Sanctum).

2. Laravel CORS / cookies
   - Ensure `config/cors.php` allows your frontend origin (e.g. `http://localhost:5173`) and `supports_credentials` is `true` if using cookies.

3. Example API routes (Laravel)
   - Create RESTful routes (api.php):
     - GET `/api/foods` — list foods
     - POST `/api/foods` — create a food
     - PUT `/api/foods/{id}` — update
     - DELETE `/api/foods/{id}` — delete

4. Auth (optional)
   - If using Laravel Sanctum, follow the Sanctum docs to configure cookie-based auth and set `withCredentials` to `true` in this app.

5. Run and test
   - Start Laravel (`php artisan serve --host=127.0.0.1 --port=8000`) and the Vue dev server (`npm run dev`).
   - Visit `/foods` in the Vue app and it will call `/api/foods` on your Laravel app.

If you want, I can also scaffold the Laravel routes/controllers for you (I can show example PHP code).
