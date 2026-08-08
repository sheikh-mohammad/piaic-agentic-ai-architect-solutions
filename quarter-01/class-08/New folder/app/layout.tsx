import type { Metadata, Viewport } from 'next';
import { Cinzel, Josefin_Sans } from 'next/font/google';
import ScrollProgress from '@/components/ScrollProgress';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FORMA Studio — Architecture & Interior Design',
  description:
    'FORMA is an award-winning architecture and interior design practice shaping timeless, human spaces across Pakistan and beyond.',
  keywords: [
    'architecture',
    'interior design',
    'FORMA Studio',
    'residential design',
    'commercial architecture',
    'Karachi architects',
  ],
  openGraph: {
    title: 'FORMA Studio — Architecture & Interior Design',
    description:
      'We shape spaces that endure. Architecture, interiors and objects from Karachi to Dubai.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A12',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${josefin.variable}`}>
      <body>
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
