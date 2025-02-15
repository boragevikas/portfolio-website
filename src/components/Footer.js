import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div className="mt-2">
                    <a href="#about" className="text-gray-400 hover:text-white mx-2">About</a>
                    <a href="#projects" className="text-gray-400 hover:text-white mx-2">Projects</a>
                    <a href="#contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
                </div>
                <div className="mt-2">
                    <a href="#privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                    <a href="#terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;