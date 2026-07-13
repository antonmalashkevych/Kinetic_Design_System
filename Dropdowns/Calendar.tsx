import React from 'react';
import './dropdowns.css';

export type CalendarCellState =
  | 'dayname'
  | 'default'
  | 'other'
  | 'today'
  | 'selected'
  | 'range'
  | 'hover';

export interface CalendarCellProps {
  value: string | number;
  state?: CalendarCellState;
  onClick?: () => void;
}

/** One day cell. Selected = solid indigo, today = indigo ring, range = indigo tint. */
export const CalendarCell: React.FC<CalendarCellProps> = ({ value, state = 'default', onClick }) => {
  const cls = ['k-cal-cell', state !== 'default' && `k-cal-cell--${state}`].filter(Boolean).join(' ');
  if (state === 'dayname') return <div className={cls}>{value}</div>;
  return (
    <button type="button" className={cls} aria-selected={state === 'selected'} onClick={onClick}>
      {value}
    </button>
  );
};

export type CalendarState = 'regular' | 'date-selected' | 'period-selected';

export interface CalendarProps {
  state?: CalendarState;
  children?: React.ReactNode; // cells
}

export const Calendar: React.FC<CalendarProps> = ({ children }) => (
  <div className="k-cal">
    <div className="k-cal__grid" role="grid">
      {children}
    </div>
  </div>
);

export default Calendar;
