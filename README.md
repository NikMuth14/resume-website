# Nikhil Muthyala — Resume Website

A modern, responsive personal resume website with a built-in chatbot assistant. Built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools required.

![Status](https://img.shields.io/badge/status-active-brightgreen) ![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JS](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## Quick Start

### Prerequisites

- **Python 3.x** (for the local development server) — [Download](https://www.python.org/downloads/)
- Any modern web browser (Chrome, Firefox, Edge, Safari)

### Start the Server

```bash
cd "c:\Users\nikhi\OneDrive\Documents\All work\github\resume-website"
python -m http.server 8080
```

Then open **http://localhost:8080** in your browser.

> You can use any port number. Replace `8080` with your preferred port (e.g., `3000`, `5500`).

### Stop the Server

- **Option 1:** Press `Ctrl + C` in the terminal where the server is running
- **Option 2:** Find and kill the process manually:
  ```bash
  # Find the process using port 8080
  netstat -ano | findstr :8080

  # Kill it by PID (replace 12345 with the actual PID from above)
  taskkill /F /PID 12345
  ```

### Alternative: VS Code Live Server

If you use VS Code, install the **Live Server** extension and right-click `index.html` → "Open with Live Server". This gives you auto-reload on file changes.

---

## Project Structure

```
resume-website/
├── index.html              # Main HTML — all page sections and structure
├── styles.css              # All styling — dark theme, responsive layout, animations
├── script.js               # Chatbot logic, scroll animations, nav behavior
├── Cover Photo Nik.jpeg    # Profile photo (displayed in hero section)
├── Nikhil Muthyala DS.pdf  # Source resume PDF
└── README.md               # This file
```

---

## Code Overview

### `index.html`

The single-page HTML file contains all sections:

| Section          | ID               | Description                                      |
|------------------|------------------|--------------------------------------------------|
| Navigation       | `#navbar`        | Fixed top nav with smooth scroll links            |
| Hero             | `#hero`          | Name, title, tagline, social links, profile photo |
| About            | `#about`         | Professional summary and key stats                |
| Experience       | `#experience`    | Work history timeline (4 roles)                   |
| Education        | `#education`     | Master's in Data Science — UAB                    |
| Skills           | `#skills`        | 8 skill categories with tag-based layout          |
| Projects         | `#projects`      | 3 project cards with tech stacks                  |
| Certifications   | `#certifications`| 4 Google Cloud & Python certifications            |
| Contact          | `#contact`       | Email, LinkedIn, phone, location                  |
| Chatbot          | `#chatbot`       | Floating chat widget (bottom-right corner)        |

### `styles.css`

- **Theme:** Dark background (`#0f172a`) with indigo/cyan gradient accents
- **CSS Variables:** All colors, shadows, and transitions defined in `:root`
- **Layout:** Flexbox + CSS Grid, fully responsive (mobile breakpoint at 768px)
- **Animations:** Scroll fade-in, floating avatar, spinning ring, hover effects
- **Key sections:**
  - Lines 1–30: Reset & CSS variables
  - Lines 31–120: Navbar (fixed, blur backdrop, scroll effect)
  - Lines 121–240: Hero section (avatar, buttons, socials)
  - Lines 280–440: Timeline (experience/education)
  - Lines 440–490: Skills grid
  - Lines 490–560: Project cards
  - Lines 600–640: Certifications grid
  - Lines 650–850: Chatbot widget
  - Lines 860–930: Responsive breakpoints

### `script.js`

- **`resumeData` object (lines 1–96):** All resume content in a structured JS object. The chatbot reads from this to answer questions. **Edit this object to update your resume info.**
- **Navbar scroll effect (lines 98–106):** Adds shadow on scroll
- **Mobile nav toggle (lines 108–120):** Hamburger menu for mobile
- **Scroll animations (lines 122–140):** IntersectionObserver-based fade-in
- **Chatbot (lines 142–290):**
  - `sendMessage()` — Handles user input and triggers response
  - `addMessage()` — Appends messages to the chat UI
  - `generateResponse()` — Keyword-based response matching:
    - Greetings, name, about, experience, education, skills, projects, certifications, contact
  - Supports: hi, skills, experience, education, projects, certifications, contact, etc.
- **Active nav highlight (lines 280–290):** Highlights current section in nav

---

## Customization

### Update Resume Content

Edit the `resumeData` object at the top of `script.js`. The chatbot automatically uses this data. Then update the matching HTML sections in `index.html`.

### Change Profile Photo

Replace `Cover Photo Nik.jpeg` with your image file, then update the `<img src="...">` tag in `index.html` (line ~50).

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #6366f1;       /* Main accent color */
    --primary-dark: #4f46e5;
    --primary-light: #818cf8;
    --bg: #0f172a;            /* Background */
    --bg-alt: #1e293b;        /* Alternate section background */
    --accent: #22d3ee;        /* Cyan accent */
}
```

---

## Deployment (Free Hosting)

### GitHub Pages (Recommended)

```bash
cd "c:\Users\nikhi\OneDrive\Documents\All work\github\resume-website"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/resume-website.git
git push -u origin main
```

Then go to **Settings → Pages → Source: main branch → Save**.

Your site will be live at: `https://YOUR_USERNAME.github.io/resume-website`

### Other Free Options

- **Netlify** — Drag & drop folder at [app.netlify.com](https://app.netlify.com)
- **Vercel** — Connect GitHub repo at [vercel.com](https://vercel.com)
- **Cloudflare Pages** — Connect repo at [pages.cloudflare.com](https://pages.cloudflare.com)

---

## Tech Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| HTML5          | Page structure and content       |
| CSS3           | Styling, animations, responsive  |
| JavaScript     | Chatbot, scroll effects, nav     |
| Font Awesome   | Icons                            |
| Google Fonts   | Inter typeface                   |
| Python HTTP    | Local development server         |

---

## License

This project is for personal use. Feel free to fork and adapt for your own resume.
