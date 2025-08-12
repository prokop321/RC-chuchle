<template>
  <nav
    class="left-0 right-0 top-0 z-50 flex flex-col items-center xl:px-4"
    :class="{
      sticky: !fixedNav,
      fixed: fixedNav,
    }"
  >
    <div
      class="flex w-full max-w-7xl justify-between gap-5 rounded-b-3xl bg-background px-5 shadow-xl"
    >
      <NuxtLink to="/" class="flex items-center gap-2 py-3 sm:gap-4 sm:py-4">
        <img src="/logo_icon.svg" class="h-12 sm:h-16" />

        <h3 class="leading-tight">Rodinné centrum Chuchle</h3>
      </NuxtLink>

      <div class="flex items-center xl:hidden">
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="flex size-14 flex-col items-center justify-center gap-2 rounded-lg bg-fill"
        >
          <div
            :class="{
              'rotate-45 transform': mobileMenuOpen,
              'translate-y-2': mobileMenuOpen,
            }"
            class="h-2 w-10 rounded bg-secondary transition"
          ></div>
          <div
            class="h-2 w-10 rounded bg-secondary transition"
            :class="{
              '-rotate-45 transform': mobileMenuOpen,
              '-translate-y-2': mobileMenuOpen,
            }"
          ></div>
        </button>
      </div>

      <ul
        class="header-font hidden flex-shrink-0 items-center gap-3 py-5 text-text xl:flex"
      >
        <li class="h-full" v-for="page in pages">
          <NuxtLink
            class="desktop-link relative flex h-full items-center rounded-xl bg-fill px-5 text-2xl transition hover:bg-primary hover:text-background"
            :to="page.to"
            :class="
              isCurrentPage(page.to) ? 'bg-secondary text-background' : ''
            "
          >
            <span class="relative">{{ page.text }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
  <div
    v-if="mobileMenuOpen"
    class="pointer-events-auto fixed z-30 flex size-full items-center justify-center bg-background px-4 py-20"
  >
    <ul class="header-font flex flex-col gap-2 rounded-3xl bg-background p-8">
      <li v-for="page in pages">
        <NuxtLink
          @click="
            () => {
              if (isCurrentPage(page.to)) {
                mobileMenuOpen = false;
              }
            }
          "
          class="mobile-link relative flex h-full items-center justify-center py-3 text-4xl"
          :to="page.to"
        >
          <span
            :data-current-route="isCurrentPage(page.to)"
            class="relative text-center"
            >{{ page.text }}</span
          >
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const fixedNav = computed(() => {
  return route.meta.fixedNav || false;
});

const mobileMenuOpen = ref(false);

const pages = [
  { text: "Domů", to: "/#uvod" },

  { text: "Akce", to: "/akce" },
  { text: "Kurzy", to: "/kurzy" },
  { text: "Lektoři", to: "/lektori" },
  { text: "O nás", to: "/o-nas" },
  { text: "Aktuality", to: "/aktuality" },
];

watch(route, () => {
  mobileMenuOpen.value = false;
});

const isCurrentPage = (page: string) => {
  const pagePath = page.split("?")[0].split("#")[0];
  return route.path === pagePath;
};
</script>
