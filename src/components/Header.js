import React from 'react';


const Header = () => {
    return (
        <header className="bg-green-600 text-white p-4" style={{ color: 'blue' }}>
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <nav>
                <ul className="flex justify-center space-x-4">
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#projects" className="hover:underline">Projects</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;