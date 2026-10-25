import type { Metadata, Viewport } from 'next';
import './globals.css';
import AmbientGlows from '@/components/common/AmbientGlows';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0B0F17',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vihara-portfolio.vercel.app'),
  title: 'Rashmi Vihara Gimhani Thennakoon | AI Undergraduate & Graphic Designer',
  description:
    'Portfolio of Rashmi Vihara Gimhani Thennakoon — SLIIT AI undergraduate and freelance graphic designer from Sri Lanka. Focused on brand identities, social campaigns, and machine learning.',
  keywords: [
    'Rashmi Vihara',
    'Rashmi Vihara Gimhani Thennakoon',
    'AI Undergraduate',
    'SLIIT',
    'Freelance Graphic Designer',
    'Brand Identity',
    'Sri Lanka',
    'Machine Learning',
    'Logo Designer',
  ],
  authors: [{ name: 'Rashmi Vihara Gimhani Thennakoon' }],
  creator: 'Rashmi Vihara',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vihara-portfolio.vercel.app',
    title: 'Rashmi Vihara | AI Undergraduate & Graphic Designer',
    description:
      'Portfolio of Rashmi Vihara Gimhani Thennakoon — SLIIT AI undergraduate and freelance graphic designer from Sri Lanka.',
    siteName: 'Rashmi Vihara Portfolio',
    images: [
      {
        url: '/images/portrait.png',
        width: 1200,
        height: 630,
        alt: 'Rashmi Vihara - Portfolio 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rashmi Vihara | AI Undergraduate & Graphic Designer',
    description:
      'Portfolio of Rashmi Vihara Gimhani Thennakoon — SLIIT AI undergraduate and freelance graphic designer.',
    images: ['/images/portrait.png'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Asimovian&family=Offside&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background font-body-md text-on-surface h-[100dvh] w-full overflow-hidden select-none selection:bg-blue-900 selection:text-white">
        <AmbientGlows />
        {children}
      </body>
    </html>
  );
}
