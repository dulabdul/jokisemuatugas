'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/data/content';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className='text-2xl font-bold text-gray-900 flex items-center gap-2'>
          <span className='text-primary'>Jokisemuatugas</span>
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-gray-600 hover:text-primary font-medium transition-colors'>
              {link.name}
            </Link>
          ))}
          <Button
            href={`https://wa.me/${siteConfig.whatsapp}`}
            variant='primary'
            className='px-5 py-2 text-sm'>
            Hubungi Kami
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className='md:hidden text-gray-700'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle Menu'>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t p-6 flex flex-col gap-4'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-lg text-gray-700 py-2 border-b border-gray-100'
              onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Button
            href={`https://wa.me/${siteConfig.whatsapp}`}
            className='w-full mt-2'>
            Hubungi Kami
          </Button>
        </div>
      )}
    </header>
  );
}
