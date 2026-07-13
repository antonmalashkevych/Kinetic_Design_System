import React from 'react';
import './timeline.css';

export interface TimelineItemProps {
  dot?: 'solid' | 'hollow' | 'none';
  line?: boolean;
  children?: React.ReactNode;
}

/** Timeline row: rail (marker dot + connector line) + body content. */
export const TimelineItem: React.FC<TimelineItemProps> = ({ dot = 'solid', line = true, children }) => (
  <div className="k-tl-row">
    <div className="k-tl-rail">
      {dot !== 'none' && <span className={`k-tl-dot${dot === 'hollow' ? ' k-tl-dot--hollow' : ''}`} />}
      {line && <span className="k-tl-line" />}
    </div>
    <div className="k-tl-body">{children}</div>
  </div>
);

export default TimelineItem;
