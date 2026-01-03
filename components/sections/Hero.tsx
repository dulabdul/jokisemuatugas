'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { heroContent, siteConfig } from '@/data/content';

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative pt-32 pb-20 overflow-hidden bg-white'>
      <div className='container mx-auto px-4 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='max-w-4xl mx-auto'>
          {/* Headline with Purple Highlight */}
          <h1 className='text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6'>
            <span className='bg-primary text-white px-2 leading-[1.3] box-decoration-clone'>
              {heroContent.badge} {heroContent.headline}
            </span>
          </h1>

          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            {heroContent.subheadline}
          </p>

          <Button
            href={`https://wa.me/${siteConfig.whatsapp}`}
            className='text-lg px-8 py-4 mb-12'>
            {heroContent.cta}
          </Button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='relative w-full max-w-5xl mx-auto mt-8 rounded-2xl overflow-hidden shadow-2xl border border-gray-100'>
          <div className='aspect-[21/9] relative bg-gray-100'>
            {/* Placeholder Image - Replace src with your local file */}
            <Image
              src='/images/hero.png'
              alt='Joki Tugas Mahasiswa'
              fill
              className='object-cover'
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
