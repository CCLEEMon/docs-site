/**
 * ComparisonTable - 对比表格组件
 * 用于展示功能对比表格，支持深色模式
 */
interface ComparisonTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

export default function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800">
            {headers.map((header, index) => (
              <th
                key={index}
                className={`p-3 border border-gray-200 dark:border-gray-700 font-semibold ${
                  index === 0 ? 'text-left' : 'text-center'
                } text-gray-900 dark:text-white`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`p-3 border border-gray-200 dark:border-gray-700 ${
                    cellIndex === 0 ? 'text-left' : 'text-center'
                  } text-gray-700 dark:text-gray-300`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
