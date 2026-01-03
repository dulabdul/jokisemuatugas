'use client';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { servicesContent } from '@/data/content';
import Image from 'next/image';

export default function Services() {
  return (
    <section
      id='services'
      className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row gap-12 items-start'>
          {/* Left Side: Video Placeholder / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='lg:w-5/12 w-full'>
            <div className='w-full aspect-[16/12] relative shadow-none'>
              <Image
                src={'/images/services.png'}
                fill
                className='object-cover'
                alt='Services'
              />
            </div>
          </motion.div>

          {/* Right Side: Services Grid */}
          <div className='lg:w-7/12 w-full'>
            <SectionTitle
              title='Sesuaikan Jasa Kami Dengan Kebutuhan Anda'
              subtitle='Layanan Kami'
              align='left'
            />
            <div className='grid md:grid-cols-2 gap-8'>
              {servicesContent.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className='bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4'>
                    <service.icon size={24} />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
