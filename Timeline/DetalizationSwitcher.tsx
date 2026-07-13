import React from 'react';
import './timeline.css';

export type Detalization = 'low' | 'medium' | 'high';

export interface DetalizationSwitcherProps {
  label?: string;
  value?: Detalization;
  onChange?: (value: Detalization) => void;
}

const ORDER: Detalization[] = ['low', 'medium', 'high'];

/** Indigo 3-step stepper controlling timeline detail level. */
export const DetalizationSwitcher: React.FC<DetalizationSwitcherProps> = ({
  label = 'Timeline Detalization',
  value = 'medium',
  onChange,
}) => {
  const activeIndex = ORDER.indexOf(value);
  return (
    <div className="k-tl-detal">
      <span className="k-tl-detal__label">{label}</span>
      <span className="k-tl-detal__track">
        {ORDER.map((step, i) => (
          <React.Fragment key={step}>
            {i > 0 && <span className="k-tl-detal__seg" />}
            <button
              type="button"
              className={`k-tl-detal__step${i === activeIndex ? ' k-tl-detal__step--active' : ''}`}
              aria-label={step}
              aria-pressed={i === activeIndex}
              onClick={() => onChange?.(step)}
            />
          </React.Fragment>
        ))}
      </span>
    </div>
  );
};

export default DetalizationSwitcher;
