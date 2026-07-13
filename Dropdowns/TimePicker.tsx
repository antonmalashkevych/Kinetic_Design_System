import React from 'react';
import './dropdowns.css';

export type TimeFormat = 'HH:MM' | 'HH:MM:SS';

export interface TimePickerProps {
  hours?: string;
  minutes?: string;
  seconds?: string;
  timeFormat?: TimeFormat;
  showAmPm?: boolean;
  ampm?: 'AM' | 'PM';
  activated?: boolean;
}

/** Monospaced time field. Active border = indigo. */
export const TimePicker: React.FC<TimePickerProps> = ({
  hours = '00',
  minutes = '00',
  seconds = '00',
  timeFormat = 'HH:MM',
  showAmPm = false,
  ampm = 'AM',
  activated = false,
}) => {
  const cls = ['k-time', activated && 'k-time--active'].filter(Boolean).join(' ');
  return (
    <div className={cls} role="group" aria-label="Time picker">
      <span>{hours}</span>
      <span>:</span>
      <span>{minutes}</span>
      {timeFormat === 'HH:MM:SS' && (
        <>
          <span>:</span>
          <span>{seconds}</span>
        </>
      )}
      {showAmPm && <span className="k-time__ampm">{ampm}</span>}
    </div>
  );
};

export default TimePicker;
