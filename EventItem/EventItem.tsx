import React from 'react';
import './eventitem.css';
import { TimelineDate } from '../Timeline/TimelineDate';
import { TimelineTime } from '../Timeline/TimelineTime';
import { TimelineParameter } from '../Timeline/TimelineParameter';
import type { ParameterState } from '../Timeline/TimelineParameter';

export interface EventParameter {
  label?: string;
  text?: string;
  state?: ParameterState;
  before?: string;
  after?: string;
}

export interface EventItemProps {
  date: string;
  time?: string;
  person?: string;
  badge?: string;
  parameters: EventParameter[];
}

/**
 * Event organism: a dated event header (date + time + person + badge) followed by
 * 1-4 parameter cards. Composes the Timeline primitives.
 */
export const EventItem: React.FC<EventItemProps> = ({ date, time, person, badge, parameters }) => (
  <div className="k-event">
    <div className="k-event__header">
      <TimelineDate date={date} />
      {time && <TimelineTime time={time} person={person} badge={badge} />}
    </div>
    <div className="k-event__params">
      {parameters.map((p, i) => (
        <TimelineParameter
          key={i}
          label={p.label}
          text={p.text}
          state={p.state}
          before={p.before}
          after={p.after}
        />
      ))}
    </div>
  </div>
);

export default EventItem;
