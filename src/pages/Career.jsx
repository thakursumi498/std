import React, { useState } from 'react';

export default function Career() {
  const [activeTab, setActiveTab] = useState('internships');
  
  // Sample data for demonstration
  const internships = [
    {
      id: 1,
      title: "Legal Intern at Sharma & Associates",
      type: "Corporate Law",
      duration: "3 months",
      deadline: "2023-11-15",
      status: "Open",
      featured: true
    },
    {
      id: 2,
      title: "Judicial Clerkship with Hon. Justice Verma",
      type: "Litigation",
      duration: "6 months",
      deadline: "2023-12-01",
      status: "Open",
      featured: true
    },
    {
      id: 3,
      title: "Legal Researcher at Indian Law Institute",
      type: "Research",
      duration: "4 months",
      deadline: "2023-11-20",
      status: "Open",
      featured: false
    }
  ];

  const roadmaps = {
    litigation: [
      "Master Civil & Criminal Procedure Codes",
      "Develop Courtroom Communication Skills",
      "Build Network with Senior Advocates",
      "Join Bar Council of India",
      "Start with Junior Advocate Position"
    ],
    corporate: [
      "Specialize in Company Law",
      "Develop Contract Drafting Skills",
      "Learn Compliance Regulations",
      "Network with Corporate Law Firms",
      "Pursue Company Secretary Course"
    ]
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header with welcome message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Career Center</h1>
          <p className="text-gray-600 mt-2">Welcome back, Chakshi! Here are curated opportunities for your legal career.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'internships' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('internships')}
          >
            <i className="fas fa-briefcase mr-2"></i>Internships & Jobs
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'roadmap' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('roadmap')}
          >
            <i className="fas fa-map-signs mr-2"></i>Skill Roadmap
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'resources' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('resources')}
          >
            <i className="fas fa-book mr-2"></i>Learning Resources
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'internships' && (
          <div>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Recommended Opportunities</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="text-sm border rounded-md px-2 py-1">
                  <option>Deadline</option>
                  <option>Recently Added</option>
                  <option>Relevance</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((internship) => (
                <div key={internship.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  {internship.featured && (
                    <div className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1">
                      <i className="fas fa-star mr-1"></i>Featured
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{internship.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <span className="bg-gray-100 px-2 py-1 rounded-md mr-2">{internship.type}</span>
                      <span><i className="far fa-clock mr-1"></i>{internship.duration}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <span className="text-xs font-medium text-gray-500">Apply before:</span>
                        <p className="text-sm font-semibold text-red-600">{internship.deadline}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${internship.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {internship.status}
                      </span>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <i className="fas fa-gavel text-blue-600"></i>
                </div>
                <h3 className="font-semibold text-xl text-gray-800">Litigation Pathway</h3>
              </div>
              <p className="text-sm text-slate-500 mb-6">Build a successful career in courtroom practice and advocacy</p>
              
              <div className="space-y-4">
                {roadmaps.litigation.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-md text-sm font-medium transition-colors">
                Explore Litigation Resources
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <i className="fas fa-building text-purple-600"></i>
                </div>
                <h3 className="font-semibold text-xl text-gray-800">Corporate Law Pathway</h3>
              </div>
              <p className="text-sm text-slate-500 mb-6">Excel in business law, compliance, and corporate legal practice</p>
              
              <div className="space-y-4">
                {roadmaps.corporate.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 w-full bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 py-2 rounded-md text-sm font-medium transition-colors">
                Explore Corporate Law Resources
              </button>
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-2xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Recommended Courses</h3>
              <ul className="space-y-3">
                <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <i className="fas fa-play-circle text-blue-500 text-xl mr-3"></i>
                  <div>
                    <p className="font-medium">Advanced Contract Drafting</p>
                    <p className="text-sm text-gray-500">By LawSikho • 12 hours</p>
                  </div>
                </li>
                <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <i className="fas fa-play-circle text-blue-500 text-xl mr-3"></i>
                  <div>
                    <p className="font-medium">Criminal Trial Advocacy</p>
                    <p className="text-sm text-gray-500">By NLUD • 8 hours</p>
                  </div>
                </li>
                <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <i className="fas fa-play-circle text-blue-500 text-xl mr-3"></i>
                  <div>
                    <p className="font-medium">IPR Law Specialization</p>
                    <p className="text-sm text-gray-500">By NALSAR • 20 hours</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-2xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Upcoming Webinars</h3>
              <ul className="space-y-3">
                <li className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium">Judiciary Preparation Strategy</p>
                  <p className="text-sm text-gray-500">Tomorrow • 5:00 PM IST</p>
                </li>
                <li className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium">Career in International Law</p>
                  <p className="text-sm text-gray-500">Nov 20 • 6:30 PM IST</p>
                </li>
                <li className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium">AI and Legal Practice</p>
                  <p className="text-sm text-gray-500">Nov 25 • 4:00 PM IST</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Add Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
}