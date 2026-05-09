import { Phone, MessageSquare, Video, Star } from 'lucide-react';

const typeConfig = {
  Call: { icon: Phone, color: 'text-green-600', bg: 'bg-green-50' },
  Text: { icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-50' },
  Video: { icon: Video, color: 'text-purple-600', bg: 'bg-purple-50' },
  Meetup: { icon: Star, color: 'text-amber-600', bg: 'bg-amber-50' },
};

export default function TimelineEntry({ entry }) {
  const config = typeConfig[entry.type] || typeConfig.Call;
  const Icon = config.icon;

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${config.bg}`}>
        <Icon size={16} className={config.color} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">
          <span className={`font-semibold ${config.color}`}>{entry.type}</span>
          {' '}
          <span className="text-gray-500 font-normal">with </span>
          {entry.friendName}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{formatDate(entry.date)}</p>
      </div>
    </div>
  );
}
