<template>
  <Page
    :title="[
      { text: 'Kurzy', link: '/kurzy' },
      {
        text: course.title || '',
      },
    ]"
  >
    <div class="flex flex-col gap-4 pt-6 lg:flex-row">
      <Gallery
        v-if="course.images && course.images.length > 0"
        :images="course.images"
        :alt-text="`Obrázek kurzu ${course.title}`"
        variant="event"
      />
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-1">
          <h3 class="flex gap-4 text-3xl" v-if="course.schedule">
            <span class="text-primary">
              {{ week[course.schedule.day] }}
            </span>
            {{ dayTimeToString(course.schedule.start) }} -
            {{ dayTimeToString(course.schedule.end) }}
          </h3>
          <NuxtLink
            v-if="lektorId && lektorName"
            :to="`/lektor/${lektorId}`"
            class="text-2xl text-primary underline"
          >
            {{ lektorName }}
          </NuxtLink>
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

const mainStore = useMainStore();
const { schedule, lektori } = storeToRefs(mainStore);

const course = computed<ICourse>(() => {
  const course =
    schedule.value !== "error" ? schedule.value[courseID] : undefined;

  if (!course)
    return {
      id: courseID,
    };

  return course;
});

const lektorId = computed(() => {
  if (!course.value.lector) return null;

  if (typeof course.value.lector === "string") {
    return course.value.lector;
  } else if (
    Array.isArray(course.value.lector) &&
    course.value.lector.length > 0
  ) {
    return course.value.lector[0].id;
  }

  return null;
});

const lektorName = computed(() => {
  if (!lektorId.value || lektori.value === "error") return null;
  const lektor = lektori.value[lektorId.value];
  return lektor?.name || null;
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
