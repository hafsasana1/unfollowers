import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Home size={16} className="text-purple-600" />
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight size={14} className="text-gray-400" />
          {item.href && !item.current ? (
            <a 
              href={item.href} 
              className="hover:text-purple-600 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className={item.current ? 'text-purple-600 font-semibold' : ''}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}