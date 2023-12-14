'use client'



import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/">
              <a className="text-white text-xl font-bold">My Website</a>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-white">About</a>
            </Link>
            <Link href="/contact">
              <a className="text-white">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
