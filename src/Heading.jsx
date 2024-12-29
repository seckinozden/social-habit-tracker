import React, { useState } from 'react';
import { Menu } from 'lucide-react';

export const Heading = () => {
    const [title, setTitle] = useState('Welcome to Social App');

    const handleSelectChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <header className="w-full bg-white shadow-sm p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* React Logo */}
                <div className="w-10 h-10 flex-shrink-0">
                    <img
                        src="/logo192.png"
                        alt="React Logo"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Title */}
                <h1 className="text-xl font-semibold text-gray-800">
                    {title}
                </h1>

                {/* Burger Menu */}
                <div className="relative">
                    <button className="block lg:hidden px-2 py-1 border rounded text-gray-500 border-gray-600 hover:text-white hover:bg-gray-600">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                    <div className="hidden lg:flex lg:items-center lg:w-auto">
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handleSelectChange}
                        >
                            <option>Good option</option>
                            <option>Better option</option>
                            <option>The Best option</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
};