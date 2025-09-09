import React, { useState } from 'react';

export default function Simulation() {
  const [activeTab, setActiveTab] = useState('upload');
  const [selectedMode, setSelectedMode] = useState('oral');
  const [simulationStatus, setSimulationStatus] = useState('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [caseFiles, setCaseFiles] = useState([
    {
      id: 1,
      name: "Contract Dispute - Sharma vs. Mehta.pdf",
      date: "2023-10-25",
      size: "2.4 MB",
      status: "processed"
    },
    {
      id: 2,
      name: "Property Law Case Analysis.docx",
      date: "2023-10-20",
      size: "1.8 MB",
      status: "processing"
    }
  ]);

  const simulationModes = [
    {
      id: 'oral',
      title: 'Oral Arguments',
      description: 'Practice presenting your case to a virtual judge',
      icon: 'fas fa-microphone',
      color: 'blue',
      duration: '15-30 min'
    },
    {
      id: 'cross',
      title: 'Cross Examination',
      description: 'Hone your questioning skills with AI witnesses',
      icon: 'fas fa-user-graduate',
      color: 'green',
      duration: '10-25 min'
    },
    {
      id: 'playback',
      title: 'Case Lifecycle Playback',
      description: 'Review how similar cases progressed through the legal system',
      icon: 'fas fa-play-circle',
      color: 'purple',
      duration: '20-40 min'
    }
  ];

  const simulationHistory = [
    {
      id: 1,
      mode: 'Oral Arguments',
      case: 'Contract Law - Breach of Agreement',
      date: '2023-10-24',
      duration: '18 minutes',
      score: 82
    },
    {
      id: 2,
      mode: 'Cross Examination',
      case: 'Criminal Law - Witness Testimony',
      date: '2023-10-22',
      duration: '22 minutes',
      score: 76
    },
    {
      id: 3,
      mode: 'Oral Arguments',
      case: 'Constitutional Law - Fundamental Rights',
      date: '2023-10-18',
      duration: '25 minutes',
      score: 88
    }
  ];

  const handleFileUpload = (e) => {
    // Simulate file upload process
    e.preventDefault();
    setSimulationStatus('uploading');
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setSimulationStatus('processing');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const startSimulation = () => {
    setSimulationStatus('running');
    // In a real app, this would launch the simulation
  };

  const renderSimulationMode = (mode) => {
    switch(mode) {
      case 'oral':
        return (
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">Oral Arguments Simulation</h3>
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Case Overview</h4>
              <p className="text-gray-600 mb-4">You will be arguing for the appellant in a contract dispute case. Your client claims breach of agreement by the respondent.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-1">Time Limit</h5>
                  <p className="text-sm">15 minutes</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-1">Your Role</h5>
                  <p className="text-sm">Appellant's Counsel</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Key Points to Address</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Existence of a valid contract</li>
                <li>Proof of breach by respondent</li>
                <li>Quantum of damages</li>
                <li>Precedents supporting your position</li>
              </ul>
            </div>
            
            <button 
              onClick={startSimulation}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Start Oral Arguments
            </button>
          </div>
        );
      
      case 'cross':
        return (
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">Cross Examination Simulation</h3>
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Witness Profile</h4>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <i className="fas fa-user text-2xl text-gray-500"></i>
                </div>
                <div>
                  <h5 className="font-medium">Mr. Rajesh Kumar</h5>
                  <p className="text-sm text-gray-600">Eyewitness to the incident</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <h5 className="font-medium text-yellow-800 mb-1">Witness Characteristics</h5>
                <p className="text-sm text-yellow-700">This witness tends to be nervous under pressure and has minor inconsistencies in their earlier statements.</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Your Objectives</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Challenge the witness's credibility</li>
                <li>Highlight inconsistencies in testimony</li>
                <li>Establish facts favorable to your case</li>
                <li>Avoid asking open-ended questions</li>
              </ul>
            </div>
            
            <button 
              onClick={startSimulation}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Start Cross Examination
            </button>
          </div>
        );
      
      case 'playback':
        return (
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">Case Lifecycle Playback</h3>
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Selected Case</h4>
              <p className="text-gray-600 mb-4">Sharma vs. Mehta - Contract Dispute (2022)</p>
              
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h5 className="font-medium text-purple-800 mb-1">Case Overview</h5>
                <p className="text-sm text-purple-700">This case involved a dispute over a service contract where the respondent allegedly failed to deliver services as specified in the agreement.</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Case Timeline</h4>
              <div className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-gray-200"></div>
                <ul className="space-y-8 relative">
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <i className="fas fa-flag text-purple-600"></i>
                    </div>
                    <div>
                      <h5 className="font-medium">Filing of Suit</h5>
                      <p className="text-sm text-gray-600">15th January, 2022</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <i className="fas fa-gavel text-purple-600"></i>
                    </div>
                    <div>
                      <h5 className="font-medium">First Hearing</h5>
                      <p className="text-sm text-gray-600">12th February, 2022</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <i className="fas fa-users text-purple-600"></i>
                    </div>
                    <div>
                      <h5 className="font-medium">Mediation Attempt</h5>
                      <p className="text-sm text-gray-600">5th March, 2022</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <i className="fas fa-balance-scale text-purple-600"></i>
                    </div>
                    <div>
                      <h5 className="font-medium">Final Judgment</h5>
                      <p className="text-sm text-gray-600">20th April, 2022</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <button 
              onClick={startSimulation}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Start Playback
            </button>
          </div>
        );
      
      default:
        return <div>Select a simulation mode</div>;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Mock Trial Simulation</h1>
          <p className="text-gray-600 mt-2">Welcome back, Chakshi! Practice your courtroom skills with AI-powered simulations.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'upload' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('upload')}
          >
            <i className="fas fa-upload mr-2"></i>Upload Case
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'modes' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('modes')}
          >
            <i className="fas fa-vr-cardboard mr-2"></i>Simulation Modes
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'history' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('history')}
          >
            <i className="fas fa-history mr-2"></i>Simulation History
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'upload' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <i className="fas fa-file-upload text-blue-600"></i>
                </div>
                <h3 className="font-semibold text-xl text-gray-800">Upload Case File</h3>
              </div>
              
              {simulationStatus === 'idle' && (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <i className="fas fa-cloud-upload-alt text-4xl text-gray-300 mb-4"></i>
                  <p className="text-gray-600 mb-4">Drag and drop your case file here, or click to browse</p>
                  <label htmlFor="case-upload" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors inline-block">
                    Select File
                  </label>
                  <input type="file" id="case-upload" className="hidden" onChange={handleFileUpload} />
                  <p className="text-xs text-gray-500 mt-4">Supported formats: PDF, DOCX, TXT (Max 10MB)</p>
                </div>
              )}
              
              {simulationStatus === 'uploading' && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <div className="w-full h-full rounded-full border-4 border-gray-200"></div>
                    <div 
                      className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-600 border-t-transparent animate-spin"
                      style={{transform: 'rotate(0deg)'}}
                    ></div>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Uploading File</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${uploadProgress}%`}}></div>
                  </div>
                  <p className="text-sm text-gray-600">{uploadProgress}% Complete</p>
                </div>
              )}
              
              {simulationStatus === 'processing' && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-cog text-3xl text-blue-600 animate-spin"></i>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Processing Case File</h4>
                  <p className="text-sm text-gray-600">We're analyzing your document to create a simulation scenario. This may take a few minutes.</p>
                </div>
              )}
              
              {simulationStatus === 'complete' && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-3xl text-green-600"></i>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Upload Complete!</h4>
                  <p className="text-sm text-gray-600 mb-4">Your case file has been processed and is ready for simulation.</p>
                  <button 
                    onClick={() => setActiveTab('modes')}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
                  >
                    Start Simulation
                  </button>
                </div>
              )}
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <i className="fas fa-file-alt text-green-600"></i>
                </div>
                <h3 className="font-semibold text-xl text-gray-800">Recent Uploads</h3>
              </div>
              
              {caseFiles.length > 0 ? (
                <div className="space-y-4">
                  {caseFiles.map(file => (
                    <div key={file.id} className="p-4 border border-gray-200 rounded-lg flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-gray-800">{file.name}</h4>
                        <div className="flex text-sm text-gray-600">
                          <span className="mr-4">{file.date}</span>
                          <span>{file.size}</span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        file.status === 'processed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {file.status === 'processed' ? 'Ready' : 'Processing'}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <i className="far fa-folder-open text-3xl text-gray-300 mb-3"></i>
                  <p className="text-gray-500">No recent uploads</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'modes' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {simulationModes.map(mode => (
              <div 
                key={mode.id} 
                className={`bg-white p-5 rounded-2xl shadow border-2 cursor-pointer transition-all ${
                  selectedMode === mode.id ? `border-${mode.color}-500` : 'border-white hover:border-gray-200'
                }`}
                onClick={() => setSelectedMode(mode.id)}
              >
                <div className={`w-12 h-12 rounded-full bg-${mode.color}-100 flex items-center justify-center mb-4`}>
                  <i className={`${mode.icon} text-${mode.color}-600 text-xl`}></i>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{mode.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{mode.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{mode.duration}</span>
                  <button className={`text-${mode.color}-600 hover:text-${mode.color}-800 font-medium`}>
                    Select <i className="fas fa-arrow-right text-xs ml-1"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'modes' && (
          <div className="bg-white p-6 rounded-2xl shadow">
            {renderSimulationMode(selectedMode)}
          </div>
        )}

        {activeTab === 'history' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Simulation History</h3>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-3">Filter by:</span>
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>All Modes</option>
                  <option>Oral Arguments</option>
                  <option>Cross Examination</option>
                  <option>Case Playback</option>
                </select>
              </div>
            </div>
            
            {simulationHistory.length > 0 ? (
              <div className="bg-white rounded-2xl shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Case</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {simulationHistory.map(session => (
                      <tr key={session.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{session.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{session.mode}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{session.case}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{session.duration}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            session.score >= 85 ? 'bg-green-100 text-green-800' : 
                            session.score >= 70 ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {session.score}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            <i className="fas fa-download"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-2xl shadow text-center">
                <i className="fas fa-history text-4xl text-gray-300 mb-4"></i>
                <h4 className="text-lg font-medium text-gray-600">No simulation history yet</h4>
                <p className="text-gray-500 mt-2">Complete your first simulation to see your history here</p>
                <button 
                  onClick={() => setActiveTab('modes')}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
                >
                  Start a Simulation
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Add Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
}