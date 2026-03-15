'use client';
import React from 'react';
import Link from 'next/link';
import NavUI from './nav';
import Image from 'next/image';

const Header: React.FC = () => {
return (
    <header className = "flex items-center justify-between h-24 px-6 bg-white shadow ">
        <div className = "flex items-center space-x-4">
            <Image
                src = "/aitestamford.png"
                alt = "AITE Logo"
                width = {200}
                height = {200} 
            / >
            <h1 className = "text-2xl font-bold"> Academy of Information Technology & Engineering </h1>
        </div>
        <nav className = "flex space-x-6 text-base font-medium">
            <a href= "#" className = "hover:text-blue-600">About AITE</a> 
            <a href= "#" className = "hover:text-blue-600">Link 2</a>
            <a href= "#" className = "hover:text-blue-600">Link 3</a>
        </nav>
        <NavUI />
    </header>
    );
};
export default Header;