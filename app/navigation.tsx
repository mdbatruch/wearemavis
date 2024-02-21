import React from 'react';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 p-4 right-16 fixed">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li className="text-white">Tour</li>
                    <li className="text-white">Watch</li>
                    <li className="text-white">Store</li>
                    <li className="text-white">Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
