<template>
  <div v-if="schedule === 'error'" class="flex w-full justify-center px-4">
    <div class="flex w-full max-w-7xl flex-col items-center gap-4 py-8">
      <h3>Nastal problém během načítání rozvrhu 😬</h3>
      <p>Zkus stránku načíst znova nebo ji zkontroluj později</p>
    </div>
  </div>

  <!-- Loading skeleton -->
  <div v-else-if="!loaded" class="py-2">
    <div
      class="grid w-full gap-6 overflow-y-auto"
      style="
        padding: 0 var(--scroll-padding);
        grid-template-columns: repeat(7, 260px);
      "
    >
      <div
        class="flex flex-col gap-4"
        v-for="day in 7"
        :key="`skeleton-day-${day}`"
      >
        <h2 class="pb-2 pt-5 text-center">{{ week[day - 1] }}</h2>

        <!-- Skeleton course cards -->
        <div
          v-for="n in getSkeletonCount(day)"
          :key="`skeleton-${day}-${n}`"
          class="flex max-w-96 animate-pulse flex-col gap-6 rounded-3xl border-2 border-gray-200 px-6 py-8 shadow-sm"
        >
          <!-- Skeleton image -->
          <div class="h-32 w-full rounded-lg bg-gray-200"></div>

          <!-- Skeleton content -->
          <div class="flex flex-col gap-1">
            <!-- Skeleton title -->
            <div class="h-7 w-3/4 rounded bg-gray-200"></div>
            <div class="mt-2 space-y-2">
              <!-- Skeleton time -->
              <div class="h-4 w-1/2 rounded bg-gray-200"></div>
              <!-- Skeleton lector -->
              <div class="h-4 w-2/3 rounded bg-gray-200"></div>
            </div>
          </div>

          <!-- Skeleton "Zjistit více" -->
          <div class="h-5 w-1/3 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="py-2" v-else-if="loaded">
    <div
      class="grid w-full gap-6 overflow-y-auto"
      style="
        padding: 0 var(--scroll-padding);
        grid-template-columns: repeat(7, 260px);
      "
    >
      <div class="flex flex-col gap-4" v-for="day in 7">
        <h2 class="pb-2 pt-5 text-center">{{ week[day - 1] }}</h2>

        <Course
          v-for="course in Object.values(schedule)
            .filter((c) => {
              if (!c.schedule) return false;
              return c.schedule.day === day - 1;
            })
            .sort((a, b) => {
              if (!a.schedule || !b.schedule) return 0;
              return a.schedule.start - b.schedule.start;
            })"
          :key="course.id"
          :course="course"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/store/main";

const mainStore = useMainStore();

const { schedule, loaded } = storeToRefs(mainStore);

const week = [
  "Pondělí",
  "Úterý",
  "Středa",
  "Čtvrtek",
  "Pátek",
  "Sobota",
  "Neděle",
];

// Function to determine number of skeleton cards per day
const getSkeletonCount = (day: number) => {
  // Return different numbers for variety - typically 1-3 cards per day
  const counts = [2, 1, 3, 2, 1, 2, 1]; // Monday to Sunday
  return counts[day - 1];
};
</script>
