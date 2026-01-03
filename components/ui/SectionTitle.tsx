interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-2 inline-block'>
          {subtitle}
        </span>
      )}
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>
        {title}
      </h2>
      <div
        className={`w-20 h-1.5 bg-primary mt-4 rounded-full ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
