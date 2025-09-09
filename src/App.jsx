import { Routes, Route, Link } from 'react-router-dom'
import Sidebar from './partials/Sidebar'
import Research from './pages/Research'
import Simulation from './pages/Simulation'
import ExamPrep from './pages/ExamPrep'
import Career from './pages/Career'
import ContentFeed from './pages/ContentFeed'
import CalendarPage from './pages/Calendar'

export default function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Routes>
          <Route path='/' element={<Research />} />
          <Route path='/research' element={<Research />} />
          <Route path='/simulation' element={<Simulation />} />
          <Route path='/exam-prep' element={<ExamPrep />} />
          <Route path='/career' element={<Career />} />
          <Route path='/content' element={<ContentFeed />} />
          <Route path='/calendar' element={<CalendarPage />} />
        </Routes>
      </main>
    </div>
  )
}
