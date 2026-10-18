# KebabX 🇦🇺 | Restaurant Website

A modern, responsive restaurant website built with React for an Australian kebab business looking to strengthen its online presence, showcase its food, and make it easier for customers to discover its locations and menus.

**Live Demo:** [View Website](YOUR-LIVE-DEPLOYMENT-URL)

## About the Project

KebabX is a real-world frontend development project designed around the needs of an Australian kebab business that primarily serves walk-in customers and receives online orders through third-party delivery platforms such as Uber Eats.

The objective is to build a dedicated digital storefront where customers can discover the business, explore its menu, find individual store locations, and access available ordering options.

Instead of replacing existing delivery services, KebabX aims to complement them with a professional online presence that represents the business beyond third-party platforms.

## The Business Problem

Local restaurants often depend on walk-in traffic and food delivery platforms to reach customers. A dedicated website provides another way for customers to discover the brand, explore its offerings, and find relevant store information.

KebabX aims to address this by providing:

- A central online presence for the business.
- Clear presentation of food items and menus.
- Separate menu experiences for different locations.
- Easy access to store information and ordering platforms.
- A modern interface that reflects the brand's identity.

## Features

- **Modern Landing Page** — A visually engaging introduction to the business.
- **Branch Selection** — Dedicated sections for Kebabs At Lonsdale and Kebabs On Hoddle.
- **Branch-Specific Menus** — Separate JSON data files for each branch's menu items, categories, and prices.
- **Interactive Menu Experience** — Browse food offerings through a structured interface.
- **Food Photography** — Locally stored images for menu presentation.
- **Reusable React Components** — A component-based architecture for maintainability.
- **Responsive UI** — Designed for different screen sizes.
- **Delivery Platform Access** — Support for directing customers to existing ordering services where configured.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | User interface and reusable components |
| JavaScript (ES6+) | Application logic and interactivity |
| HTML5 | Page structure |
| CSS3 | Styling, layouts, and animations |
| Vite | Development and build tooling |
| JSON | Branch-specific menu data |
| Git & GitHub | Version control and source code hosting |

## Project Structure

```text
KebabX/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   ├── LonsdaleMenu.json
│   │   └── HoddleMenu.json
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

*This is a simplified overview; the actual project structure may vary.*

## Run Locally

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   ```

2. Navigate to the project directory:

   ```bash
   cd YOUR-REPOSITORY
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided in the terminal.

## Development Goals

This project is an opportunity to apply frontend development concepts to a practical business use case, including:

- Translating business needs into user-facing features.
- Building reusable and maintainable React components.
- Managing structured content using JSON.
- Improving navigation and user experience.
- Creating a polished, responsive interface.
- Preparing the website for deployment and discoverability.

## Future Improvements

- Further optimize mobile and tablet experiences.
- Improve search engine optimization (SEO) and accessibility.
- Add store addresses, opening hours, and contact information.
- Integrate location-specific delivery links.
- Explore a simple content-management solution for updating menus.
- Evaluate custom online ordering based on the business's requirements.

## Project Status

**In Development**

Features and design are being refined iteratively as the project evolves.

## Developer

**Mirza Anas Baig**

Computer Science Engineering Student | Aspiring Software Engineer

---

*Built with React to help an Australian food business strengthen its digital presence.*
