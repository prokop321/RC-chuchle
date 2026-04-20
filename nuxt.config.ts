// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  nitro: {
    preset: "cloudflare-pages-static",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "cs",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Rodinné centrum Chuchle - Připravujeme komunitní akce a programy pro Chuchelské rodiny.",
        },
        {
          name: "keywords",
          content:
            "Rodinné centrum Chuchle, Velká Chuchle, Rodinné centrum Praha 5, Chuchle, Komunitní centrum, akce, program pro důchodce, kurzy, Yoga, pro rodniny",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          sizes: "32x32",
          href: "/favicon_32.ico",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          sizes: "64x64",
          href: "/favicon_64.ico",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=LXGW+Marker+Gothic&display=swap",
        },
      ],
      title: "Rodinné centrum Chuchle",
    },
  },

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/icon"],

  imports: {
    dirs: ["store/**"],
  },

  css: ["assets/style/main.scss"],

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
