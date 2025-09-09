export default function Research(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Research</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">
  <h3 className="font-semibold mb-2">Search Judgments</h3>
  <input className="w-full px-3 py-2 border rounded" placeholder="Search by case name, citation or topic" />
</div>
<div className="bg-white p-4 rounded-2xl shadow">
  <h3 className="font-semibold mb-2">Saved Notes</h3>
  <p className="text-sm text-slate-500">Your annotated judgments will appear here.</p>
</div>

      </div>
    </div>
  )
}
