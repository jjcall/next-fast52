# 🚀 next-fast52

A **friendly starter template** for building full-stack web apps with **Next.js 15**, **Tailwind CSS**, and all the essentials for shipping fast.

Use this when you want to **start building real projects** without overthinking your stack.

---

## ✅ What's Included

- **[Next.js 15](https://nextjs.org)** (App Router + TypeScript) — Production-ready framework with React 19.
- **[Tailwind CSS](https://tailwindcss.com)** — Utility-first styling that works with your custom designs.
- **[shadcn/ui](https://ui.shadcn.com)** — Pre-wired headless components (buttons, dialogs, etc.) ready for your styles.
- **[Framer Motion](https://www.framer.com/motion/)** — For clean, simple animations.
- **[Supabase](https://supabase.com)** — Auth and database client ready to connect to your project.
- **[Stripe](https://stripe.com)** — Ready to hook up payments or memberships.
- **[Resend](https://resend.com)** — Pre-wired email utility for sending transactional emails.
- **AI Clients** — [OpenAI](https://openai.com), [Anthropic](https://anthropic.com), and [Perplexity](https://perplexity.ai) clients to experiment with AI features.

---

## 🛠️ Getting Started

1. **Clone This Template**

```bash
git clone https://github.com/yourusername/next-fast52.git my-app
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

Fill in the following:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
PERPLEXITY_API_KEY=
RESEND_API_KEY=
```

---

## 🧱 Ready to Build

You'll find example files already set up to help you get started:

- **\`src/components/\`** — Your reusable components (pre-wired with shadcn/ui).
- **\`src/lib/\`** — API clients for Supabase, Stripe, and AI providers.
- **\`src/app/api/send-email/route.ts\`** — Example email API you can extend.
- **\`src/app/(auth)/login/page.tsx\`** — Example login page using Supabase.
- **\`src/app/layout.tsx\`** — Your global layout and styles.
- **\`src/app/page.tsx\`** — Your homepage.

Use these as a launchpad, delete what you don't need, and make it your own.

---

## 🚀 Features You Can Add

This starter is ready to grow with you:

- ✅ Payments with Stripe
- ✅ Auth with Supabase
- ✅ Transactional Emails with Resend
- ✅ AI Features with OpenAI, Anthropic, or Perplexity
- ✅ Beautiful UI with Tailwind + Framer Motion
- ✅ Custom Sections and Layouts

---

## 📦 Pre-Installed Packages

Everything is already installed and ready to use:

```
@supabase/supabase-js
@stripe/stripe-js
openai
@anthropic-ai/sdk
resend
framer-motion
shadcn/ui components (via /src/components/ui)
tailwindcss
lucide-react
```

And more.

---

## 🧑‍💻 Start Building

There's no right or wrong way to start.
Grab a component, design a page, hit an API, or build a flow.

### You're already set up to ship.
