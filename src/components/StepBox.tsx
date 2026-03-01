/**
 * StepBox - 步骤容器组件
 * 用于展示快速上手、安装步骤等有序列表
 */
interface StepBoxProps {
  title: string;
  children: React.ReactNode;
}

export default function StepBox({ title, children }: StepBoxProps) {
  return (
    <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 my-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </ol>
    </div>
  );
}
