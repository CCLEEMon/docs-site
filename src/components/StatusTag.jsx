import { CheckIcon, ZapIcon, XIcon } from './Icons';

const icons = {
  success: CheckIcon,
  warning: ZapIcon,
  info: ZapIcon,
  error: XIcon,
};

export default function StatusTag({ type = 'success', children }) {
  const Icon = icons[type];
  return (
    <span style={{ color: `var(--color-${type})` }}>
      {Icon && <Icon size={16} />} {children}
    </span>
  );
}
