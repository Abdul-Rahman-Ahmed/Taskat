# Taskat Landing Page

## Project Overview

This project is a **landing page** for "Taskat", a task management platform.  
It is built using **HTML** and **CSS**, without any backend functionality.  
The page is fully responsive and includes animations, interactive buttons, and a clean layout.

**Key Features:**

- Responsive design for desktop, tablet, and mobile.
- Animated elements (fade-up, bounce, slide loop).
- Interactive buttons with hover effects.
- Sections: Home, Features, Solutions, Pricing, Free Trial, Footer.
- Custom fonts: `Inter`, `Poppins`, `Jockey One`.

## Project Structure

```

project-folder/
│
├─ index.html
├─ main.js # Optional JS for animations
├─ css/
│ ├─ master.css # Main styling
│ └─ helper.css # Additional helper classes
├─ assets/
│ ├─ product-image.png
│ ├─ tasks.png
│ ├─ free.png
│ ├─ sponsors/ # Sponsor logos
│ └─ featuresCards/ # Feature card icons

```

## HTML Structure

### Header

- Logo, navigation links, Sign Up / Sign In buttons.
- Sticky to top, transparent background, blur effect.
- Responsive: switches to column on smaller screens.

### Hero Section

- Title (`h1`) + description (`p`).
- Two CTA buttons: "Get Started" and "Watch Video".
- Animations: `fadeUp` and `bounce`.

### Product Image Section

- Main product screenshot with hover effect.

### Sponsors Section

- Horizontal scroll of sponsor logos with `slideLoop` animation.

### Features Section

- Three feature cards (icon + title + description).
- Hover: lift card + stop icon rotation.
- Middle card highlighted.

### Solutions Section

- Text + image layout, responsive stacking.

### Pricing Section

- Three pricing plans with features and subscribe button.
- Middle card highlighted with special styling.

### Free Trial Section

- Background image with overlay text + CTA button.

### Footer

- About section with logo, description, social media icons.
- Links section (company, service, resource, support).
- Responsive layout.

## CSS Details

### Fonts & Colors

- Fonts: `Inter`, `Poppins`, `Jockey One`.
- Colors:

```scss
--main-color: #adff00;
--eill-color: #4be55a85;
--white-color: #fff;
--black-color: #000;
--background-color: #141414;
--gray-color: #4e4e4e;
```

### Animations

- `fadeUp`: fade in from below.
- `bounce`: up/down bounce.
- `slideLoop`: continuous sliding of sponsor logos.
- `rotate`: rotating card icons.

### Buttons

- `.first-btn`: primary color buttons with hover shadow.
- `.second-btn`: outlined buttons with hover color effect.

### Responsive Design

- Breakpoints:

  - Large screens: >1024px
  - Medium screens: ≤768px
  - Small screens: ≤425px
  - Extra small screens: ≤360px

- Adjustments: row → column, font sizes, padding.

### Decorations

- `.eill1` to `.eill6`: blurred circles for visual effect.
- Positioned absolutely with rotation and blur filters.

## How to Use

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Ensure `assets` folder is present.
4. Modify CSS/HTML as needed.

## Notes

- Static landing page, no backend.
- Good practice for HTML, CSS, animations, and responsive design.
- Can be used as a template or learning project.
