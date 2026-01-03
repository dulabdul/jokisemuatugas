'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { faqContent } from '@/data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id='faq'
      className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 max-w-3xl'>
        <SectionTitle
          title='Pertanyaan Umum'
          subtitle='FAQ'
        />

        <div className='space-y-4'>
          {faqContent.map((item, idx) => (
            <div
              key={idx}
              className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
              <button
                onClick={() => toggleFAQ(idx)}
                className='w-full flex items-center justify-between p-5 text-left focus:outline-none'>
                <span
                  className={`font-semibold text-lg ${
                    openIndex === idx ? 'text-primary' : 'text-gray-800'
                  }`}>
                  {item.question}
                </span>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === idx
                      ? 'rotate-180 text-primary'
                      : 'text-gray-400'
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    <div className='px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-3'>
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
