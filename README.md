# Nidhish | Modern Developer Portfolio

A sleek, responsive, minimalist developer portfolio website designed for **Nidhish**, a Bachelor of Computer Applications (BCA) student preparing for software engineering and development internships.

Built with **vanilla HTML5, CSS3, and JavaScript**—zero build steps, zero complex dependencies, and 100% production-ready.

---

## 📁 Project Folder Structure

```
my portfolio/
├── index.html        # Semantic HTML5 document (structure, content, accessibility)
├── style.css         # Modern CSS3 stylesheet (design system, dark theme, responsive grid)
├── script.js         # Vanilla JavaScript (navigation, scroll reveals, active nav, copy helpers)
├── .gitignore        # Standard Git ignore file for clean repositories
└── README.md         # Documentation, deployment guide & checklists
```

---

## 🚀 How to Run Locally

You do not need Node.js, Webpack, or any build tool to run this portfolio.

### Option 1: Direct File Opening (Simplest)
1. Navigate to the `my portfolio` directory on your computer:
   ```
   c:\Users\devad\OneDrive\Desktop\my portfolio
   ```
2. Double-click on `index.html`.
3. It will immediately open and run smoothly in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave, Safari).

### Option 2: Using Python's Built-in HTTP Server
If you'd like to test via a local HTTP server:
1. Open PowerShell or Command Prompt in the project folder.
2. Run:
   ```bash
   python -m http.server 3000
   ```
3. Open your browser and visit: `http://localhost:3000`

### Option 3: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and select **"Open with Live Server"**.

---

## 🎨 Design System & Highlights

- **Theme:** Premium dark minimalist aesthetic.
  - Backgrounds: Deep black (`#090a0f`), charcoal (`#0f111a`), and card surfaces (`#131622`).
  - Accents: Vibrant purple (`#8b5cf6`) and tech blue (`#3b82f6`).
- **Typography:** Google Fonts *Plus Jakarta Sans* for clean editorial reading and *JetBrains Mono* for code elements, with robust system fallbacks.
- **Visuals:** CSS/SVG-crafted interactive code card and project illustrations—completely independent of broken external image links.
- **Interactions:**
  - Responsive mobile drawer navigation with animated hamburger toggle.
  - IntersectionObserver-driven scroll reveal animations.
  - Real-time active section navigation indicator on scroll.
  - Interactive "Copy snippet" & "Copy email" with feedback tooltips.
  - Smooth-scrolling with header offset adjustment.
  - Accessible back-to-top button.
  - Client-side validated contact form with automatic mailto composer.
  - Respects user preference for `prefers-reduced-motion`.

---

## 📦 How to Upload to GitHub

Follow these steps to push your portfolio to GitHub:

### Step 1: Initialize Git and Create Local Commit
Run the following commands in PowerShell inside the portfolio folder:
```bash
git init
git add .
git commit -m "Initial commit: modern developer portfolio for Nidhish"
```

### Step 2: Create a New GitHub Repository
1. Log in to your [GitHub account](https://github.com).
2. Click the **+** (plus icon) in the top right corner and choose **New repository**.
3. Name your repository (e.g., `portfolio` or `nidhish-portfolio`).
4. Set visibility to **Public**.
5. Do **not** check "Initialize this repository with a README" (you already have one).
6. Click **Create repository**.

### Step 3: Link and Push to GitHub
Copy the remote repository URL from GitHub and run:
```bash
git branch -M main
git remote add origin https://github.com/codewithdizzzy/<your-repo-name>.git
git push -u origin main
```

---

## 🌐 Deployment Instructions

### Method A: Deploy via GitHub Pages (Free & Recommended)
1. Open your repository on GitHub.
2. Go to **Settings** > **Pages** (under the "Code and automation" section in the left sidebar).
3. Under **Branch**, select `main` from the dropdown menu and set the folder to `/(root)`.
4. Click **Save**.
5. After 1–2 minutes, your website will be live at:
   ```
   https://codewithdizzzy.github.io/<your-repo-name>/
   ```

### Method B: Deploy via Vercel (Fastest & Automatic CI/CD)
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New** > **Project**.
3. Import your `portfolio` repository.
4. Leave all build settings at their defaults (Framework Preset: **Other** / root directory `./`).
5. Click **Deploy**.
6. Your portfolio will receive a custom `.vercel.app` URL with free SSL and edge CDN caching.

---

## ✍️ Personalization & Placeholders Checklist

Replace the following placeholder values in `index.html` with your actual personal details:

- [ ] **College / Institution Name:** Search for `[Add college / university name]` in `index.html` (Education section) and replace with your university or institute.
- [ ] **Expected Graduation Year:** Search for `[Add graduation year, e.g. 2026]` and update with your graduation year.
- [x] **GitHub Profile:** Configured to `https://github.com/codewithdizzzy`
- [x] **LinkedIn Profile:** Configured to `https://www.linkedin.com/in/nidhish-devadiga-0632092b5`
- [ ] **Active Email:** Replace `your.email@example.com` with your active email address in the hero, contact cards, and footer.
- [ ] **Project Repositories:** Once created, ensure your project repos match (e.g. `expense-tracker`, `ai-study-assistant`, `student-performance-dashboard`).
- [ ] **Open Graph Metadata:** Update the `og:url` and `og:image` meta tags at the top of `index.html` once deployed.
- [ ] **Contact Form Backend (Optional):** If you wish to receive form emails directly into your inbox without opening the email client:
  1. Sign up for a free account at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
  2. Add your endpoint URL to the form's `action` attribute in `index.html` and set `method="POST"`.

---

## 🧪 Testing Checklist

Before sharing your portfolio with recruiters, verify each item:

- [x] **Mobile Responsiveness (375px):**
  - Navigation menu opens and closes smoothly.
  - Buttons and interactive items have touch-friendly tap heights (>= 44px).
  - No horizontal scrolling or overflow.
- [x] **Tablet & Laptop (768px – 1024px):**
  - Layout transitions into multi-column grids for skills, projects, and education.
  - Code visual card maintains balanced proportions.
- [x] **Desktop (1440px+):**
  - Content stays centered within maximum container width (`1200px` / `1280px`).
  - Ample whitespace and balanced contrast.
- [x] **Navigation & Links:**
  - All navigation links scroll smoothly to their respective sections.
  - Active section link updates dynamically as you scroll.
  - External links open in new tabs with `rel="noopener noreferrer"`.
- [x] **Accessibility (a11y):**
  - "Skip to main content" link works when pressing `Tab` upon page load.
  - All interactive icons have accessible `aria-label` or SVG titles.
  - Contrast ratios comply with WCAG AA standards.
  - Respects OS-level reduced motion preferences (`prefers-reduced-motion`).
- [x] **Form Validation:**
  - Submitting empty inputs triggers descriptive error alerts under each field.
  - Entering invalid email format triggers immediate validation feedback.
  - Valid submission prepares pre-formatted message draft.
- [x] **Console Errors:**
  - Clean JavaScript execution with zero console errors or warnings.

---

## 📄 License
This project is open-source and free to customize. Designed and built with clean code standards.
