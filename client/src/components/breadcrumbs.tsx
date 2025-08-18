import { Home, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

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
            <Link href={item.href}>
              <span className="hover:text-purple-600 transition-colors cursor-pointer">
                {item.label}
              </span>
            </Link>
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