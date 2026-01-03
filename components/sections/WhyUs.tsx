import SectionTitle from '@/components/ui/SectionTitle';
import { featuresContent } from '@/data/content';

export default function WhyUs() {
  return (
    <section
      id='why-us'
      className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <SectionTitle
          title='Bandingkan Keunggulan Kami'
          subtitle='Mengapa Kami?'
        />

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          {featuresContent.map((item, idx) => (
            <div
              key={idx}
              className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary'>
              <div className='mb-4 text-primary'>
                <item.icon size={40} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                {item.title}
              </h3>
              <p className='text-gray-600'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
