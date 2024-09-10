  import React from 'react';

  const HomePage = () => {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 text-white font-sans">
        <header className="text-center py-12">
          <h1 className="text-5xl mb-4">John Doe</h1>
          <h2 className="text-2xl font-light">Web Developer & Designer</h2>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12 max-w-6xl w-full">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl mb-2">Project 1</h3>
            <p className="text-sm">A responsive web application built with React and Node.js</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl mb-2">Project 2</h3>
            <p className="text-sm">An e-commerce platform with integrated payment system</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl mb-2">Project 3</h3>
            <p className="text-sm">A mobile app for tracking fitness goals and progress</p>
          </div>
        </main>
        <footer className="text-center py-4 text-xs">
          © 2023 John Doe. All rights reserved.
        </footer>
      </div>
    );
  };

  export default HomePage;
