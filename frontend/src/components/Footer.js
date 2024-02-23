import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} CareerForge360. All rights reserved.</p>
                <div className="flex justify-center mt-2">
                    <Link to="#" className="text-white hover:text-gray-400 mx-2">Terms of Service</Link>
                    <span className="text-white"> | </span>
                    <Link to="#" className="text-white hover:text-gray-400 mx-2">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
