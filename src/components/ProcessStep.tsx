/**
 * ProcessStep - 流程步骤组件
 * 用于展示使用流程、操作步骤等居中布局的卡片
 */
interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ProcessStep({ icon, title, description }: ProcessStepProps) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-center hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
