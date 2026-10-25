import type { Metadata } from 'next';
import './globals.css';
import { GlowProvider } from '@/components/context/GlowContext';
import AmbientGlows from '@/components/common/AmbientGlows';
import OptionsModal from '@/components/splash/OptionsModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://vihara-portfolio.vercel.app'),
  title: 'Rashmi Vihara Gimhani Thennakoon | AI Undergraduate & Graphic Designer',
  description:
    'Portfolio of Rashmi Vihara Gimhani Thennakoon — SLIIT AI undergraduate and freelance graphic designer specializing in machine learning, brand identities, and social campaigns.',
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
      'Immersive Cyber-HUD portfolio showcasing AI/ML projects, brand design, and social media campaigns by Rashmi Vihara.',
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
      'Immersive Cyber-HUD portfolio showcasing AI/ML projects, brand design, and social media campaigns.',
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
    <html lang="en" className="dark">
      <body className="bg-background font-body-md text-on-surface h-[100dvh] w-full overflow-hidden select-none selection:bg-primary-container selection:text-on-primary-container">
        <GlowProvider>
          <AmbientGlows />
          {children}
          <OptionsModal />
        </GlowProvider>
      </body>
    </html>
  );
}
