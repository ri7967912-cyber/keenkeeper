import { createContext, useContext, useState } from 'react';

const TimelineContext = createContext();

const initialEntries = [
  { id: 1, friendId: 1, friendName: "Emma Wilson", type: "Text", date: "2026-03-28", title: "Text with Emma Wilson" },
  { id: 2, friendId: 5, friendName: "Sarah Chen", type: "Text", date: "2026-03-28", title: "Text with Sarah Chen" },
  { id: 3, friendId: 3, friendName: "Lisa Nakamura", type: "Meetup", date: "2026-03-26", title: "Meetup with Lisa Nakamura" },
  { id: 4, friendId: 7, friendName: "Aisha Patel", type: "Video", date: "2026-03-23", title: "Video with Aisha Patel" },
  { id: 5, friendId: 5, friendName: "Sarah Chen", type: "Meetup", date: "2026-03-21", title: "Meetup with Sarah Chen" },
  { id: 6, friendId: 6, friendName: "Marcus Johnson", type: "Call", date: "2026-03-19", title: "Call with Marcus Johnson" },
  { id: 7, friendId: 7, friendName: "Aisha Patel", type: "Meetup", date: "2026-03-17", title: "Meetup with Aisha Patel" },
  { id: 8, friendId: 3, friendName: "Lisa Nakamura", type: "Text", date: "2026-03-13", title: "Text with Lisa Nakamura" },
  { id: 9, friendId: 3, friendName: "Lisa Nakamura", type: "Call", date: "2026-03-09", title: "Call with Lisa Nakamura" },
  { id: 10, friendId: 5, friendName: "Sarah Chen", type: "Call", date: "2026-03-01", title: "Call with Sarah Chen" },
  { id: 11, friendId: 6, friendName: "Marcus Johnson", type: "Video", date: "2026-03-06", title: "Video with Marcus Johnson" },
  { id: 12, friendId: 8, friendName: "Ryan O'Brien", type: "Video", date: "2026-02-24", title: "Video with Ryan O'Brien" },
];

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(initialEntries);

  const addEntry = (friendId, friendName, type) => {
    const newEntry = {
      id: Date.now(),
      friendId,
      friendName,
      type,
      date: new Date().toISOString().split('T')[0],
      title: `${type} with ${friendName}`,
    };
    setEntries(prev => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export const useTimeline = () => useContext(TimelineContext);
