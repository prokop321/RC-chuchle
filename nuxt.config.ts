// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

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
            "TJ Sokol - Velká Chuchle. Zde najdete všechny informace o naší jednotě, oddílech a akcích. Přidej se k nám a najdi cestu k pohybu, který tě bude bavit.",
        },
        {
          name: "keywords",
          content:
            "TJ Sokol, Velká Chuchle, TJ Sokol velká chuchle, Chuchle, sport, pohyb, oddíly, kroužky, Masopust chuchle, tenis chuchle, oddíl, oddíl všestrannosti, věrná garda, sokolovna",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          sizes: "32x32",
          href: "/favicon-32.ico",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          sizes: "64x64",
          href: "/favicon-64.ico",
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
      title: "T. J. Sokol Velká Chuchle",
    },
  },

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

  imports: {
    dirs: ["store/**"],
  },

  css: ["assets/style/main.scss"],

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
