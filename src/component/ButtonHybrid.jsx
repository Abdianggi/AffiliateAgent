export default function ButtonIcon({ type = 'button', variant = 'default', className, text, onClick, children }) {
  const baseClass =
    'focus:outline-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-400 flex items-center justify-center';
  const variants = {
    default: 'bg-gray-500 text-white hover:bg-gray-600',
    hybrid: 'bg-hybrid text-white',
    hyprimary: 'bg-hyprimary-500 text-white hover:bg-hyprimary-100 hover:text-hyprimary-500',
    hysuccess: 'bg-hysuccess-500 text-white hover:bg-hysuccess-100 hover:text-hysuccess-500',
    hywarning: 'bg-hywarning-500 text-white hover:bg-hywarning-100 hover:text-hywarning-500',
    hydanger: 'bg-red-500 text-white hover:bg-red-600',
    'outline-hybrid': 'bg-transparent border border-hybrid text-hybrid hover:bg-hybrid hover:text-white',
    'outline-hyprimary': 'bg-transparent border border-hyprimary-500 text-hyprimary-500 hover:bg-hyprimary-500 hover:text-white',
    'outline-hysuccess': 'bg-transparent border border-hysuccess-500 text-hysuccess-500 hover:bg-hysuccess-500 hover:text-white',
    'outline-hywarning': 'bg-transparent border border-hywarning-500 text-hywarning-500 hover:bg-hywarning-500 hover:text-white',
    'outline-hydanger': 'bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
    'outline-default': 'bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${variants[variant]} ${!className ? 'py-2 px-4 rounded-lg' : className}`}
    >
      {children}
      {text && <span className={`${children ? 'ml-2' : ''}`}>{text}</span>}
    </button>
  );
}
