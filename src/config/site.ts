export const siteConfig ={
    title: 'liquity',
    shortDesc: 'Liquity',
    description: 'Liquity',
    url: process.env.NODE_ENV === 'production' ? 'https://liquity.com': 'http://localhost:3000'
}

export type SiteConfig = typeof siteConfig;