import React, { useState } from 'react';
import { Code2, Search, Menu, X } from 'lucide-react';

// Mock project data
const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: "/placeholder.jpg"
  },
  {
    id: 2,
    title: "Project Title",
    description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: "/placeholder.jpg"
  },
  {
    id: 3,
    title: "Project Title",
    description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: "/placeholder.jpg"
  },
  {
    id: 4,
    title: "Project Title",
    description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: "/placeholder.jpg"
  },
  {
    id: 5,
    title: "Project Title",
    description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: "/placeholder.jpg"
  },
  {
    id: 6,
    title: "Project Title",
    description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: "/placeholder.jpg"
  }
];

const categories = [
  "Web Development",
  "App Development",
  "AI ML projects",
  "Security Focussed",
  "Game Development"
];

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-gray-300">About</a>
              <a href="#" className="hover:text-gray-300">Explore</a>
              <a href="#" className="hover:text-gray-300">Community</a>
              <a href="#" className="hover:text-gray-300">Profile</a>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </div>
            <div className="bg-gray-700 rounded px-4 py-1">
              Logged in as Saumya
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to REV-X
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Page
        </h2>
        <p className="text-xl text-gray-400">
          See what your friends are doing :)
        </p>
      </section>

      {/* Filter Section */}
      <div className="container mx-auto px-6 mb-8">
        <button 
          className="flex items-center space-x-2 bg-gray-800 rounded-lg px-4 py-2"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          {isFilterOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span>Filter by Category</span>
          <Search className="h-5 w-5" />
        </button>
        
        {isFilterOpen && (
          <div className="mt-4 bg-gray-800 rounded-lg p-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-gray-600 transition-all"
            >
              <div className="aspect-video bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">Explore</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">Web Development</a>
                <a href="#" className="block text-gray-400 hover:text-white">App Development</a>
                <a href="#" className="block text-gray-400 hover:text-white">AI ML projects</a>
                <a href="#" className="block text-gray-400 hover:text-white">Security Focussed</a>
                <a href="#" className="block text-gray-400 hover:text-white">Game Development</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">Support</a>
                <a href="#" className="block text-gray-400 hover:text-white">Discussions</a>
                <a href="#" className="block text-gray-400 hover:text-white">Developers</a>
                <a href="#" className="block text-gray-400 hover:text-white">Collaboration features</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">Report bugs</a>
                <a href="#" className="block text-gray-400 hover:text-white">Ask for Help</a>
                <a href="#" className="block text-gray-400 hover:text-white">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;