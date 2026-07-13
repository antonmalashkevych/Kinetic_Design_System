import React from 'react';
import './breadcrumbs.css';

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  /** Ordered crumbs; the last is treated as the current page. */
  items: BreadcrumbItem[];
  /**
   * Figma: Full Path=False — collapse the middle into an ellipsis when there
   * are more than `maxVisible` crumbs.
   */
  collapsed?: boolean;
  /** Crumbs to keep visible when collapsed (first + last N). */
  maxVisible?: number;
  className?: string;
}

const Chevron = () => (
  <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Kinetic breadcrumbs.
 * Figma component set: Breadcrumbs (node 13282-182894).
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, collapsed = false, maxVisible = 3, className = '' }) => {
  const shouldCollapse = collapsed && items.length > maxVisible;
  const rendered: (BreadcrumbItem | 'ellipsis')[] = shouldCollapse
    ? [items[0], 'ellipsis', ...items.slice(-2)]
    : items;

  return (
    <nav className={['k-breadcrumbs', className].filter(Boolean).join(' ')} aria-label="Breadcrumb">
      {rendered.map((item, i) => {
        const sep = i > 0 ? <span className="k-breadcrumb__sep"><Chevron /></span> : null;
        if (item === 'ellipsis') {
          return (
            <React.Fragment key="ellipsis">
              {sep}
              <button type="button" className="k-breadcrumb__ellipsis" aria-label="Show hidden breadcrumbs">…</button>
            </React.Fragment>
          );
        }
        const isCurrent = item === items[items.length - 1];
        return (
          <React.Fragment key={i}>
            {sep}
            {isCurrent ? (
              <span className="k-breadcrumb" aria-current="page">{item.label}</span>
            ) : (
              <a className="k-breadcrumb" href={item.href} onClick={item.onClick}>{item.label}</a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
