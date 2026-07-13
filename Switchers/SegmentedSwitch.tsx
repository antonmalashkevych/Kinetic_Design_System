import React from 'react';
import './switchers.css';

export interface SegmentButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: State=Active (brand orange). */
  active?: boolean;
  children?: React.ReactNode;
}

/**
 * A single segment in a SegmentedSwitch.
 * Figma component set: Swithcer/Button/Item (node 13280-181599).
 */
export const SegmentButton = React.forwardRef<HTMLButtonElement, SegmentButtonProps>(
  function SegmentButton({ active = false, children, className = '', ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={active}
        className={['k-segment', className].filter(Boolean).join(' ')}
        data-active={active || undefined}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export interface SegmentedSwitchProps {
  /** Segment labels. */
  items?: React.ReactNode[];
  /** Figma: Active (1-based index of the active segment). */
  activeIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
}

/**
 * Kinetic segmented switch (brand orange active segment).
 * Figma component set: Swithcer/Button (node 13280-181599).
 */
export const SegmentedSwitch: React.FC<SegmentedSwitchProps> = ({
  items = [],
  activeIndex = 1,
  onChange,
  className = '',
}) => (
  <div className={['k-segmented', className].filter(Boolean).join(' ')} role="tablist">
    {items.map((item, i) => (
      <SegmentButton key={i} active={i + 1 === activeIndex} onClick={() => onChange?.(i + 1)}>
        {item}
      </SegmentButton>
    ))}
  </div>
);

export default SegmentedSwitch;
