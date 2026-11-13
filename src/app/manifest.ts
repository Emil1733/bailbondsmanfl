import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Bond Florida - Statewide Bail Bonds',
        short_name: 'Bond Florida',
        description: '24/7 bail bond assistance across Florida with clear next-step guidance.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a', // Slate 950
        theme_color: '#eab308', // Yellow 500
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
