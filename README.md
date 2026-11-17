# Monish Giri — Full Stack Software Engineer Portfolio

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-10B981?logo=w3c&logoColor=white)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Netlify Status](https://img.shields.io/badge/Deploy-Netlify_Ready-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, highly interactive, and responsive developer portfolio engineered for **Monish Giri**, a Full Stack Software Engineer specializing in **Node.js, Express.js, React.js, MongoDB, and Java Spring Boot**.

---

## 🚀 Key Features

* **Interactive Developer Console / Terminal:**
  * Type commands (`skills`, `projects`, `experience`, `education`, `contact`, `resume`, `next`) or click quick-command chips.
  * Auto-navigation: Executing any command or typing `next` prints the output and automatically glides the viewport smoothly to the targeted section.
* **Live Interactive Code Preview:**
  * Interactive `developer.ts` and `specs.json` tabs directly inside the Hero section.
  * Dynamic typing animation showcasing core engineering specializations.
* **Filterable & Searchable Tech Stack:**
  * Real-time search and filter tabs across Frontend, Backend & DBs, Languages, Tools & DevOps, and Methodologies.
* **Verified Work Experience & Impact Metrics:**
  * Documents roles at **Q2A Media Services Pvt. Ltd.** (Software Engineer & Programming Intern).
  * Highlights quantifiable accomplishments: 30% Redux boilerplate reduction, 20% delivery acceleration via GitHub Copilot, and 20% UI defect reduction.
* **Key Projects with Live Links:**
  * **AI Interview Platform:** Real-time Web Speech API voice transcription, Google Gemini API questions, and Puppeteer PDF reports ([Live Demo](https://interview-ai-1-ycq8.onrender.com/) | [GitHub](https://github.com/MonishGiri/Interview-ai)).
  * **Social Media Backend System:** 20+ secure REST endpoints, JWT authentication, RBAC, and MongoDB index optimization ([GitHub](https://github.com/MonishGiri/JS-Backend)).
  * **Excel Pixel LMS Platform:** Production enterprise learning platform for Dubai client with video-timeline annotations and WCAG 2.1 AA accessibility.
* **One-Click Resume Access:**
  * Direct automatic download of `Monish_Giri_Resume.pdf` from the Navbar, Hero, About, and Footer.
  * Interactive **"View Resume"** modal with ATS-formatted preview and print support.
* **100% Responsive & Accessible:**
  * Built with WCAG 2.1 AA semantic guidelines, dark/light theme switching, and fluid layouts down to 320px screens.

---

## 🛠️ Tech Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Frontend Framework** | React 19, Vite 7 |
| **Styling & Theming** | Modern CSS Variables, Glassmorphism, Dark/Light Mode, Google Fonts (Outfit & Fira Code) |
| **Motion & Animation** | Framer Motion, React Scroll (Smooth Scroller) |
| **Icons** | React Icons (`fa`, `si`) |
| **Backend & Architecture** | Node.js, Express.js, Java Spring Boot, Hibernate, RESTful APIs, JWT, MVC |
| **Databases** | MongoDB, Mongoose ORM, MySQL |
| **DevOps & Tooling** | Linux (Ubuntu), Git, GitHub Copilot, Postman, Chrome DevTools, Netlify |

---

## 📂 Project Structure

```text
PersonalPortfolio/
├── public/
│   ├── assets/
│   │   ├── profile.png              # Professional studio portrait
│   │   ├── project1.png             # AI Interview Platform preview
│   │   ├── project2.png             # Social Media Backend preview
│   │   └── project3.png             # Excel Pixel LMS preview
│   ├── Monish_Giri_Resume.pdf       # Official downloadable resume PDF
│   └── _redirects                   # Netlify single-page application redirect rule
├── src/
│   ├── assets/                      # Vector assets & icons
│   ├── components/
│   │   ├── About.jsx                # Background, technical pillars, quick specs
│   │   ├── ApiPlayground.jsx        # Interactive REST API showcase sandbox
│   │   ├── Contact.jsx              # One-click copy email/phone & inquiry form
│   │   ├── CustomCursor.jsx         # Custom trailing interactive cursor
│   │   ├── Education.jsx            # MCA, BCA, and GNIIT Professional Diploma
│   │   ├── Experience.jsx           # Software Engineer & Intern work history
│   │   ├── Footer.jsx               # Quick links, copyright, compliance badge
│   │   ├── Hero.jsx                 # Dynamic typing, developer.ts code snippet, CTAs
│   │   ├── Navbar.jsx               # Navigation, direct CV download, theme toggle
│   │   ├── Projects.jsx             # Key projects with live links & tech pills
│   │   ├── ResumeModal.jsx          # ATS document preview & print dialog
│   │   ├── Skills.jsx               # Filterable & searchable tech stack
│   │   ├── Terminal.jsx             # Interactive console with section auto-nav
│   │   └── ThemeToggle.jsx          # Dark / Light theme switch
│   ├── data/
│   │   └── portfolioData.js         # Centralized resume & portfolio content
│   ├── App.jsx                      # Root application layout
│   ├── index.css                    # Design system, CSS variables & media queries
│   └── main.jsx                     # Application entry point
├── netlify.toml                     # Netlify deployment configuration
├── package.json                     # Scripts & dependencies
└── vite.config.js                   # Vite bundler configuration
```

---

## 💻 Getting Started Locally

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/monishgiri/PersonalPortfolio.git
   cd PersonalPortfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173` (or the port specified in terminal).

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🌐 Netlify Deployment Guide

This project is pre-configured for seamless one-click deployment on Netlify via `netlify.toml` and `public/_redirects`.

### Option A: Deploy via GitHub & Netlify Dashboard (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete developer portfolio redesign"
   git push origin main
   ```
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** > **"Import an existing project"** > **"GitHub"**.
4. Select `PersonalPortfolio`.
5. Netlify will automatically detect settings:
   * **Build Command:** `npm run build`
   * **Publish Directory:** `dist`
6. Click **"Deploy site"**.

### Option B: Deploy via Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## 🏷️ Recommended Domain Names

### 1. Free Netlify Subdomains (`*.netlify.app`)
In Netlify, navigate to **Site configuration > Change site name** and claim:
* `monishgiri.netlify.app` *(Top recommendation — clean & professional)*
* `monish-dev.netlify.app` *(Developer identity)*
* `monishgiri-dev.netlify.app`
* `monish-portfolio.netlify.app`

### 2. Custom Domains for Software Engineers (Custom DNS)
For high recruiter credibility and personal branding:
* **`monishgiri.dev`** — *Top Industry Standard for Software Engineers*
* **`monishgiri.in`** — *Ideal for India & international remote engineering roles*
* **`monishgiri.com`** — *Universal global domain*
* **`monish.dev`** — *Short, memorable, high-impact*
* **`monishbuilds.dev`** / **`monishbuilds.com`** — *Active creator / builder vibe*

---

## 📬 Contact & Connect

* **Developer:** Monish Giri
* **Role:** Full Stack Software Engineer
* **Location:** New Delhi, India
* **Email:** [monishgiri46@gmail.com](mailto:monishgiri46@gmail.com)
* **Phone:** +91-97735-59682
* **GitHub:** [github.com/monishgiri](https://github.com/monishgiri)
* **LinkedIn:** [linkedin.com/in/monish-giri-a39145120](https://www.linkedin.com/in/monish-giri-a39145120/)
