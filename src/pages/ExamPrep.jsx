export default function ExamPrep(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Exam Prep</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">
  <h3 className="font-semibold mb-2">Daily Quiz</h3>
  <p className="text-sm text-slate-500">AI-generated MCQs tailored to your progress.</p>
  <button className="mt-3 px-4 py-2 rounded bg-blue-600 text-white">Start Quiz</button>
</div>
<div className="bg-white p-4 rounded-2xl shadow">
  <h3 className="font-semibold mb-2">Progress Tracker</h3>
  <p className="text-sm text-slate-500">Track your mock test scores and topics.</p>
</div>

      </div>
    </div>
  )
}
