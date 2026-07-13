import React from 'react';
import './tabs.css';

/** Segment visual style. */
export type SegmentStyle = 'solid' | 'rounded' | 'outline' | 'ghost';

export interface SegmentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: Active / State=Active. */
  active?: boolean;
  /** Style variant. */
  segmentStyle?: SegmentStyle;
  /** Figma: tag boolean (Ghost) — trailing count tag. */
  tag?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Kinetic segment (segmented-control item).
 * Figma component sets: Tabs/Atoms/Segment, Segments control (Default/Rounded/Outline/Ghost) (node 661-7732).
 */
export const Segment = React.forwardRef<HTMLButtonElement, SegmentProps>(
  function Segment({ active = false, segmentStyle = 'solid', tag, children, disabled, className = '', ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={active}
        className={['k-segment', segmentStyle !== 'solid' ? `k-segment--${segmentStyle}` : '', className].filter(Boolean).join(' ')}
        data-active={active || undefined}
        disabled={disabled}
        {...rest}
      >
        {children}
        {tag != null ? <span className="k-segment__tag">{tag}</span> : null}
      </button>
    );
  },
);

export interface SegmentedControlProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Kinetic segmented control container.
 * Figma component set: Tabs/Segments control/Default (node 661-7732).
 */
export const SegmentedControl: React.FC<SegmentedControlProps> = ({ children, className = '' }) => (
  <div className={['k-segmented-control', className].filter(Boolean).join(' ')} role="tablist">
    {children}
  </div>
);

export default SegmentedControl;
