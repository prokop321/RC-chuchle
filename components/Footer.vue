<template>
  <footer class="bottom-0 mt-24 flex w-full justify-center bg-fill px-4">
    <div
      class="flex w-full max-w-7xl flex-wrap items-start justify-between gap-24 py-8"
    >
      <NuxtLink to="/#uvod" class="flex items-center gap-3 py-4">
        <img src="/logo.svg" class="size-16" />
        <h2 v-if="mode === 'tenis'">T. J. Sokol Chuchle - Tenis</h2>
        <h2 v-else>T. J. Sokol Chuchle</h2>
      </NuxtLink>
      <div>
        <ul class="flex flex-col gap-1">
          <li v-for="page in pages[mode]">
            <NuxtLink class="text-lg text-primary underline" :to="page.to">
              {{ page.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-6">
        <h3>Kontakt</h3>
        <div class="flex flex-col gap-2">
          <div>
            <h4 class="text-lg">Martina Schonbauerova</h4>
            <p>Náčelnice T. J.</p>
          </div>
          <div class="flex flex-col">
            <NuxtLink
              class="text-primary underline"
              to="mailto:chuchle@sokol.eu"
            >
              chuchle@sokol.eu
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
defineProps<{
  mode: "vsestranost" | "tenis";
}>();

const pages = {
  vsestranost: [
    { text: "Domů", to: "/#uvod" },
    { text: "Akce", to: "/akce" },
    { text: "Rozvrh", to: "/rozvrh" },
    { text: "Členství", to: "/clenstvi" },
    { text: "O nás", to: "/o-nas" },
  ],
  tenis: [
    { text: "Domů", to: "/tenis/#uvod" },
    { text: "O nás", to: "/tenis/o-nas" },
    { text: "Členství", to: "/tenis/clenstvi" },
  ],
};
</script>
