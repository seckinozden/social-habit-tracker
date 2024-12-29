import React from 'react';
import { Heading } from './Heading';
import ChuckNorrisJoke from "./ChuckNorrisJoke";

const Body = () => (
    <main className="w-full bg-sky-400 flex-grow border-x border-gray-300">
        <ChuckNorrisJoke />
    </main>
);

const Footer = () => (
  <footer className="w-full bg-red-400 p-6 border border-gray-300">
    <p className="text-center">FOOTER</p>
  </footer>
);

const AppMain = () => (
  <div className="h-screen w-screen flex flex-col">
    <Heading />
    <Body />
    <Footer />
  </div>
);

export default AppMain;