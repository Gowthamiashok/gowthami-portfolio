# Gowthami A - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and a beautiful design inspired by modern portfolio trends.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with detailed information
- **Career Timeline**: Interactive timeline showing professional journey
- **Performance Optimized**: Fast loading with optimized images and code

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gowthami-portfolio.git
cd gowthami-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This project is configured for GitHub Pages deployment:

1. Push your changes to the `main` branch
2. The GitHub Actions workflow will automatically build and deploy your site
3. Your site will be available at `https://yourusername.github.io/gowthami-portfolio`

## 📁 Project Structure

```
gowthami-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers/
│       └── ThemeProvider.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── resume.pdf
├── .github/
│   └── workflows/
│       └── deploy.yml
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:
- `components/Hero.tsx` - Name, title, and description
- `components/About.tsx` - Skills, timeline, and personal story
- `components/Projects.tsx` - Your projects and work
- `components/Contact.tsx` - Contact information
- `components/Footer.tsx` - Footer links and information

### Styling
- Modify `tailwind.config.js` for color schemes and animations
- Update `app/globals.css` for custom styles
- Change fonts in `app/layout.tsx`

### Content
- Replace placeholder project data in `components/Projects.tsx`
- Update skills and timeline in `components/About.tsx`
- Add your resume PDF to the `public` folder

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Set up an email service (e.g., EmailJS, Formspree, or custom API)
2. Update the form submission logic in `components/Contact.tsx`
3. Configure environment variables if needed

## 🌟 Features in Detail

### Dark/Light Mode
- Automatic theme detection based on system preferences
- Smooth transitions between themes
- Persistent theme selection

### Animations
- Scroll-triggered animations using Framer Motion
- Smooth page transitions
- Interactive hover effects

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

Gowthami A - gowthami@example.com

Project Link: [https://github.com/yourusername/gowthami-portfolio](https://github.com/yourusername/gowthami-portfolio)

---

⭐ If you found this project helpful, please give it a star!
