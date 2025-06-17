<template>
  <Page
    v-if="event"
    :title="[
      { text: 'Akce', link: '/akce' },
      { text: event.title || 'Bez názvu', link: event.id },
    ]"
  >
    <div class="flex flex-col gap-4 pt-6 lg:flex-row">
      <div
        v-if="event.images && event.images.length > 0"
        @scroll="onScroll"
        ref="imageScroller"
        class="flex max-w-xl snap-x flex-row self-center overflow-x-auto whitespace-nowrap bg-fill lg:max-w-xl"
      >
        <div v-if="event.images.length > 1" class="absolute flex bg-background">
          <p class="px-4 py-2">
            {{ currentImageIndex + 1 }}/{{ event.images.length }}
          </p>
          <button
            :class="{
              'opacity-50': currentImageIndex <= 0,
              'pointer-events-none': currentImageIndex <= 0,
            }"
            class="flex items-center px-4 hover:bg-primary hover:text-background"
            @click="
              () => {
                if (currentImageIndex <= 0) return;

                if (imageScroller)
                  imageScroller.scrollTo({
                    left: (currentImageIndex - 1) * imageScroller.offsetWidth,
                    behavior: 'smooth',
                  });
              }
            "
          >
            <
          </button>
          <button
            class="flex items-center px-4 hover:bg-primary hover:text-background"
            :class="{
              'opacity-50': currentImageIndex >= event.images.length - 1,
              'pointer-events-none':
                currentImageIndex >= event.images.length - 1,
            }"
            @click="
              () => {
                if (!event) return;
                if (currentImageIndex >= (event.images || []).length - 1)
                  return;
                if (imageScroller)
                  if (imageScroller)
                    imageScroller.scrollTo({
                      left: (currentImageIndex + 1) * imageScroller.offsetWidth,
                      behavior: 'smooth',
                    });
              }
            "
          >
            >
          </button>
        </div>
        <div
          v-for="img in event.images"
          class="sticky-always flex w-full flex-none snap-center items-center justify-center"
        >
          <img
            class="snap-always object-contain"
            v-if="event.images"
            :src="imageURLCreator(img)"
          />
        </div>
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-1">
          <h3 class="text-2xl" v-if="event.date">
            {{ getDateSting(event.date) }}
          </h3>
          <h3 class="text-2xl">{{ event.location }}</h3>
        </div>

        <VueMarkdown
          v-if="event.description"
          :source="event.description"
          class="markdown-content text-justify"
        />
      </div>
    </div>
  </Page>
</template>

<script setup lang="ts">
import VueMarkdown from "vue-markdown-render";
import { useMainStore } from "~/store/main";

const mainStore = useMainStore();

const eventId = useRoute().params.id as string;
const imageWidth = ref(0);

const currentImageIndex = ref(0);
const imageScroller = ref<HTMLElement | null>(null);

const event = computed<IEvent | undefined>(() => {
  return mainStore.events[eventId];
});

const onScroll = (event: Event) => {
  const scrollLeft = (event.target as HTMLElement).scrollLeft;
  const width = (event.target as HTMLElement).offsetWidth;

  const newIndex = Math.round(scrollLeft / width);

  if (newIndex !== currentImageIndex.value) {
    currentImageIndex.value = newIndex;
  }
};
</script>
