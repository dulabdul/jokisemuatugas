import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer'; // Create Footer component similar to sections
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { siteConfig } from '@/data/content';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Jasa Joki Tugas & Skripsi Terpercaya | JokiSemuaTugas',
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: 'Jasa Joki Tugas & Skripsi Terpercaya',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='id'
      className='scroll-smooth'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'ID',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>

        {/* Simple Footer Implementation Inline for Brevity */}
        <footer className='bg-gray-900 text-gray-300 py-12 border-t border-gray-800'>
          <div className='container mx-auto px-4 text-center'>
            <p className='mb-4 text-2xl font-bold text-white'>JokiSemuaTugas</p>
            <p>
              &copy; {new Date().getFullYear()} JokiSemuaTugas. All rights
              reserved.
            </p>
          </div>
        </footer>

        <FloatingWhatsApp />
        <ScrollToTop />
      </body>
    </html>
  );
}
