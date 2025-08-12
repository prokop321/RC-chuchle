<template>
  <div
    v-if="normalizedImages && normalizedImages.length > 0"
    @scroll="onScroll"
    ref="imageScroller"
    class="flex max-w-xl snap-x flex-row self-center rounded-xl bg-fill lg:max-w-xl"
    :class="{
      'overflow-x-scroll': normalizedImages.length > 1,
      'overflow-x-hidden': normalizedImages.length <= 1,
    }"
  >
    <div
      v-if="normalizedImages.length > 1"
      class="absolute z-10 flex rounded-xl bg-background shadow-lg"
    >
      <p class="px-4 py-3 text-lg font-medium">
        {{ currentImageIndex + 1 }}/{{ normalizedImages.length }}
      </p>
      <button
        :class="{
          'opacity-50': currentImageIndex <= 0,
          'pointer-events-none': currentImageIndex <= 0,
        }"
        class="flex items-center px-4 py-3 text-lg transition hover:bg-primary hover:text-background"
        @click="scrollToPrevious"
      >
        <
      </button>
      <button
        class="flex items-center px-4 py-3 text-lg transition hover:bg-primary hover:text-background"
        :class="{
          'opacity-50': currentImageIndex >= normalizedImages.length - 1,
          'pointer-events-none':
            currentImageIndex >= normalizedImages.length - 1,
        }"
        @click="scrollToNext"
      >
        >
      </button>
    </div>

    <!-- For events with different structure -->
    <div
      v-if="variant === 'event'"
      v-for="(img, index) in normalizedImages"
      :key="`event-${index}`"
      class="sticky-always flex w-full flex-none cursor-pointer snap-center items-center justify-center"
      @click="openFullscreen(index)"
    >
      <img
        class="snap-always rounded-xl object-contain"
        :src="imageURLCreator(img)"
        :alt="altText || `Image ${index + 1}`"
      />
    </div>

    <!-- For courses and lectors with standard structure -->
    <img
      v-else
      v-for="(img, index) in normalizedImages"
      :key="`default-${index}`"
      :src="imageURLCreator(img)"
      :alt="altText || `Image ${index + 1}`"
      class="h-96 w-full flex-shrink-0 cursor-pointer snap-start rounded-xl object-cover"
      @click="openFullscreen(index)"
    />
  </div>

  <!-- Fullscreen Modal -->
  <div
    v-if="fullscreenOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
    @click="closeFullscreen"
    @keydown.escape="closeFullscreen"
  >
    <!-- Close button -->
    <button
      class="z-60 hover:[>color:background] absolute right-6 top-6 flex size-14 items-center justify-center rounded-xl bg-background transition hover:bg-fill"
      @click="closeFullscreen"
    >
      <Icon name="fe:close" class="h-6 w-6 text-secondary" />
    </button>

    <!-- Navigation controls -->
    <div
      class="z-60 absolute left-6 top-6 flex rounded-xl bg-background shadow-xl"
      v-if="normalizedImages.length > 1"
    >
      <p class="px-4 py-3 text-lg font-medium">
        {{ fullscreenIndex + 1 }}/{{ normalizedImages.length }}
      </p>
      <button
        :class="{
          'opacity-50': fullscreenIndex <= 0,
          'pointer-events-none': fullscreenIndex <= 0,
        }"
        class="flex items-center px-4 py-3 text-lg transition hover:bg-primary hover:text-background"
        @click.stop="previousFullscreen"
      >
        <Icon name="fe:arrow-left" class="h-6 w-6 text-secondary" />
      </button>
      <button
        class="flex items-center px-4 py-3 text-lg transition hover:bg-primary hover:text-background"
        :class="{
          'opacity-50': fullscreenIndex >= normalizedImages.length - 1,
          'pointer-events-none': fullscreenIndex >= normalizedImages.length - 1,
        }"
        @click.stop="nextFullscreen"
      >
        <Icon name="fe:arrow-right" class="h-6 w-6 text-secondary" />
      </button>
    </div>

    <!-- Fullscreen image -->
    <img
      :src="imageURLCreator(normalizedImages[fullscreenIndex])"
      :alt="altText || `Image ${fullscreenIndex + 1}`"
      class="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain shadow-2xl"
      @click.stop
    />

    <!-- Navigation arrows -->
    <button
      v-if="normalizedImages.length > 1 && fullscreenIndex > 0"
      class="z-60 absolute left-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-xl bg-background text-2xl font-bold transition hover:bg-fill"
      @click.stop="previousFullscreen"
    >
      <
    </button>
    <button
      v-if="
        normalizedImages.length > 1 &&
        fullscreenIndex < normalizedImages.length - 1
      "
      class="z-60 absolute right-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-xl bg-background text-2xl font-bold transition hover:bg-fill"
      @click.stop="nextFullscreen"
    >
      >
    </button>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "#components";

interface Props {
  images: string[];
  altText?: string;
  variant?: "default" | "event";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
});

const normalizedImages = computed(() => {
  return props.images || [];
});

const currentImageIndex = ref(0);
const imageScroller = ref<HTMLElement | null>(null);

// Fullscreen state
const fullscreenOpen = ref(false);
const fullscreenIndex = ref(0);

const onScroll = (event: Event) => {
  const scrollLeft = (event.target as HTMLElement).scrollLeft;
  const width = (event.target as HTMLElement).offsetWidth;

  const newIndex = Math.round(scrollLeft / width);

  if (newIndex !== currentImageIndex.value) {
    currentImageIndex.value = newIndex;
  }
};

const scrollToPrevious = () => {
  if (currentImageIndex.value <= 0) return;

  if (imageScroller.value) {
    imageScroller.value.scrollTo({
      left: (currentImageIndex.value - 1) * imageScroller.value.offsetWidth,
      behavior: "smooth",
    });
  }
};

const scrollToNext = () => {
  if (currentImageIndex.value >= normalizedImages.value.length - 1) return;

  if (imageScroller.value) {
    imageScroller.value.scrollTo({
      left: (currentImageIndex.value + 1) * imageScroller.value.offsetWidth,
      behavior: "smooth",
    });
  }
};

// Fullscreen functions
const openFullscreen = (index: number) => {
  fullscreenIndex.value = index;
  fullscreenOpen.value = true;
  document.body.style.overflow = "hidden"; // Prevent body scroll
};

const closeFullscreen = () => {
  fullscreenOpen.value = false;
  document.body.style.overflow = ""; // Restore body scroll
};

const previousFullscreen = () => {
  if (fullscreenIndex.value > 0) {
    fullscreenIndex.value--;
  }
};

const nextFullscreen = () => {
  if (fullscreenIndex.value < normalizedImages.value.length - 1) {
    fullscreenIndex.value++;
  }
};

// Handle keyboard events
onMounted(() => {
  const handleKeydown = (event: KeyboardEvent) => {
    if (!fullscreenOpen.value) return;

    switch (event.key) {
      case "Escape":
        closeFullscreen();
        break;
      case "ArrowLeft":
        previousFullscreen();
        break;
      case "ArrowRight":
        nextFullscreen();
        break;
    }
  };

  document.addEventListener("keydown", handleKeydown);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown);
  });
});
</script>
