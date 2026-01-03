'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { aboutContent } from '@/data/content';

export default function About() {
  return (
    <section
      id='about'
      className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:w-1/2'>
            <SectionTitle
              title={aboutContent.title}
              subtitle='Tentang Kami'
              align='left'
            />
            <div className='prose prose-lg text-gray-600'>
              <p className='mb-4'>{aboutContent.description}</p>
              <h3 className='text-xl font-bold text-primary mt-6 mb-2'>
                Siapa Kami?
              </h3>
              <p className='mb-4'>{aboutContent.mission}</p>
              <h3 className='text-xl font-bold text-primary mt-6 mb-2'>
                Komitmen Kami
              </h3>
              <p>{aboutContent.commitment}</p>
            </div>
          </motion.div>

          {/* Image Content with Blob Effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:w-1/2 relative'>
            <div className='relative z-10 rounded-2xl overflow-hidden'>
              <Image
                src='/images/aboutus.png'
                alt='Tentang Tim JokiSemuaTugas'
                width={600}
                height={600}
                className='w-full h-auto object-cover'
              />
            </div>
            {/* Decorative Blob (SVG) behind image */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl -z-0'></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
