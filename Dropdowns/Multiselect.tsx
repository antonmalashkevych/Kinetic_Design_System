import React from 'react';
import './dropdowns.css';

export type MultiselectState = 'inactive' | 'hover' | 'focus' | 'selected' | 'disabled';

export interface MultiselectProps {
  label?: string;
  placeholder?: string;
  values?: string[];
  state?: MultiselectState;
  open?: boolean;
  children?: React.ReactNode;
  onToggle?: () => void;
  onRemove?: (value: string) => void;
}

const Caret: React.FC = () => (
  <svg className="k-dd__caret" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Multi-select dropdown with indigo selection chips. */
export const Multiselect: React.FC<MultiselectProps> = ({
  label,
  placeholder = 'Select',
  values = [],
  state = 'inactive',
  open,
  children,
  onToggle,
  onRemove,
}) => {
  const controlCls = [
    'k-dd__control',
    state !== 'inactive' && `k-dd__control--${state}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="k-dd">
      {label && <span className="k-dd__label">{label}</span>}
      <div
        className={controlCls}
        role="combobox"
        aria-expanded={!!open}
        aria-disabled={state === 'disabled'}
        onClick={state === 'disabled' ? undefined : onToggle}
      >
        {values.length ? (
          <div className="k-dd__chips">
            {values.map((v) => (
              <span key={v} className="k-dd__chip">
                {v}
                <button
                  type="button"
                  aria-label={`Remove ${v}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove?.(v);
                  }}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        ) : (
          <span className="k-dd__placeholder">{placeholder}</span>
        )}
        <Caret />
      </div>
      {open && children}
    </div>
  );
};

export default Multiselect;
