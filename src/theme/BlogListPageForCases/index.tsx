import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import type { Props } from '@theme/BlogListPage';

interface BlogItem {
  content: {
    frontMatter: {
      category?: string;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

interface GroupedItems {
  client: BlogItem[];
  selfInitiated: BlogItem[];
}

function groupItemsByCategory(items: BlogItem[]): GroupedItems {
  const grouped: GroupedItems = {
    client: [],
    selfInitiated: [],
  };

  items.forEach((item) => {
    const category = item.content?.frontMatter?.category || 'client';
    if (category === 'self-initiated') {
      grouped.selfInitiated.push(item);
    } else {
      grouped.client.push(item);
    }
  });

  return grouped;
}

function BlogSection({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: BlogItem[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="margin-bottom--xl">
      <header className="margin-bottom--lg">
        <h2 className="margin-bottom--none">{title}</h2>
        {subtitle && (
          <p className="margin-top--sm margin-bottom--none text--muted">
            {subtitle}
          </p>
        )}
      </header>
      <BlogPostItems items={items} />
    </section>
  );
}

function BlogListPageMetadata(props: Props) {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props) {
  const { metadata, items, sidebar } = props;
  const grouped = groupItemsByCategory(items as BlogItem[]);

  return (
    <BlogLayout sidebar={sidebar}>
      <BlogSection
        title="客户案例"
        subtitle="真实交付项目，覆盖 AI 工具开发、本地化策略、电商运营"
        items={grouped.client}
      />
      <BlogSection
        title="自主项目"
        subtitle="架构设计探索，非客户委托"
        items={grouped.selfInitiated}
      />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPageForCases(props: Props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
