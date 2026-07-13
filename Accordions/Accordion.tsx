import React, { useState } from 'react';
import './accordions.css';

export type AccordionType = 'section' | 'list';

export interface AccordionProps {
  title: React.ReactNode;
  type?: AccordionType;
  /** controlled open state; omit for uncontrolled */
  open?: boolean;
  defaultOpen?: boolean;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  onToggle?: (open: boolean) => void;
}

const Chevron: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    className={`k-accordion__chevron${open ? ' k-accordion__chevron--open' : ''}`}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden
  >
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Collapsible accordion. `section` = borderless (title + chevron),
 * `list` = bordered card with optional header actions (e.g. View / info).
 */
export const Accordion: React.FC<AccordionProps> = ({
  title,
  type = 'section',
  open,
  defaultOpen = false,
  actions,
  children,
  onToggle,
}) => {
  const [internal, setInternal] = useState(defaultOpen);
  const isOpen = open ?? internal;

  const toggle = () => {
    const next = !isOpen;
    if (open === undefined) setInternal(next);
    onToggle?.(next);
  };

  return (
    <div className={`k-accordion k-accordion--${type}`}>
      <button type="button" className="k-accordion__header" aria-expanded={isOpen} onClick={toggle}>
        <Chevron open={isOpen} />
        <span className="k-accordion__title">{title}</span>
        {actions && (
          <span className="k-accordion__actions" onClick={(e) => e.stopPropagation()}>
            {actions}
          </span>
        )}
      </button>
      {isOpen && <div className="k-accordion__content">{children}</div>}
    </div>
  );
};

export default Accordion;
