# 36Zero - Sustainable Marine Transportation

A Next.js application for 36Zero's zero-emission marine transportation services.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Email Integration**: Resend API for contact form submissions
- **Form Validation**: Zod schema validation
- **Icons**: Lucide React icon library
- **Analytics**: Built-in tracking utilities
- **Responsive Design**: Mobile-first approach

## 📦 Dependencies

- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety
- `tailwindcss` - CSS framework
- `zod` - Schema validation
- `lucide-react` - Icon library
- `resend` - Email API
- `clsx` & `tailwind-merge` - CSS utilities

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local` and update with your values:

```bash
cp .env.example .env.local
```

Required environment variables:
- `RESEND_API_KEY` - Your Resend API key
- `EMAIL_FROM` - Sender email address
- `EMAIL_REPLY_TO` - Reply-to email address

### 3. Get Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add it to your `.env.local` file

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/     # Contact form API endpoint
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Landing hero section
│   ├── LeadForm.tsx     # Contact form component
│   └── Footer.tsx       # Site footer
├── data/
│   ├── inventory.ts     # Vessel data & types
│   └── routes.ts        # Route data & types
└── lib/
    ├── config.ts         # App configuration
    ├── tracking.ts       # Analytics utilities
    └── utils.ts          # Helper functions
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📧 Contact Form

The contact form is fully functional and includes:
- Client-side validation with Zod
- Server-side validation
- Email sending via Resend
- Error handling and success states
- Responsive design

## 🔧 Configuration

Update `src/lib/config.ts` to modify:
- App settings
- Contact information
- Social media links
- Feature flags

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

All rights reserved - 36Zero Marine Transportation