/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Kagema Njoroge',
  author: 'Kagema Njoroge',
  headerTitle: 'Kagema Njoroge',
  description:
    'The story, thoughts and opinions of Kagema Njoroge. A software engineer based in Nairobi, Kenya. I write about AI, software engineering, tech, and life.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://njoroge.tomorrow.co.ke',
  siteRepo: 'https://github.com/KagemaNjoroge/blog',
  siteLogo: '/static/images/favicon.png',
  socialBanner: '/static/images/new_logo.png',
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'reecejames934@gmail.com',
  github: 'https://github.com/kagemanjoroge',
  twitter: 'https://twitter.com/reecejames934',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/kagemanjoroge',
  locale: 'en-US',

  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-RK2KMLBNPE', // e.g. G-XXXXXXX
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}
module.exports = siteMetadata
