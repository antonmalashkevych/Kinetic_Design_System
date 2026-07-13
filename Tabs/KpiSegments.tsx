import React from 'react';
import './tabs.css';

/** Figma: Tabs/Atoms/Segment Value — Color Index. */
export type KpiColorIndex = 'positive' | 'neutral' | 'bad';

export interface KpiSegmentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: React.ReactNode;
  /** Numeric value (rendered in the mono token). */
  value?: React.ReactNode;
  /** Figma: Color Index. */
  colorIndex?: KpiColorIndex;
  /** Figma: Selected. */
  selected?: boolean;
}

/**
 * Kinetic KPI segment (label + value metric tab).
 * Figma component sets: Tabs/Atoms/KPI Segment + Segment Value (node 661-7732).
 */
export const KpiSegment = React.forwardRef<HTMLButtonElement, KpiSegmentProps>(
  function KpiSegment({ label, value, colorIndex = 'neutral', selected = false, className = '', ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={['k-kpi-segment', className].filter(Boolean).join(' ')}
        data-selected={selected || undefined}
        {...rest}
      >
        {label != null ? <span className="k-kpi-segment__label">{label}</span> : null}
        <span className={['k-kpi-segment__value', colorIndex !== 'neutral' ? `k-kpi-segment__value--${colorIndex}` : ''].filter(Boolean).join(' ')}>
          {value}
        </span>
      </button>
    );
  },
);

export interface KpiSegmentsProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic KPI segments container.
 * Figma component set: Tabs/KPI Segments (node 661-7732).
 */
export const KpiSegments: React.FC<KpiSegmentsProps> = ({ children, className = '' }) => (
  <div className={['k-kpi-segments', className].filter(Boolean).join(' ')}>{children}</div>
);

export default KpiSegments;
