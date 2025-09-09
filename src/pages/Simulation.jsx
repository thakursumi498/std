export default function Simulation(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Simulation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">
  <h3 className="font-semibold mb-2">Upload Case</h3>
  <p className="text-sm text-slate-500">Upload a file to generate mock trial transcript & video preview.</p>
  <button className="mt-3 px-4 py-2 rounded bg-blue-600 text-white">Upload</button>
</div>
<div className="bg-white p-4 rounded-2xl shadow">
  <h3 className="font-semibold mb-2">Simulation Modes</h3>
  <ul className="list-disc pl-5 text-sm text-slate-600">
    <li>Oral Arguments</li>
    <li>Cross Examination</li>
    <li>Case Lifecycle Playback</li>
  </ul>
</div>

      </div>
    </div>
  )
}
