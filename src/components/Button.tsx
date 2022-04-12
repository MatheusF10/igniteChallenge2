import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
  onClick: () => void;
}

export function Button({
  iconName,
  title,
  selected,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      {...(selected && { className: 'selected' })}
      {...rest}
      onClick={onClick}
    >
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}
