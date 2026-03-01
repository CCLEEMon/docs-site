/**
 * FeatureCard - 功能卡片组件
 * 用于展示功能说明、服务优势等内容
 */
interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export default function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
      {icon && (
        <div className="flex items-center gap-2 mb-3">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
