'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between h-28 px-5">

        {/* Logo + Title */}
        <div className="flex items-center space-x-6 bg-gray-500">
          <Image
            src="/aitestamford.png"
            alt="AITE Logo"
            width={175}
            height={140}
            className="h-auto rounded-lg object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-3xl font-serif font-bold text-center text-gray-900">
              Academy of Information Technology & Engineering
            </h1>            
          </div>
        </div>

        {/* Navigation */}
            <ul className = "flex flex-col sm:flex-row gap-4 p-4">
              <li>
                <Link href = "/ " className="hover:text-blue-700 transition">Home</Link>
              </li>
              <li>
                <Link href="/about " className="hover:text-blue-700 transition">About</Link>
              </li>
              <li>
                <Link href="/contact " className="hover:text-blue-700 transition">Contact</Link>
              </li>
              <li>
                <Link href="/apply " className="hover:text-blue-700 transition">Apply</Link>
              </li>
              <li>
                <Link href="/photos " className="hover:text-blue-700 transition">Photos</Link>
              </li>
            </ul>

      </div>
    </header>
  );
};

export default Header;