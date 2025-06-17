<template>
  <main class="flex justify-center px-4">
    <div class="w-full max-w-7xl pt-6">
      <div class="flex flex-col gap-2">
        <div
          class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div
            class="flex flex-col flex-wrap items-center gap-1 sm:flex-row sm:gap-6"
          >
            <h1
              :id="title[title.length - 1].text"
              class="color-shadow relative flex gap-4 pl-2 text-left text-text"
            >
              <NuxtLink
                :class="{ 'text-textTransparent': index !== title.length - 1 }"
                class="text-center hover:text-primary"
                v-for="(tit, index) in title"
                :to="tit.link || title[title.length - 1].text"
              >
                {{ tit.text + (index !== title.length - 1 ? "/" : "") }}
              </NuxtLink>
            </h1>
            <slot name="leftHeader" />
          </div>

          <slot name="rightHeader" />
        </div>
        <svg
          class="h-6 w-full"
          viewBox="-15 -10 1030 44"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <filter
              id="pencilTexture"
              x="-30%"
              y="-100%"
              width="160%"
              height="300%"
            >
              <feTurbulence baseFrequency="7" numOctaves="4" result="noise" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="4"
                result="displaced"
              />
              <feTurbulence baseFrequency="3" numOctaves="1" result="overlay" />
              <feComponentTransfer in="overlay" result="overlayMask">
                <feFuncA
                  type="discrete"
                  tableValues="0.9 0.95 0.98 1.0 0.85 0.92 0.97 1.0"
                />
              </feComponentTransfer>
              <feComposite in="displaced" in2="overlayMask" operator="in" />
            </filter>
          </defs>

          <!-- Main thick line -->
          <path
            d="M 0 12 Q 50 8 100 14 T 200 10 Q 250 16 300 12 T 400 14 Q 450 9 500 13 T 600 11 Q 650 15 700 12 T 800 14 Q 850 10 900 13 T 1000 12"
            stroke="currentColor"
            stroke-width="12"
            fill="none"
            class="text-secondary"
            stroke-linecap="round"
            stroke-linejoin="round"
            filter="url(#pencilTexture)"
            opacity="1"
          />
        </svg>
      </div>

      <slot />
    </div>
  </main>
  <slot name="noPadding" />
</template>

<script setup lang="ts">
const props = defineProps<{
  title: { text: string; link?: string }[];
}>();
</script>
