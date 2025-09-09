import React, { useState } from 'react';

export default function Research() {
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilters, setSearchFilters] = useState({
    jurisdiction: '',
    year: '',
    judge: '',
    topic: ''
  });
  const [savedNotes, setSavedNotes] = useState([
    {
      id: 1,
      title: "Analysis of Data Privacy Laws",
      content: "Comparative analysis of GDPR and Indian Data Protection Bill",
      caseReference: "Justice K.S. Puttaswamy (Retd.) vs Union Of India (2017)",
      tags: ["Privacy", "Constitutional Law", "GDPR"],
      date: "2023-10-25"
    },
    {
      id: 2,
      title: "Contract Law Precedents",
      content: "Important cases related to offer and acceptance",
      caseReference: "Carlill v. Carbolic Smoke Ball Company (1893)",
      tags: ["Contract Law", "Offer", "Acceptance"],
      date: "2023-10-20"
    }
  ]);
  const [recentSearches, setRecentSearches] = useState([
    "Right to Privacy cases",
    "Article 14 discrimination",
    "Contract law specific performance",
    "Tort law negligence precedents"
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real application, this would call an API
    console.log("Searching for:", searchQuery, "with filters:", searchFilters);
    // Add to recent searches if not empty
    if (searchQuery.trim() && !recentSearches.includes(searchQuery)) {
      setRecentSearches([searchQuery, ...recentSearches.slice(0, 4)]);
    }
  };

  const handleFilterChange = (filterName, value) => {
    setSearchFilters({
      ...searchFilters,
      [filterName]: value
    });
  };

  const searchResults = [
    {
      id: 1,
      caseName: "Justice K.S. Puttaswamy (Retd.) vs Union Of India",
      citation: "AIR 2017 SC 4161",
      year: "2017",
      court: "Supreme Court of India",
      summary: "Landmark judgment recognizing right to privacy as a fundamental right under Article 21 of the Constitution.",
      topics: ["Privacy", "Constitutional Law", "Fundamental Rights"]
    },
    {
      id: 2,
      caseName: "Shayara Bano vs Union of India",
      citation: "AIR 2017 SC 4609",
      year: "2017",
      court: "Supreme Court of India",
      summary: "Declared the practice of instant triple talaq unconstitutional.",
      topics: ["Muslim Law", "Constitutional Law", "Gender Justice"]
    },
    {
      id: 3,
      caseName: "Vishaka vs State of Rajasthan",
      citation: "AIR 1997 SC 3011",
      year: "1997",
      court: "Supreme Court of India",
      summary: "Laid down guidelines to prevent sexual harassment of women at workplace.",
      topics: ["Gender Justice", "Employment Law", "Constitutional Law"]
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Legal Research Center</h1>
          <p className="text-gray-600 mt-2">Welcome back, Chakshi! Access comprehensive legal databases and research tools.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'search' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('search')}
          >
            <i className="fas fa-search mr-2"></i>Search Judgments
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'notes' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('notes')}
          >
            <i className="fas fa-bookmark mr-2"></i>Saved Notes
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'history' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('history')}
          >
            <i className="fas fa-history mr-2"></i>Research History
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'tools' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('tools')}
          >
            <i className="fas fa-tools mr-2"></i>Research Tools
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'search' && (
          <div>
            <div className="bg-white p-6 rounded-2xl shadow mb-6">
              <h3 className="font-semibold text-xl mb-4">Search Legal Database</h3>
              <form onSubmit={handleSearch}>
                <div className="relative mb-4">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search by case name, citation, topic, or keywords"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-md"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jurisdiction</label>
                    <select
                      value={searchFilters.jurisdiction}
                      onChange={(e) => handleFilterChange('jurisdiction', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="">All Jurisdictions</option>
                      <option value="supreme">Supreme Court</option>
                      <option value="high">High Courts</option>
                      <option value="international">International</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                    <select
                      value={searchFilters.year}
                      onChange={(e) => handleFilterChange('year', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="">All Years</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Judge</label>
                    <input
                      type="text"
                      value={searchFilters.judge}
                      onChange={(e) => handleFilterChange('judge', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Judge name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                    <select
                      value={searchFilters.topic}
                      onChange={(e) => handleFilterChange('topic', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="">All Topics</option>
                      <option value="constitutional">Constitutional Law</option>
                      <option value="criminal">Criminal Law</option>
                      <option value="contract">Contract Law</option>
                      <option value="property">Property Law</option>
                      <option value="tort">Tort Law</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    <i className="fas fa-sliders-h mr-1"></i> Advanced Filters
                  </button>
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                    onClick={() => {
                      setSearchFilters({
                        jurisdiction: '',
                        year: '',
                        judge: '',
                        topic: ''
                      });
                      setSearchQuery('');
                    }}
                  >
                    <i className="fas fa-times mr-1"></i> Clear All
                  </button>
                </div>
              </form>
            </div>

            {/* Search Results */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Search Results</h3>
              
              {searchQuery ? (
                <div className="space-y-4">
                  {searchResults.map((result) => (
                    <div key={result.id} className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
                      <h4 className="font-bold text-lg text-blue-800 mb-2">{result.caseName}</h4>
                      <div className="flex flex-wrap items-center text-sm text-gray-600 mb-3">
                        <span className="mr-4"><i className="far fa-file-alt mr-1"></i> {result.citation}</span>
                        <span className="mr-4"><i className="far fa-calendar mr-1"></i> {result.year}</span>
                        <span><i className="fas fa-balance-scale mr-1"></i> {result.court}</span>
                      </div>
                      <p className="text-gray-700 mb-4">{result.summary}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {result.topics.map((topic, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between">
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                          <i className="fas fa-book-open mr-1"></i> Read Full Judgment
                        </button>
                        <div className="flex space-x-2">
                          <button className="text-gray-600 hover:text-gray-800">
                            <i className="far fa-bookmark"></i>
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            <i className="fas fa-download"></i>
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            <i className="fas fa-share-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
                  <h4 className="text-lg font-medium text-gray-600">Enter your search query to find relevant case laws</h4>
                  <p className="text-gray-500 mt-2">You can search by case name, citation, topic, or keywords</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'notes' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Your Saved Notes</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                <i className="fas fa-plus mr-1"></i> Add New Note
              </button>
            </div>

            {savedNotes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedNotes.map((note) => (
                  <div key={note.id} className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-lg text-gray-800">{note.title}</h4>
                      <div className="flex space-x-2">
                        <button className="text-gray-500 hover:text-blue-600">
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button className="text-gray-500 hover:text-red-600">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{note.content}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Case Reference:</p>
                      <p className="text-sm font-medium text-blue-800">{note.caseReference}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {note.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Last updated: {note.date}</span>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        View Details <i className="fas fa-arrow-right text-xs ml-1"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <i className="far fa-bookmark text-4xl text-gray-300 mb-4"></i>
                <h4 className="text-lg font-medium text-gray-600">You don't have any saved notes yet</h4>
                <p className="text-gray-500 mt-2">Start adding notes to your research for quick access later</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                  <i className="fas fa-plus mr-1"></i> Create Your First Note
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'history' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Research History</h3>
              <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                <i className="fas fa-trash mr-1"></i> Clear History
              </button>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md">
              <h4 className="font-medium text-gray-800 mb-4">Recent Searches</h4>
              
              {recentSearches.length > 0 ? (
                <div className="space-y-3">
                  {recentSearches.map((search, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <i className="fas fa-history text-gray-400 mr-3"></i>
                        <span className="text-gray-700">{search}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Search Again
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <i className="fas fa-history text-3xl text-gray-300 mb-3"></i>
                  <p className="text-gray-500">No recent searches found</p>
                </div>
              )}
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md mt-6">
              <h4 className="font-medium text-gray-800 mb-4">Recently Viewed Cases</h4>
              <div className="text-center py-8">
                <i className="far fa-file-alt text-3xl text-gray-300 mb-3"></i>
                <p className="text-gray-500">No recently viewed cases</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <i className="fas fa-balance-scale text-blue-600"></i>
                </div>
                <h3 className="font-semibold text-xl text-gray-800">Case Citator</h3>
              </div>
              <p className="text-gray-600 mb-4">Check the current status of a case - whether it's been overruled, affirmed, or cited.</p>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
                placeholder="Enter case citation"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition-colors">
                Check Status
              </button>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <i className="fas fa-book text-green-600"></i>
                </div>
                <h3 className="font-semibold text-xl text-gray-800">Statute Finder</h3>
              </div>
              <p className="text-gray-600 mb-4">Quickly locate statutes and legislative materials by title, section, or keyword.</p>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
                placeholder="Search statutes"
              />
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-medium transition-colors">
                Search Statutes
              </button>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <i className="fas fa-link text-purple-600"></i>
                </div>
                <h3 className="font-semibold text-xl text-gray-800">Legal Research Templates</h3>
              </div>
              <p className="text-gray-600 mb-4">Access templates for case briefs, legal memos, and research notes.</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md text-sm font-medium transition-colors">
                  Case Brief
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md text-sm font-medium transition-colors">
                  Legal Memo
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md text-sm font-medium transition-colors">
                  Research Note
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md text-sm font-medium transition-colors">
                  Argument Outline
                </button>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <i className="fas fa-download text-orange-600"></i>
                </div>
                <h3 className="font-semibold text-xl text-gray-800">Export Tools</h3>
              </div>
              <p className="text-gray-600 mb-4">Export your research in various formats for papers, presentations, or legal documents.</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md text-sm font-medium transition-colors">
                  <i className="fas fa-file-pdf mr-1"></i> PDF
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md text-sm font-medium transition-colors">
                  <i className="fas fa-file-word mr-1"></i> Word
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md text-sm font-medium transition-colors">
                  <i className="fas fa-file-alt mr-1"></i> Text
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md text-sm font-medium transition-colors">
                  <i className="fas fa-file-powerpoint mr-1"></i> PowerPoint
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Add Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
}