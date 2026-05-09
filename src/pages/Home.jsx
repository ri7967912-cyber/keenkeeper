import { useState, useEffect } from 'react';
import { UserPlus, Users, CheckCircle, AlertCircle, Activity } from 'lucide-react';
import FriendCard from '../components/FriendCard';

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      import('../data/friends.json').then(m => {
        setFriends(m.default);
        setLoading(false);
      });
    }, 800);
  }, []);

  const stats = {
    total: friends.length,
    onTrack: friends.filter(f => f.status === 'on-track').length,
    needAttention: friends.filter(f => f.status === 'almost due').length,
    overdue: friends.filter(f => f.status === 'overdue').length,
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg, #244D3F 0%, #3a7a65 100%)' }} className="py-16 px-4 text-center text-white">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
          Friends to keep close in your life
        </h1>
        <p className="text-white/75 text-base max-w-lg mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="inline-flex items-center gap-2 bg-white text-[#244D3F] font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-colors shadow-lg">
          <UserPlus size={18} />
          Add a Friend
        </button>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10">
          {[
            { label: 'Total Friends', value: stats.total, icon: Users, color: 'bg-white/10' },
            { label: 'On Track', value: stats.onTrack, icon: CheckCircle, color: 'bg-white/10' },
            { label: 'Need Attention', value: stats.needAttention, icon: AlertCircle, color: 'bg-white/10' },
            { label: 'Interactions This Month', value: 12, icon: Activity, color: 'bg-white/10' },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className={`${color} backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20`}>
              <p className="text-3xl font-bold">{loading ? '—' : value}</p>
              <p className="text-xs text-white/70 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Friends Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Your Friends</h2>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-12 h-12 border-4 border-[#244D3F] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 text-sm">Loading your friends...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {friends.map(friend => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
