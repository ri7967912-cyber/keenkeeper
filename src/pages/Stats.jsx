import { useTimeline } from '../context/TimelineContext';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#244D3F', '#64748B', '#9333EA', '#F59E0B'];

export default function Stats() {
  const { entries } = useTimeline();

  const counts = entries.reduce((acc, e) => {
    acc[e.type] = (acc[e.type] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(counts).map(([name, value]) => ({ name, value }));

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-display text-3xl font-bold text-gray-900 mb-8">Friendship Analytics</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-semibold text-gray-800 mb-1">By Interaction Type</h2>
        <p className="text-sm text-gray-500 mb-6">A breakdown of how you stay in touch with your friends.</p>

        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={130}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          {data.map((item, i) => (
            <div key={item.name} className="text-center p-3 rounded-xl" style={{ backgroundColor: COLORS[i % COLORS.length] + '15' }}>
              <p className="text-2xl font-bold" style={{ color: COLORS[i % COLORS.length] }}>{item.value}</p>
              <p className="text-xs text-gray-600 mt-1">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
