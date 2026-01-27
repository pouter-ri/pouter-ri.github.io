# WeLoad Solutions – Landing Page

This project is a simple landing page for **WeLoad Solutions**, built to present our startup, highlight our products, and showcase our Carrier and Shipper applications.

The goal of this app is purely informational: introduce WeLoad Solutions, explain what we’re building, and guide users to the right application or upcoming features (Coming Soon pages, beta access, etc.).

---

## 🚀 Tech Stack

This project is built with a modern frontend stack:

- **Vite** – fast development and optimized builds
- **React 19** – UI library
- **TypeScript** – type safety and better developer experience
- **Tailwind CSS** – utility-first styling
- **React Router** – client-side routing
- **Framer Motion** – animations and transitions
- **Three.js / React Three Fiber** – 3D visuals where needed
- **i18next + react-i18next** – internationalization (i18n)

---

## 📂 Project Structure (Simplified)

```
src/
 ├─ assets/            # Images, icons, static assets
 ├─ components/        # Reusable UI components
 ├─ pages/             # Application pages (Home, ComingSoon, etc.)
 ├─ i18n/              # Internationalization setup
 │  ├─ locales/
 │  │  ├─ en/
 │  │  ├─ fr/
 │  │  └─ es/
 │  └─ index.ts
 ├─ App.tsx
 ├─ main.tsx
```
The `dist/` folder is generated after building the project and contains the production-ready files.

---

## 🌍 Internationalization (i18n)

The app supports multiple languages using **i18next**.

- Translation files live under:
  ```
  src/i18n/locales/{lang}/translation.json
  ```
- Currently supported languages:
  - English (en)
  - French (fr)
  - Spanish (es)

Language detection is handled automatically via the browser, with the ability to extend or add new languages easily.

---

## ▶️ Running the Project

### Install dependencies
```bash
npm install
```

### Run in development mode
```bash
npm run dev
```

### Run with local environment config
```bash
npm run dev:local
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

Environment-specific variables are managed using Vite modes:
- `.env.development`
- `.env.devlocal`
- `.env.production`

---

## 📦 Build Output

After running a build, the output will be available in the `dist/` directory and can be deployed to any static hosting service.

---

## 🏗️ About WeLoad Solutions

**WeLoad Solutions** is a Canadian startup with a tech team based in Tunis, Tunisia.  
We are building a modern truck transportation platform with dedicated applications for **Carriers** and **Shippers**, starting in Canada with plans to expand to the US.

---

## 📄 License

This project is private and intended for internal and company use.
