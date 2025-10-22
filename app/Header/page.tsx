import Link from 'next/link';
import Hamburger from './Hamburger';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-6 flex justify-between items-center sticky top-0 z-50">
      <Link href="#" className="text-2xl font-bold cursor-pointer">
        Michael<span className="text-green-400">Abaniwo</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="#tech-stack" className="hover:text-green-400 cursor-pointer">Tech Stack</Link>
        <Link href="#projects" className="hover:text-green-400 cursor-pointer">Projects</Link>
        <Link href="#testimonials" className="hover:text-green-400 cursor-pointer">Testimonials</Link>
        <Link href="#contact" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
          Get in touch
        </Link>
      </nav>
      <div className="md:hidden">
        {/* Mobile menu button can be added here */}
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;