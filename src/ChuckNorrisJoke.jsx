import React, { useState, useEffect } from 'react';

const ChuckNorrisJoke = () => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchJoke = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }
            const data = await response.json();
            setJoke(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-xl">Loading joke...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-red-500">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-full p-8 space-y-8">
            <img
                src={joke?.icon_url}
                alt="Chuck Norris"
                className="w-32 h-32 rounded-full shadow-lg"
            />
            <p className="text-xl text-center max-w-2xl">{joke?.value}</p>
            <button
                onClick={fetchJoke}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
                Get New Joke
            </button>
        </div>
    );
};

export default ChuckNorrisJoke;