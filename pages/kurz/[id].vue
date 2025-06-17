<template>
  <Page
    :title="[
      { text: 'Kurzy', link: '/rozvrh' },
      {
        text: course.title || '',
      },
    ]"
  >
    <div class="flex flex-col gap-4 pt-6 lg:flex-row">
      <div
        v-if="course.images && course.images.length > 0"
        @scroll="onScroll"
        ref="imageScroller"
        class="flex max-w-xl snap-x flex-row self-center overflow-x-scroll whitespace-nowrap bg-fill lg:max-w-xl"
      >
        <div
          v-if="course.images.length > 1"
          class="absolute flex bg-background"
        >
          <p class="px-4 py-2">
            {{ currentImageIndex + 1 }}/{{ course.images.length }}
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
              'opacity-50': currentImageIndex >= course.images.length - 1,
              'pointer-events-none':
                currentImageIndex >= course.images.length - 1,
            }"
            @click="
              () => {
                if (!course) return;
                if (currentImageIndex >= (course.images || []).length - 1)
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
          v-for="img in course.images"
          class="sticky-always flex w-full flex-none snap-center items-center justify-center"
        >
          <img
            class="snap-always object-contain"
            v-if="course.images"
            :src="imageURLCreator(img)"
          />
        </div>
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-1">
          <h3 class="flex gap-4 text-3xl" v-if="course.schedule">
            <span class="text-primary">
              {{ week[course.schedule.day] }}
            </span>
            {{ dayTimeToString(course.schedule.start) }} -
            {{ dayTimeToString(course.schedule.end) }}
          </h3>
          <h3 class="text-2xl" v-if="course.lector">{{ course.lector }}</h3>
        </div>

        <VueMarkdown
          v-if="course.description"
          :source="course.description"
          class="markdown-content text-justify"
        />
      </div>
    </div>
  </Page>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/store/main";

const courseID = useRoute().params.id as string;

const currentImageIndex = ref(0);
const imageScroller = ref<HTMLElement | null>(null);

const onScroll = (event: Event) => {
  const scrollLeft = (event.target as HTMLElement).scrollLeft;
  const width = (event.target as HTMLElement).offsetWidth;

  const newIndex = Math.round(scrollLeft / width);

  if (newIndex !== currentImageIndex.value) {
    currentImageIndex.value = newIndex;
  }
};

const mainStore = useMainStore();
const { schedule } = storeToRefs(mainStore);

const course = computed<ICourse>(() => {
  const course = schedule.value[courseID];

  if (!course)
    return {
      id: courseID,
    };

  return course;
});

const week = [
  "Pondělí",
  "Úterý",
  "Středa",
  "Čtvrtek",
  "Pátek",
  "Sobota",
  "Neděle",
];
</script>
