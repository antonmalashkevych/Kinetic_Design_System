import React from 'react';
import './menuitems.css';

/** Figma: Menu items/Side bar/Item card — View. */
export type ItemCardView = 'full' | 'collapsed';

export interface SidebarItemCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  /** Figma: View (Full / Colapsed). */
  view?: ItemCardView;
  /** Figma: State=Active (orange-tint bg + brand border). */
  active?: boolean;
}

/**
 * Kinetic sidebar item card.
 * Figma component set: Menu items/Side bar/Item card (node 13282-181810).
 */
export const SidebarItemCard = React.forwardRef<HTMLButtonElement, SidebarItemCardProps>(
  function SidebarItemCard({ title, subtitle, icon, view = 'full', active = false, disabled, className = '', ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={['k-sidebar-card', view === 'collapsed' ? 'k-sidebar-card--collapsed' : '', className].filter(Boolean).join(' ')}
        data-active={active || undefined}
        disabled={disabled}
        {...rest}
      >
        {icon ? <span className="k-left-menu-item__icon">{icon}</span> : null}
        {view === 'full' ? (
          <span>
            {title != null ? <div className="k-sidebar-card__title">{title}</div> : null}
            {subtitle != null ? <div className="k-sidebar-card__sub">{subtitle}</div> : null}
          </span>
        ) : null}
      </button>
    );
  },
);

export default SidebarItemCard;
