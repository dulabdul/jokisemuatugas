'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { testimonialImages } from '@/data/content';

export default function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Hitung lebar scroll area untuk constraint drag framer motion
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  // Fungsi navigasi manual (tombol kiri kanan)
  const scroll = (direction: 'left' | 'right') => {
    if (carousel.current) {
      const scrollAmount = 300; // Jarak scroll per klik
      const currentScroll = carousel.current.scrollLeft;
      carousel.current.scrollTo({
        left:
          direction === 'left'
            ? currentScroll - scrollAmount
            : currentScroll + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id='testimonials'
      className='py-20 bg-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <SectionTitle
          title='Apa Kata Mereka?'
          subtitle='Testimoni'
          align='center'
        />

        {/* Carousel Container */}
        <div className='relative mt-12 group'>
          {/* Tombol Navigasi Kiri (Hanya muncul di desktop) */}
          <button
            onClick={() => scroll('left')}
            className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center backdrop-blur-sm'
            aria-label='Previous Slide'>
            <ChevronLeft size={24} />
          </button>

          {/* Area Slider (Draggable) */}
          <div
            ref={carousel}
            className='overflow-x-auto overflow-y-hidden hide-scrollbar cursor-grab active:cursor-grabbing'
            style={{ scrollBehavior: 'smooth' }}>
            <motion.div
              className='flex gap-6 pb-4 px-4'
              drag='x'
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: 'grabbing' }}>
              {testimonialImages.map((item, index) => (
                <motion.div
                  key={index}
                  className='relative min-w-[280px] md:min-w-[320px] aspect-[9/19] rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 bg-gray-50 group/card'>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className='object-cover pointer-events-none select-none'
                    draggable={false}
                    sizes='(max-width: 768px) 280px, 320px'
                  />

                  {/* Overlay Hover dengan Icon Zoom */}
                  <div
                    onClick={() => setSelectedId(index)}
                    className='absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-all duration-300 flex items-center justify-center cursor-pointer'>
                    <div className='bg-white/90 p-3 rounded-full opacity-0 group-hover/card:opacity-100 transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-300 shadow-lg'>
                      <ZoomIn className='text-primary w-6 h-6' />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tombol Navigasi Kanan */}
          <button
            onClick={() => scroll('right')}
            className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center backdrop-blur-sm'
            aria-label='Next Slide'>
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Petunjuk Swipe untuk Mobile */}
        <p className='text-center text-gray-400 text-sm mt-4 md:hidden flex items-center justify-center gap-2'>
          <ChevronLeft size={16} /> Geser untuk melihat{' '}
          <ChevronRight size={16} />
        </p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4'
            onClick={() => setSelectedId(null)} // Tutup jika klik background
          >
            {/* Tombol Close */}
            <button
              className='absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50'
              onClick={() => setSelectedId(null)}>
              <X size={32} />
            </button>

            {/* Container Gambar di Lightbox */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className='relative w-full max-w-md max-h-[90vh] aspect-[9/16] rounded-lg overflow-hidden bg-black shadow-2xl'
              onClick={(e) => e.stopPropagation()} // Mencegah tutup saat klik gambar
            >
              <Image
                src={testimonialImages[selectedId].src}
                alt={testimonialImages[selectedId].alt}
                fill
                className='object-contain'
                priority
                sizes='100vw'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
