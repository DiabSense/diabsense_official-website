# DiabSense Official Website

A premium, comprehensive website showcasing **DiabSense**'s diabetes management solutions, product catalog, clinical evidence, news/updates, and company background. The interface is optimized with modern layouts, custom charts, interactive UI controls, and micro-animations to support awareness and education for diabetes care.

---

## 🌟 Key Features & Pages

The application is structured into the following main views:

*   **🏠 Home:** Modern landing page with a hero banner, key product features, testimonials, value proposition, and quick calls-to-action.
*   **💡 Solution:** Deep dive into DiabSense's diabetes care model, explaining clinical integrations and system capabilities.
*   **📦 Products:** Product showcase detailing hardware specs, wearable sensors, and companion software/apps.
*   **🔬 Clinical Evidence:** Interactive stats, clinical trial outcomes, and data validations with custom visualizations.
*   **👥 About Us:** Company mission, core values, leadership team, and corporate vision.
*   **📰 News & Insights:** Latest articles, clinical publications, and corporate press releases.
*   **✉️ Contact Us:** Feedback forms, inquiry portals, and contact information.

---

## 🛠️ Technology Stack

This project is built using a modern frontend ecosystem:

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Core application runtime & component architecture |
| **Vite 6** | Fast build tooling and local development environment |
| **TypeScript** | Type safety and enhanced developer tooling |
| **Tailwind CSS v4** | Modern styling framework utilizing CSS variables and inline theme extensions |
| **Motion** | Fluid, declarative micro-animations and transitions |
| **Recharts** | Interactive medical data charts and statistics |
| **Radix UI** | Unstyled, accessible primitives for UI components |
| **Lucide React** | Sleek and consistent outline icon family |

---

## 📂 Project Directory Structure

```filepath
DiabSense Web Dev/
├── guidelines/            # Formatting guidelines & design system rules
├── public/                # Static assets served as-is (e.g., favicon, icons)
├── src/
│   ├── assets/            # App images, logos, and icons categorized by page
│   ├── components/
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   └── ui/            # Reusable design system primitives (Button, Card, etc.)
│   ├── pages/             # Main screen components (Home, Solution, About, etc.)
│   ├── styles/            # Tailwind theme tokens (theme.css), styles, and typography
│   ├── utils/             # Helper functions, style builders, and shared fonts
│   ├── App.tsx            # Main layout frame and client-side page routing
│   └── main.tsx           # React application mounting point
├── tsconfig.json          # TypeScript compilation configuration
├── vite.config.ts         # Vite server, aliases, and custom asset resolver settings
└── package.json           # Project dependencies and script runner configurations
```

---

## 🧭 Page Navigation Model

To ensure seamless transitions and a rapid web experience, this application uses a state-driven navigation model:
*   Navigation is controlled via `page` state in [App.tsx](file:///d:/Excel%20Tech%20OU/DiabSense/DiabSense%20Official%20Website%20Dev/DiabSense%20Web%20Dev/src/App.tsx).
*   Switching pages dynamically mounts the corresponding page view while scrolling the window to the top smoothly.
*   This approach avoids unnecessary browser reloads and maintains application state.

---

## 🚀 Setup & Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) along with `npm` or `pnpm`.

### 1. Clone the repository and navigate to the directory
```bash
git clone https://github.com/DiabSense/diabsense_official-website.git
cd "DiabSense Web Dev"
```

### 2. Install dependencies
Using **npm**:
```bash
npm install
```
Using **pnpm**:
```bash
pnpm install
```

### 3. Run the development server
Start Vite locally:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for production
To compile the static production bundle:
```bash
npm run build
```
The output files will be compiled into the `dist/` directory, ready to be served by any static host.

---

## 🎨 Styling and Theme System

This application utilizes **Tailwind CSS v4** with a central design tokens file located at [src/styles/theme.css](file:///d:/Excel%20Tech%20OU/DiabSense/DiabSense%20Official%20Website%20Dev/DiabSense%20Web%20Dev/src/styles/theme.css). 

*   **Design Tokens:** Colors, background/foreground colors, border radii, and chart palettes are exposed as CSS Custom Properties (e.g. `--primary`, `--muted`).
*   **Typography:** Default responsive sizing for headings (`h1`-`h4`), inputs, buttons, and labels are defined globally under the `@layer base` directive.
*   **Figma Asset Resolver:** The custom plugin `figmaAssetResolver` inside [vite.config.ts](file:///d:/Excel%20Tech%20OU/DiabSense/DiabSense%20Official%20Website%20Dev/DiabSense%20Web%20Dev/vite.config.ts) automatically maps raw assets from the Figma design layout to their corresponding local file paths in `src/assets/`.
