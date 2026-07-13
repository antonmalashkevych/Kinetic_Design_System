import React from 'react';
import './timeline.css';

export interface TimelineTimeProps {
  time: string;
  person?: string;
  badge?: string;
}

const Clock: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M7 4v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Time marker row (mono time + optional person + badge). */
export const TimelineTime: React.FC<TimelineTimeProps> = ({ time, person, badge }) => (
  <span className="k-tl-time">
    <span className="k-tl-time__clock"><Clock /></span>
    <span className="k-tl-time__value">{time}</span>
    {person && (
      <span className="k-tl-time__person">
        by: {person}
      </span>
    )}
    {badge && <span className="k-tl-badge">{badge}</span>}
  </span>
);

export default TimelineTime;
