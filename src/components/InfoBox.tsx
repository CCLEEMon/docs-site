/**
 * InfoBox - 信息提示框组件
 * 用于展示提示、警告、注意事项等
 */
interface InfoBoxProps {
  icon?: React.ReactNode;
  title: string;
  variant?: 'info' | 'warning' | 'success';
  children: React.ReactNode;
}

const variants = {
  info: {
    container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    title: 'text-blue-800 dark:text-blue-200',
    content: 'text-blue-700 dark:text-blue-300',
  },
  warning: {
    container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    title: 'text-yellow-800 dark:text-yellow-200',
    content: 'text-gray-600 dark:text-gray-300',
  },
  success: {
    container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    title: 'text-green-800 dark:text-green-200',
    content: 'text-gray-600 dark:text-gray-300',
  },
};

export default function InfoBox({ icon, title, variant = 'info', children }: InfoBoxProps) {
  const styles = variants[variant];

  return (
    <div className={`p-6 rounded-xl border ${styles.container}`}>
      <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${styles.title}`}>
        {icon}
        {title}
      </h3>
      <div className={`text-sm leading-relaxed ${styles.content}`}>
        {children}
      </div>
    </div>
  );
}
