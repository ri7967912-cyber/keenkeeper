import { Link } from 'react-router-dom';

const statusConfig = {
  'overdue': { label: 'Overdue', bg: 'bg-red-500' },
  'almost due': { label: 'Almost Due', bg: 'bg-amber-500' },
  'on-track': { label: 'On Track', bg: 'bg-green-500' },
};

export default function FriendCard({ friend }) {
  const status = statusConfig[friend.status] || statusConfig['on-track'];

  return (
    <Link to={`/friend/${friend.id}`} className="block">
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
        <div className="flex flex-col items-center text-center gap-2">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
          />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">{friend.name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{friend.days_since_contact} days ago</p>
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            {friend.tags.map(tag => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
          <span className={`text-xs px-3 py-1 rounded-full text-white font-medium ${status.bg}`}>
            {status.label}
          </span>
        </div>
      </div>
    </Link>
  );
}
