<template>
  <div v-if="schedule === 'error'" class="flex w-full justify-center px-4">
    <div class="flex w-full max-w-7xl flex-col items-center gap-4 py-8">
      <h3>Nastal problém během načítání rozvrhu 😬</h3>
      <p>Zkus stránku načíst znova nebo ji zkontroluj později</p>
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
</script>
