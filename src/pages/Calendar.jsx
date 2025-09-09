import { useState } from 'react';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([
    { id: 1, title: 'Moot Court Practice', date: new Date(2023, 9, 15), type: 'academic' },
    { id: 2, title: 'Internship Application Deadline', date: new Date(2023, 9, 20), type: 'career' },
    { id: 3, title: 'Contract Law Exam', date: new Date(2023, 9, 25), type: 'exam' },
    { id: 4, title: 'Legal Research Workshop', date: new Date(2023, 9, 18), type: 'academic' },
  ]);

  const [syncStatus, setSyncStatus] = useState('idle');

  const handleSync = () => {
    setSyncStatus('syncing');
    // Simulate API call
    setTimeout(() => {
      setSyncStatus('synced');
      setTimeout(() => setSyncStatus('idle'), 2000);
    }, 1500);
  };

  const handleExport = () => {
    // In a real app, this would generate and download a file
    alert('Exporting calendar events...');
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = events.filter(event => 
        event.date.getDate() === day && 
        event.date.getMonth() === currentDate.getMonth() &&
        event.date.getFullYear() === currentDate.getFullYear()
      );
      
      const isSelected = selectedDate && 
        selectedDate.getDate() === day && 
        selectedDate.getMonth() === currentDate.getMonth() &&
        selectedDate.getFullYear() === currentDate.getFullYear();
      
      days.push(
        <div 
          key={day} 
          className={`h-12 border border-gray-200 flex flex-col items-center justify-start p-1 cursor-pointer
            ${isSelected ? 'bg-blue-100 border-blue-300' : 'hover:bg-gray-50'}`}
          onClick={() => setSelectedDate(date)}
        >
          <span className={`text-sm ${isSelected ? 'font-bold text-blue-700' : 'text-gray-700'}`}>
            {day}
          </span>
          <div className="flex justify-center mt-1">
            {dayEvents.slice(0, 2).map(event => (
              <span 
                key={event.id} 
                className={`w-2 h-2 rounded-full mx-0.5 ${
                  event.type === 'exam' ? 'bg-red-500' : 
                  event.type === 'career' ? 'bg-green-500' : 'bg-blue-500'
                }`}
                title={event.title}
              ></span>
            ))}
            {dayEvents.length > 2 && (
              <span className="text-xs text-gray-500">+{dayEvents.length - 2}</span>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const getEventsForSelectedDate = () => {
    if (!selectedDate) return [];
    return events.filter(event => 
      event.date.getDate() === selectedDate.getDate() && 
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getFullYear() === selectedDate.getFullYear()
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Academic Calendar</h2>
        <div className="flex space-x-2">
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700 transition-colors"
            onClick={handleSync}
            disabled={syncStatus === 'syncing'}
          >
            {syncStatus === 'syncing' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Syncing...
              </>
            ) : syncStatus === 'synced' ? (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Synced
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Sync with Google
              </>
            )}
          </button>
          <button 
            className="px-4 py-2 border border-gray-300 rounded-lg flex items-center hover:bg-gray-50 transition-colors"
            onClick={handleExport}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={() => navigateMonth(-1)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <h3 className="text-xl font-semibold text-gray-800">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <button 
              onClick={() => navigateMonth(1)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {renderCalendarDays()}
          </div>
        </div>

        {/* Events Panel */}
        <div className="space-y-6">
          {/* Selected Date Events */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-semibold mb-4 text-lg text-gray-800">
              {selectedDate ? formatDate(selectedDate) : 'Select a date'}
            </h3>
            
            {getEventsForSelectedDate().length > 0 ? (
              <ul className="space-y-3">
                {getEventsForSelectedDate().map(event => (
                  <li key={event.id} className="flex items-start">
                    <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                      event.type === 'exam' ? 'bg-red-500' : 
                      event.type === 'career' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></span>
                    <div>
                      <p className="font-medium text-gray-800">{event.title}</p>
                      <p className="text-sm text-gray-500">
                        {event.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No events scheduled for this day.</p>
            )}
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-semibold mb-4 text-lg text-gray-800">Upcoming Events</h3>
            <ul className="space-y-4">
              {events
                .filter(event => event.date > new Date())
                .sort((a, b) => a.date - b.date)
                .slice(0, 3)
                .map(event => (
                  <li key={event.id} className="flex items-start">
                    <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                      event.type === 'exam' ? 'bg-red-500' : 
                      event.type === 'career' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <div>
                      <p className="font-medium text-gray-800">{event.title}</p>
                      <p className="text-sm text-gray-500">
                        {event.date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}