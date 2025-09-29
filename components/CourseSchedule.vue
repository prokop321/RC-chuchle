<template>
  <div v-if="schedule === 'error'" class="flex w-full justify-center px-4">
    <div class="flex w-full max-w-7xl flex-col items-center gap-4 py-8">
      <h3>Nastal problém během načítání rozvrhu 😬</h3>
      <p>Zkus stránku načíst znova nebo ji zkontroluj později</p>
    </div>
  </div>

  <div class="py-2" v-else-if="loaded">
    <div
      class="flex w-full flex-nowrap gap-6 overflow-y-auto"
      style="padding: 0 var(--scroll-padding)"
    >
      <div
        class="flex min-w-60 flex-col gap-4"
        v-for="daySchedule in Object.keys(
          columnsToShow.week,
        ) as unknown as number[]"
      >
        <h2 class="pt-1 text-center">{{ week[daySchedule] }}</h2>

        <Course
          v-for="course in columnsToShow.week[daySchedule]"
          :key="course.id"
          :course="course"
        />
      </div>
      <div
        v-if="columnsToShow.daleNabizime"
        class="flex min-w-80 flex-col gap-4"
      >
        <h2 class="pb-2 pt-5 text-center">Dále nabízíme</h2>

        <Course
          v-for="course in columnsToShow.daleNabizime"
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

const columnsToShow = computed(() => {
  const sch: {
    week: { [key: number]: ICourse[] };
    daleNabizime?: ICourse[];
  } = {
    week: {},
  };
  if (loaded.value && schedule.value !== "error") {
    for (const day of [0, 1, 2, 3, 4, 5, 6]) {
      sch.week[day] = Object.values(schedule.value).filter((c) => {
        if (!c.schedule) return false;
        if (c.mode === "daleNabizime") return false;
        return c.schedule.day === day;
      });
      if (sch.week[day].length === 0) delete sch.week[day];
    }
    sch.daleNabizime = Object.values(schedule.value).filter((c) => {
      if (c.mode === "daleNabizime") return true;
      return false;
    });
    if (sch.daleNabizime.length === 0) delete sch.daleNabizime;
  }
  return sch;
});
</script>
