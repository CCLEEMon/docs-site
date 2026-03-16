import { CheckIcon, ZapIcon, XIcon } from './Icons';

const icons = {
  success: CheckIcon,
  warning: ZapIcon,
  info: ZapIcon,
  error: XIcon,
};

const colorClasses = {
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-amber-600 dark:text-amber-400',
  info: 'text-blue-600 dark:text-blue-400',
  error: 'text-red-600 dark:text-red-400',
};

export default function StatusTag({ type = 'success', children }) {
  const Icon = icons[type];
  return (
    <span className={`status-tag ${colorClasses[type]}`}>
      {Icon && <Icon size={16} />} {children}
    </span>
  );
}
