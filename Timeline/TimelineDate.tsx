import React from 'react';
import './timeline.css';

export interface TimelineDateProps {
  date: string;
}

/** Date marker (underlined date label). */
export const TimelineDate: React.FC<TimelineDateProps> = ({ date }) => (
  <span className="k-tl-date">{date}</span>
);

export default TimelineDate;
