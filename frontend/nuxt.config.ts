export default defineNuxtConfig({
  compatibilityDate: '2026-05-31',
  modules: ['@nuxt/ui'],
  ui: { fonts: false },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },
  runtimeConfig: {
    rustApiBase: process.env.NUXT_RUST_API_BASE || process.env.RUST_API_URL || 'http://backend:8080',
    public: {
      appName: 'MLStudyNest'
    }
  },
  app: {
    head: {
      title: 'MLStudyNest · Maple Leaf Learning Platform',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,800&family=Newsreader:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'MLStudyNest helps students review biology with concise notes, flashcards, quizzes and community sharing.' },
        { name: 'theme-color', content: '#F7C5C7' }
      ]
    }
  }
})
