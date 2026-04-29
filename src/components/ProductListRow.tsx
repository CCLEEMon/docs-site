import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

interface ProductListRowProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  cta: string;
  ctaLink: string;
  nameId?: string;
  descriptionId?: string;
  ctaId?: string;
  animationDelay?: string;
}

export default function ProductListRow({
  icon,
  name,
  description,
  cta,
  ctaLink,
  nameId,
  descriptionId,
  ctaId,
  animationDelay = '0s',
}: ProductListRowProps): React.ReactElement {
  return (
    <Link
      to={ctaLink}
      className="animate-enter group flex items-center gap-5 p-5 rounded-xl
        border-l-4 border-transparent
        bg-gray-50 dark:bg-[#181824]
        hover:bg-white dark:hover:bg-[#1e1e2a]
        hover:border-l-purple-500
        hover:shadow-lg hover:shadow-purple-500/20
        transition-all duration-300 scroll-mt-20"
      style={{ animationDelay }}
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-purple-500/40 group-hover:scale-105 transition-all duration-300">
        {icon}
      </div>

      {/* Name + Description */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
          {nameId ? <Translate id={nameId}>{name}</Translate> : name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed truncate">
          {descriptionId ? <Translate id={descriptionId}>{description}</Translate> : description}
        </p>
      </div>

      {/* CTA */}
      <div className="flex-shrink-0 text-purple-700 dark:text-purple-400 font-semibold text-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Translate id={ctaId}>{cta}</Translate>
        <span className="text-purple-500">→</span>
      </div>
    </Link>
  );
}
