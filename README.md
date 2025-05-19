# 🚀 VibeShip Boilerplate

A **vibe friendly starter template** for building full-stack web apps with **Next.js 15**, **Tailwind CSS**, and all the essentials for shipping fast.

Use this when you want to **start building real projects** without overthinking your stack.

---

## ✅ What's Included

- **[Next.js 15](https://nextjs.org)** (App Router + TypeScript) — Production-ready framework with React 19.
- **[Tailwind CSS](https://tailwindcss.com)** — Utility-first styling that works with your custom designs.
- **[shadcn/ui](https://ui.shadcn.com)** — Pre-wired headless components (buttons, dialogs, etc.) ready for your styles.
- **[Framer Motion](https://www.framer.com/motion/)** — For clean, simple animations.
- **[Supabase](https://supabase.com)** — Auth and database client ready to connect to your project.
- **[Resend](https://resend.com)** — Pre-wired email utility for sending transactional emails.
- **AI Clients** — [OpenAI](https://openai.com), [Anthropic](https://anthropic.com)

---

## 🛠️ Getting Started

1. **Clone This Template**

```bash
git clone https://github.com/jjcall/vibeship-boilerplate.git my-app
cd my-app
```

2. **Install Dependencies**

```bash
npm install
```

3. **Start Your Dev Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Setup

Copy the example env file and add your keys:

```bash
cp .env.example .env.local
```

Fill in the environment variables your project will require:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
RESEND_API_KEY=
```

---

## 🧱 Ready to Build

You'll find example files already set up to help you get started:

- **\`src/components/\`** — Your reusable components (pre-wired with shadcn/ui).
- **\`src/lib/\`** — API clients for Supabase, Stripe, and AI providers.
- **\`src/app/api/send-email/route.ts\`** — Example email API you can extend.
- **\`src/app/layout.tsx\`** — Your global layout and styles.
- **\`src/app/page.tsx\`** — Your homepage.

Use these as a launchpad, delete what you don't need, and make it your own.

---

## 📝 VibeShip Cursor Rules

This project includes **predefined Cursor rules** to help you get the most out of **AI-assisted development**. These rules where heavily inspired by [@aashari](https://github.com/aashari) and their [00 - Cursor AI Prompting Rules.md](https://gist.github.com/aashari/07cc9c1b6c0debbeb4f4d94a3a81339e) gist.

### Available Cursor Rule Files

- `.cursor/rules/always-on.mdc`
  Persistent base rules applied to all AI actions. Defines project structure, style, and behavior.

- `.cursor/rules/request.mdc`
  Use when you want AI to build a new feature, refactor existing code, or make specific improvements.

- `.cursor/rules/diagnose.mdc`
  Use when you want AI to re-examine or fix an issue that wasn’t fully resolved previously.


---

### How to Use

1. **Make sure Cursor is installed and running in your editor.**
2. **Pick the Right Rule for Your Intent:**
   - **General AI Help**: _No action needed_, `always-on.mdc` applies automatically.
   - **New Features / Refactoring**: tag `@request` to guide AI behavior for building or improving code.
   - **Debugging / Issue Diagnosis**: tag `@diagnose` to guide AI in re-analyzing and resolving issues.
3. **Interact with Cursor as you normally would.**
   The rule context helps Cursor provide **more relevant and consistent outputs** based on your project’s standards.

---

### Why This Matters

By using these pre-written rule files, you ensure that:
- AI follows your **project structure and coding conventions**.
- AI applies **consistent problem-solving methods**.
- You get **higher quality, more reliable** results from AI-powered suggestions.

These rules make AI feel more like a **pair programming partner who actually knows your project**.

---

## 📐 Project Conventions

This project follows a consistent structure to keep development clean and efficient:

### 📁 File Organization
- `src/components/ui/` — Low-level UI components (shadcn/ui)
- `src/components/sections/` — Custom page sections (Hero, Pricing, etc.)
- `src/components/layout/` — Layout components (Navbar, Footer)
- `src/lib/` — API clients and helpers
- `src/app/` — Pages and routes

### 🎨 Development Guidelines
- TypeScript for all files
- Tailwind CSS for styling (using theme tokens)
- ES Modules for imports/exports
- Framer Motion for animations
- API clients from `src/lib/` (Supabase, Stripe, AI)

### ⚡ Core Principles
- Simplicity over perfection
- Ship fast, iterate often
- Easy to extend and maintain
- Clean, readable code over clever solutions

---

## 🧑‍💻 Start Building

There's no right or wrong way to start.
Grab a component, design a page, hit an API, or build a flow.
