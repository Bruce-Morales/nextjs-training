'use client'



import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="text-white text-xl font-bold">
              Yorkies.org
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/contact" className="text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
