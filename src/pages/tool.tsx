import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import toolsData from '@site/src/data/tools.json';

type Tool = typeof toolsData.tools[0];
type Category = typeof toolsData.categories[0];

export default function ToolPage(): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedPricing, setSelectedPricing] = useState<string>('');

  // 获取当前语言（使用 useLocation 避免 SSR hydration mismatch）
  const { pathname } = useLocation();
  const isZh = !pathname.startsWith('/en');

  // 筛选逻辑
  const filteredTools = useMemo(() => {
    return toolsData.tools.filter((tool) => {
      // 搜索过滤
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const name = tool.name.toLowerCase();
        const desc = isZh ? tool.description : tool.descriptionEn;
        if (!name.includes(query) && !desc.toLowerCase().includes(query)) {
          return false;
        }
      }

      // 分类过滤
      if (selectedCategory !== 'all' && tool.category !== selectedCategory) {
        return false;
      }

      // 地区过滤
      if (selectedRegions.length > 0 && !selectedRegions.includes(tool.region)) {
        return false;
      }

      // 成本过滤
      if (selectedPricing && tool.pricing !== selectedPricing) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedRegions, selectedPricing, isZh]);

  // 地区筛选切换
  const toggleRegion = (regionId: string) => {
    setSelectedRegions((prev) =>
      prev.includes(regionId)
        ? prev.filter((r) => r !== regionId)
        : [...prev, regionId]
    );
  };

  // 获取标签显示文本
  const getRegionLabel = (regionId: string) => {
    const region = toolsData.regions.find((r) => r.id === regionId);
    return isZh ? region?.label : region?.labelEn;
  };

  const getPricingLabel = (pricingId: string) => {
    const pricing = toolsData.pricings.find((p) => p.id === pricingId);
    return isZh ? pricing?.label : pricing?.labelEn;
  };

  const getCategoryName = (category: Category) => {
    return isZh ? category.name : category.nameEn;
  };

  const title = translate({ id: 'tool.page.title', message: 'AI 工具导航' });
  const description = translate({ id: 'tool.page.description', message: '全球 AI 工具精选' });

  return (
    <Layout title={title} description={description}>
      <main className="max-w-[1400px] mx-auto px-4 py-12">
        {/* 页面标题 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          <Translate id="tool.page.title">AI 工具导航</Translate>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          <Translate id="tool.page.subtitle">全球 AI 工具精选，发现国内外优质 AI 工具</Translate>
        </p>

        {/* 搜索框 */}
        <div className="mb-6">
          <input
            type="text"
            placeholder={translate({ id: 'tool.search.placeholder', message: '搜索 AI 工具...' })}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-80 px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 outline-none transition-colors"
          />
        </div>

        {/* 分类 Tab */}
        <div className="flex flex-wrap gap-2 mb-6">
          {toolsData.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {getCategoryName(category)}
            </button>
          ))}
        </div>

        {/* 筛选器 */}
        <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
          {/* 地区筛选 */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              <Translate id="tool.filter.region">地区</Translate>:
            </span>
            {toolsData.regions.map((region) => (
              <button
                key={region.id}
                onClick={() => toggleRegion(region.id)}
                className={`px-3 py-1 rounded text-sm transition-all ${
                  selectedRegions.includes(region.id)
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-500'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-transparent'
                }`}
              >
                {isZh ? region.label : region.labelEn}
              </button>
            ))}
          </div>

          {/* 成本筛选 */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              <Translate id="tool.filter.pricing">成本</Translate>:
            </span>
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-3 py-1 rounded text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 outline-none"
            >
              <option value="">
                {translate({ id: 'tool.filter.pricing.all', message: '全部' })}
              </option>
              {toolsData.pricings.map((pricing) => (
                <option key={pricing.id} value={pricing.id}>
                  {isZh ? pricing.label : pricing.labelEn}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 工具数量 */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {filteredTools.length} <Translate id="tool.count.tools">个工具</Translate>
        </p>

        {/* 工具卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} isZh={isZh} getRegionLabel={getRegionLabel} getPricingLabel={getPricingLabel} />
          ))}
        </div>

        {/* 无结果提示 */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400">
            <Translate id="tool.noresults">没有找到匹配的工具</Translate>
          </div>
        )}
      </main>
    </Layout>
  );
}

// 工具卡片组件
function ToolCard({
  tool,
  isZh,
  getRegionLabel,
  getPricingLabel,
}: {
  tool: Tool;
  isZh: boolean;
  getRegionLabel: (id: string) => string | undefined;
  getPricingLabel: (id: string) => string | undefined;
}) {
  const description = isZh ? tool.description : tool.descriptionEn;

  return (
    <div className="group relative bg-gray-50 dark:bg-[#181824] border-2 border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300">
      {/* 卡片主体 - 点击跳推广链接 */}
      <a
        href={tool.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* 推荐标签 */}
        {tool.featured && (
          <span className="absolute top-3 right-3 text-sm">⭐</span>
        )}

        {/* Logo + 名称 */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center overflow-hidden">
            <img
              src={`/img/tools/${tool.logo}`}
              alt={tool.name}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/img/logo.png';
              }}
            />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {tool.name}
          </h3>
        </div>

        {/* 描述 */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>

        {/* 标签 */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            {getRegionLabel(tool.region)}
          </span>
          <span className="px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            {getPricingLabel(tool.pricing)}
          </span>
        </div>
      </a>

      {/* 查看评测按钮 - 独立点击区域 */}
      {tool.reviewUrl && (
        <a
          href={tool.reviewUrl}
          className="mt-4 block text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
        >
          <Translate id="tool.card.readReview">查看评测</Translate> →
        </a>
      )}
    </div>
  );
}
