import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Phone, MessageSquare, Video, Clock, Archive, Trash2, Pencil, ArrowLeft, Calendar, Target, Tag } from 'lucide-react';
import { useTimeline } from '../context/TimelineContext';

const statusConfig = {
  'overdue': { label: 'Overdue', cls: 'bg-red-500 text-white' },
  'almost due': { label: 'Almost Due', cls: 'bg-amber-500 text-white' },
  'on-track': { label: 'On Track', cls: 'bg-green-500 text-white' },
};

export default function FriendDetail() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const { addEntry } = useTimeline();

  useEffect(() => {
    import('../data/friends.json').then(m => {
      const found = m.default.find(f => f.id === parseInt(id));
      setFriend(found || null);
    });
  }, [id]);

  if (!friend) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-10 h-10 border-4 border-[#244D3F] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const status = statusConfig[friend.status] || statusConfig['on-track'];

  const handleCheckIn = (type) => {
    addEntry(friend.id, friend.name, type);
    toast.success(`${type} with ${friend.name} logged!`, {
      icon: type === 'Call' ? '📞' : type === 'Text' ? '💬' : '📹',
      style: { borderRadius: '12px', background: '#244D3F', color: '#fff' },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#244D3F] mb-6 transition-colors">
        <ArrowLeft size={16} /> Back to Friends
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col items-center text-center mb-6">
            <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900">{friend.name}</h1>
            <span className={`mt-2 text-xs px-3 py-1 rounded-full font-medium ${status.cls}`}>{status.label}</span>
          </div>

          <div className="space-y-3 text-sm text-gray-600 mb-6">
            <div className="flex flex-wrap gap-2">
              {friend.tags.map(tag => (
                <span key={tag} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed">{friend.bio}</p>
            <p className="text-gray-500">{friend.email}</p>
          </div>

          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <Clock size={16} className="text-amber-500" /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <Archive size={16} className="text-blue-500" /> Archive
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-red-100 text-sm text-red-600 hover:bg-red-50 transition-colors">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-5">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Days Since Contact', value: friend.days_since_contact, icon: Calendar },
              { label: 'Goal (days)', value: friend.goal, icon: Target },
              { label: 'Next Due', value: new Date(friend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), icon: Clock },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                <p className="text-2xl font-bold text-[#244D3F]">{value}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">Relationship Goal</h3>
              <button className="text-xs text-[#244D3F] flex items-center gap-1 hover:underline">
                <Pencil size={12} /> Edit
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Contact every <span className="font-bold text-[#244D3F]">{friend.goal} days</span>
            </p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { type: 'Call', icon: Phone, color: 'text-green-600 bg-green-50 hover:bg-green-100' },
                { type: 'Text', icon: MessageSquare, color: 'text-blue-600 bg-blue-50 hover:bg-blue-100' },
                { type: 'Video', icon: Video, color: 'text-purple-600 bg-purple-50 hover:bg-purple-100' },
              ].map(({ type, icon: Icon, color }) => (
                <button
                  key={type}
                  onClick={() => handleCheckIn(type)}
                  className={`flex flex-col items-center gap-2 py-4 rounded-xl font-medium text-sm transition-colors ${color}`}
                >
                  <Icon size={22} />
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
