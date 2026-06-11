import Link from 'next/link';
import Hamburger from './Hamburger';

const Header = () => {
  return (
    <header className="bg-slate-950/75 backdrop-blur-md text-white p-5 flex justify-between items-center sticky top-0 z-50 border-b border-slate-900/80">
      <Link href="#" className="text-2xl font-display font-extrabold cursor-pointer tracking-tight">
        Michael<span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Abaniwo</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium cursor-pointer relative group py-1">
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#career" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium cursor-pointer relative group py-1">
          Experience
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#tech-stack" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium cursor-pointer relative group py-1">
          Tech Stack
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#projects" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium cursor-pointer relative group py-1">
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#testimonials" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium cursor-pointer relative group py-1">
          Testimonials
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#contact" className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-400/25 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-sm">
          Get in touch
        </Link>
      </nav>
      <div className="md:hidden">
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;