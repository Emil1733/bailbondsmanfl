import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    // Generate BreadcrumbList Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 2, // Position 1 is implicit Home
            "name": item.label,
            "item": `https://bondflorida.com${item.href}`
        }))
    };

    // Prepend Home to display items
    const displayItems = [
        { label: 'Home', href: '/' },
        ...items
    ];

    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ol className="flex items-center space-x-2 text-sm text-slate-500">
                {displayItems.map((item, index) => {
                    const isLast = index === displayItems.length - 1;

                    return (
                        <li key={item.href} className="flex items-center">
                            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />}

                            {index === 0 ? (
                                <Link href={item.href} className="hover:text-yellow-500 transition-colors flex items-center gap-1">
                                    <Home className="w-4 h-4" />
                                    <span className="sr-only">Home</span>
                                </Link>
                            ) : isLast ? (
                                <span className="font-bold text-yellow-500" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link href={item.href} className="hover:text-yellow-500 transition-colors">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
