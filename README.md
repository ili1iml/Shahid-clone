# Shahid Clone · شاهد
**Arabic Streaming Platform UI — Front-End Clone**

---

## 🔗 Live Demo
[**→ View Live Project**](https://ili1iml.github.io/Shahid-clone/)

---


## 💡 About

A front-end clone of **Shahid**, one of the largest Arabic streaming platforms in the Middle East. Built to practice real-world UI patterns used in production streaming services — including dynamic content rendering, carousel-style rows, hero sections, and RTL layout.

> ⚠️ This is a UI/UX learning project only. Not affiliated with or endorsed by Shahid or MBC Group. No real content or media is hosted.

---

## ✨ Features

- **Hero Section** — Full-viewport featured title with badge, description, and CTA buttons
- **Dynamic Content Rows** — Movies and shows rendered entirely via JavaScript from a data array
- **Content Categories** — "Trending", "New Arrivals", "Recommended for You", and "Continue Watching"
- **Progress Bar** — Visual watch progress indicator on Continue Watching cards
- **Sticky Navbar** — Blur-backdrop navigation with search, notifications, and user avatar
- **Hover Effects** — Play overlay appears on card hover with smooth scale transition
- **Responsive Design** — Adapts cleanly to tablet and mobile screen sizes
- **Arabic-first Layout** — Full RTL support with Cairo Arabic font

---

## 🛠️ Built With

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Dark theme, CSS Grid, Flexbox, animations, custom scrollbar |
| Vanilla JavaScript | DOM rendering, dynamic card generation, event handling |
| Font Awesome 6 | Icons throughout the UI |
| Google Fonts (Cairo) | Arabic-optimized typeface |

---

## 📂 Project Structure

```
shahid-clone/
├── index.html       # Main page structure
├── style.css        # Full styling (navbar, hero, cards, footer, responsive)
├── script.js        # Dynamic content rendering & interactions
├── images/          # Movie/show poster images
└── README.md        # You are here
```

---

## 🚀 Getting Started

No installation or dependencies required.

```bash
# Clone the repository
git clone (https://github.com/ili1iml/Shahid-clone.git).

# Navigate into the folder
cd shahid-clone

# Open in your browser
open index.html
```

---

## 🧠 What I Learned

- Rendering dynamic UI components entirely from a JavaScript data array (no hardcoded HTML cards)
- Building a horizontal scrollable carousel with custom scrollbar styling
- Implementing a sticky navbar with `backdrop-filter: blur()` for a glassmorphism effect
- Working with `aspect-ratio` and `object-fit` for consistent image display across different poster sizes
- Layering CSS `position: absolute` overlays for play buttons and progress bars
- Structuring a multi-section page layout that mirrors real production streaming platforms

---

## 🗺️ Roadmap

- [ ] Add a working search bar with live filtering
- [ ] Build a modal for movie details (trailer, cast, description)
- [ ] Implement a real "My List" feature using localStorage
- [ ] Rebuild with React — convert each section into a reusable component
- [ ] Add keyboard navigation support for accessibility

---

## 👩‍💻 Author

**Moudi Alotaibi**  
*Front-end developer in training*

---

> *Inspired by [Shahid.net](https://shahid.net) — built for learning purposes only.*
