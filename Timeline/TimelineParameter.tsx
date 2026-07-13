import React, { useState } from 'react';
import './timeline.css';

export type ParameterState = 'regular' | 'collapsed' | 'expanded';

export interface TimelineParameterProps {
  label?: string;
  text?: string;
  /** collapsed = clamp with "Read More", expanded = full with "Read Less", regular = no toggle */
  state?: ParameterState;
  /** before/after pair renders two labelled cards */
  before?: string;
  after?: string;
}

/** Parameter content card. Supports Read More/Less and before/after pairs. */
export const TimelineParameter: React.FC<TimelineParameterProps> = ({
  label = 'Parameter',
  text,
  state = 'regular',
  before,
  after,
}) => {
  const [expanded, setExpanded] = useState(state === 'expanded');
  const collapsible = state === 'collapsed' || state === 'expanded';

  if (before !== undefined || after !== undefined) {
    return (
      <div className="k-tl-param">
        <span className="k-tl-param__label">{label}</span>
        <span className="k-tl-param__ba-label">Before:</span>
        <div className="k-tl-param__card">{before}</div>
        <span className="k-tl-param__ba-label">After:</span>
        <div className="k-tl-param__card">{after}</div>
      </div>
    );
  }

  return (
    <div className="k-tl-param">
      <span className="k-tl-param__label">{label}</span>
      <div className="k-tl-param__card">
        <span className={!expanded && collapsible ? 'k-tl-param__text--clamped' : undefined}>{text}</span>
        {collapsible && (
          <button type="button" className="k-tl-param__toggle" onClick={() => setExpanded((v) => !v)}>
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default TimelineParameter;
