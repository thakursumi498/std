export default function ContentFeed(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Content Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">
  <h3 className="font-semibold mb-2">Daily Digest</h3>
  <p className="text-sm text-slate-500">Case-of-the-day breakdowns and explainer reels.</p>
</div>
<div className="bg-white p-4 rounded-2xl shadow">
  <h3 className="font-semibold mb-2">E-books & Notes</h3>
  <p className="text-sm text-slate-500">Student-focused e-books and summaries.</p>
</div>

      </div>
    </div>
  )
}
