import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/content';

export default function ContactCTA() {
  return (
    <section className='py-20 bg-primary text-white text-center'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-5xl font-bold mb-6'>
          Biarkan Kami Membantu Perjalanan Akademik Anda
        </h2>
        <p className='text-xl opacity-90 mb-10 max-w-2xl mx-auto'>
          Punya pertanyaan atau butuh bantuan segera? Tim konsultan akademik
          kami siap membantu menemukan solusi terbaik.
        </p>
        <Button
          href={`https://wa.me/${siteConfig.whatsapp}`}
          variant='white'
          className='text-lg px-10 py-4 font-bold text-primary'>
          Hubungi Kami Sekarang
        </Button>
      </div>
    </section>
  );
}
