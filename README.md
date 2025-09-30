# Law Firm Website

A modern, responsive, and professional website for a law firm built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Multi-language Support**: English, Russian, German, and Turkish
- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Contact Form**: Fully functional contact form with validation
- **Performance Optimized**: Fast loading and SEO-friendly
- **Accessibility**: Built with accessibility in mind

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Form Validation**: [Zod](https://zod.dev/)
- **Icons**: [Heroicons](https://heroicons.com/)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lawfirm-website.git
   cd lawfirm-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   # Add other environment variables here
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
lawfirm-website/
├── app/                    # App Router pages and layouts
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── services/           # Services page
│   ├── favicon.ico         # Favicon
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static files
│   └── images/             # Image assets
├── src/
│   ├── components/         # Reusable components
│   │   └── layout/         # Layout components
│   │       ├── Footer.tsx  # Footer component
│   │       └── Header.tsx  # Header component
│   ├── i18n/               # Internationalization
│   │   ├── config.ts       # i18n configuration
│   │   └── locales/        # Translation files
│   └── types/              # TypeScript type definitions
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore file
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration
├── README.md               # Project documentation
└── tailwind.config.ts      # Tailwind CSS configuration
```

## Internationalization (i18n)

This project includes support for multiple languages using `next-intl`. To add a new language:

1. Create a new folder in `src/i18n/locales/` with the language code (e.g., `es` for Spanish)
2. Copy the `common.json` file from the `en` folder and translate the content
3. Update the `locales` array in `src/i18n/config.ts`

## Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-docs) from the creators of Next.js.

### Netlify

To deploy to Netlify:

1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build your site:
   ```bash
   npm run build
   ```

3. Deploy to Netlify:
   ```bash
   netlify deploy
   ```

4. Follow the prompts to complete the deployment.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/lawfirm-website](https://github.com/yourusername/lawfirm-website)
