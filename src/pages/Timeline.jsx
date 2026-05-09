import { useState } from 'react';
import { useTimeline } from '../context/TimelineContext';
import TimelineEntry from '../components/TimelineEntry';
import { Filter } from 'lucide-react';

const FILTERS = ['All', 'Call', 'Text', 'Video', 'Meetup'];

export default function Timeline() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? entries : entries.filter(e => e.type === filter);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-display text-3xl font-bold text-gray-900 mb-6">Timeline</h1>

      {/* Filter */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Filter size={16} className="text-gray-400" />
        <div className="flex flex-wrap gap-2">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                filter === f
                  ? 'bg-[#244D3F] text-white border-[#244D3F]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#244D3F]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 divide-y divide-gray-100">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-12 text-sm">No entries found.</p>
        ) : (
          filtered.map(entry => <TimelineEntry key={entry.id} entry={entry} />)
        )}
      </div>
    </div>
  );
}
