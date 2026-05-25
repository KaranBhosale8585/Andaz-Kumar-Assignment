# Next-Gen Learning Dashboard

A futuristic student learning dashboard built with modern frontend architecture using Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

The project focuses heavily on smooth UI interactions, server-rendered data, responsive dashboard architecture, and motion-driven user experience while maintaining zero layout shifts and reusable component structure.

---

# Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Supabase
* PostgreSQL
* Framer Motion
* Lucide React
* pnpm

---

# Features

* Futuristic dark-mode dashboard UI
* Responsive Bento Grid layout
* Server Component based data fetching
* Supabase PostgreSQL integration
* Animated course progress cards
* Staggered entrance animations
* Framer Motion micro-interactions
* Collapsible sidebar navigation
* Mobile bottom navigation
* Loading skeletons
* Error boundaries
* Semantic HTML structure
* Responsive dashboard architecture
* Gradient/glassmorphism styling
* Production-ready App Router structure

---

# Project Structure

```bash
app/
│
├── layout.tsx
├── loading.tsx
├── error.tsx
│
├── (dashboard)/
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   ├── courses/
│   ├── analytics/
│   └── settings/
│
components/
│
├── dashboard/
│   ├── ActivityTile.tsx
│   ├── CourseCard.tsx
│   └── HeroTile.tsx
│
├── layout/
│   ├── DashboardGrid.tsx
│   ├── Header.tsx
│   └── Sidebar.tsx
│
lib/
│   ├── getCourses.ts
│   └── supabase/
│
types/
│   └── course.ts
```

---

# Why App Router + Server Components?

The dashboard uses Server Components for fetching course data directly from Supabase instead of using client-side fetching.

This approach helped with:

* improved performance
* cleaner data architecture
* reduced client-side JavaScript
* faster initial rendering
* easier loading/error handling

The dashboard page fetches data on the server and passes it into reusable client components for animations and interactions.

---

# Supabase Setup

## 1. Create a Supabase Project

Create a new project inside Supabase.

---

## 2. Create the `courses` Table

Run this SQL inside the Supabase SQL Editor:

```sql
create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer not null,
  icon_name text not null,
  created_at timestamp default now()
);
```

---

## 3. Insert Mock Data

```sql
insert into courses (title, progress, icon_name)
values
('Advanced React Patterns', 75, 'Code2'),
('Motion Design Basics', 45, 'Sparkles'),
('Next.js Architecture', 90, 'Layers3'),
('Database Optimization', 60, 'Database');
```

---

# Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

# `.env.example`

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

# Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project:

```bash
cd <project-folder>
```

Install dependencies using pnpm:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Start production server:

```bash
pnpm start
```

---

# Animation Architecture

Animations are handled entirely using Framer Motion.

Main animation patterns used:

* staggered card entrances
* hover elevation effects
* layoutId navigation transitions
* animated progress bars
* spring physics interactions

To avoid layout shifts, animations rely only on:

* transform
* opacity

instead of layout-changing properties.

---

# Responsive Design

## Desktop

* Full sidebar
* 4-column Bento Grid

## Tablet

* Collapsed sidebar
* 2-column grid

## Mobile

* Bottom navigation
* Single-column stacked layout

---

# Challenges Faced

### 1. Server vs Client Component Separation

One of the main challenges was separating animated client-side components from server-rendered data fetching.

The solution was:

* fetch data in Server Components
* pass typed props into client components

This kept the architecture clean while still allowing Framer Motion animations.

---

### 2. Preventing Layout Shifts

Animations initially caused visual jumps during hover transitions.

This was fixed by using:

* transform-based scaling
* opacity transitions
* fixed card dimensions
* spring-based animations

instead of changing layout properties.

---

### 3. Dynamic Lucide Icons

The course cards render icons dynamically using the `icon_name` field from Supabase.

A mapping object was used to safely resolve icons without hardcoding individual components.

---

# Deployment

The project is deployed using Vercel.

Production build command:

```bash
pnpm build
```

---

# Future Improvements

* authentication system
* real analytics integration
* user-specific dashboard data
* realtime progress updates
* chart visualizations
* theme customization
* course filtering/search
* optimistic UI updates

---

# Author

Karan Bhosale
