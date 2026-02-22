import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // General web crawlers — allow everything except internal Next.js routes
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/_next/', '/api/'],
            },
            // OpenAI (ChatGPT, SearchGPT) — explicitly welcome
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            // Anthropic (Claude) — explicitly welcome
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            // Perplexity AI — explicitly welcome for citation in answers
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            // Google AI (Gemini / Vertex AI training) — explicitly welcome
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
        ],
        sitemap: 'https://bondflorida.com/sitemap.xml',
    };
}
