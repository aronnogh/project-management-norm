# Project Management Norm

A modern, full-stack project management application built with a robust TypeScript and Supabase tech stack.

## 🚀 Tech Stack

* **Frontend:** [TypeScript](https://github.com/aronnogh/project-management-norm/search?l=typescript), [React](https://github.com/aronnogh/project-management-norm/blob/main/tsconfig.app.json) (via Vite), [Tailwind CSS](https://github.com/aronnogh/project-management-norm/blob/main/tailwind.config.js)
* **Backend & Database:** [Supabase](https://github.com/aronnogh/project-management-norm/tree/main/supabase/migrations) (PostgreSQL, Migrations)
* **Build Tool:** [Vite](https://github.com/aronnogh/project-management-norm/blob/main/vite.config.ts)
* **Linting/Styling:** [ESLint](https://github.com/aronnogh/project-management-norm/blob/main/eslint.config.js), PostCSS

---

## 📁 Project Structure

```tree
├── src/                  # Frontend source code (React & TypeScript)
├── supabase/             # Supabase configuration and database migrations
├── index.html            # Main HTML entry point
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration

```

---

## 🛠️ Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

* **Node.js** (v18 or higher recommended)
* **npm** or **yarn**

### Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/aronnogh/project-management-norm.git](https://github.com/aronnogh/project-management-norm.git)
cd project-management-norm

```


2. **Install dependencies:**
```bash
npm install

```


3. **Configure Environment Variables:**
Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

```


4. **Run the Development Server:**
```bash
npm run dev

```


Open your browser and navigate to `http://localhost:5173` to view the application.

---

## 📜 Available Scripts

* `npm run dev` — Starts the Vite development server.
* `npm run build` — Builds the application for production.
* `npm run lint` — Runs ESLint to check for code quality and style issues.
* `npm run preview` — Locally preview the production build.

---

## 📄 License

This project is private and confidential.
