import React, { useState } from 'react';

export default function ContentFeed() {
  const [activeTab, setActiveTab] = useState('digest');
  
  // Sample data - in a real app this would come from an API
  const dailyDigest = [
    {
      id: 1,
      title: "Landmark Judgment: Supreme Court on Data Privacy",
      summary: "The SC expanded the right to privacy in digital era in a 3-2 majority decision.",
      time: "2 hours ago",
      category: "Constitutional Law"
    },
    {
      id: 2,
      title: "Case Breakdown: Contract Law Fundamentals",
      summary: "Analyzing the essential elements of a valid contract with recent examples.",
      time: "1 day ago",
      category: "Contract Law"
    },
    {
      id: 3,
      title: "Legal News: New Amendment to Criminal Procedure Code",
      summary: "Parliament passes bill reducing timeline for evidence submission.",
      time: "2 days ago",
      category: "Criminal Law"
    }
  ];

  const ebooks = [
    {
      id: 1,
      title: "Contract Law Simplified",
      author: "Prof. R. Sharma",
      pages: 120,
      rating: 4.8,
      downloads: "1.2K"
    },
    {
      id: 2,
      title: "Constitutional Law Handbook",
      author: "Justice A. Mehta",
      pages: 245,
      rating: 4.9,
      downloads: "2.4K"
    },
    {
      id: 3,
      title: "Torts Made Easy",
      author: "Dr. S. Kapoor",
      pages: 95,
      rating: 4.7,
      downloads: "0.9K"
    }
  ];

  const videos = [
    {
      id: 1,
      title: "How to Analyze Case Law",
      duration: "15:42",
      views: "12K",
      instructor: "Adv. Priya Singh"
    },
    {
      id: 2,
      title: "Drafting Legal Documents",
      duration: "22:18",
      views: "8.5K",
      instructor: "Prof. A. Desai"
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Content Center</h1>
          <p className="text-gray-600 mt-2">Welcome back, Chakshi! Here's the latest content tailored for you.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'digest' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('digest')}
          >
            <i className="fas fa-newspaper mr-2"></i>Daily Digest
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'ebooks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('ebooks')}
          >
            <i className="fas fa-book mr-2"></i>E-books & Notes
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'videos' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('videos')}
          >
            <i className="fas fa-play-circle mr-2"></i>Video Content
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'digest' && (
          <div>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Today's Legal Digest</h2>
              <div className="text-sm text-gray-500">October 28, 2023</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dailyDigest.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="p-5">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-md mb-3">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.summary}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{item.time}</span>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Read Analysis <i className="fas fa-arrow-right ml-1 text-xs"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ebooks' && (
          <div>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Recommended Study Materials</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                <i className="fas fa-search mr-1"></i> Search Library
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ebooks.map((book) => (
                <div key={book.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="p-5">
                    <div className="w-full h-40 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <i className="fas fa-book-open text-4xl text-blue-600"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">By {book.author}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-gray-500">{book.pages} pages</span>
                      <div className="flex items-center">
                        <i className="fas fa-star text-yellow-400 mr-1"></i>
                        <span className="text-sm text-gray-700">{book.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{book.downloads} downloads</span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'videos' && (
          <div>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Video Lectures & Explainers</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                <i className="fas fa-filter mr-1"></i> Filter
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="w-full h-48 bg-blue-100 rounded-t-lg flex items-center justify-center">
                      <i className="fas fa-play-circle text-5xl text-blue-600"></i>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">By {video.instructor}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{video.views} views</span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <i className="fas fa-book-reader text-blue-600"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">12</h3>
              <p className="text-sm text-slate-500">Materials Read</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <i className="fas fa-clock text-green-600"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">8h 42m</h3>
              <p className="text-sm text-slate-500">Study Time This Week</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow flex items-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <i className="fas fa-trophy text-purple-600"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">86%</h3>
              <p className="text-sm text-slate-500">Completion Rate</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
}