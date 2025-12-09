<template>
  <div
    v-if="eventsToShow.length || !loaded"
    class="grid grid-cols-1 gap-4 py-4 lg:grid-cols-2"
  >
    <Event
      v-if="!loaded"
      v-for="el in filtering?.limit || 6"
      :key="el"
      :skeleton="true"
    />

    <Event
      v-else-if="eventsToShow.length"
      v-for="event in eventsToShow"
      :key="event.id"
      :event="event"
    />
  </div>
  <template v-else>
    <div
      v-if="events === 'error'"
      class="flex w-full flex-col items-center gap-4 py-8"
    >
      <h3>Nastal problém během načítání akcí 😬</h3>
      <p>Zkus stránku načíst znova nebo ji zkontroluj později</p>
    </div>
    <div
      v-else-if="eventsToShow.length === 0"
      class="flex w-full flex-col items-center gap-4 py-8"
    >
      <p class="w-full py-8">
        {{
          filtering?.upcoming
            ? "Aktuálně nejsou žádné naplánované akce"
            : "Žádné akce k zobrazení"
        }}
      </p>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/store/main";

const props = defineProps<{
  filtering?: {
    upcoming?: boolean;
    type?: string;
    limit?: number;
    time?: {
      month?: number; // 0-11
      year?: number;
    };
  };
}>();

const emit = <
  {
    (e: "validYears", value: number[]): void;
  }
>defineEmits();

const mainStore = useMainStore();
const { events, loaded } = storeToRefs(mainStore);

const eventsToShow = computed<IEvent[]>(() => {
  if (!events.value || events.value === "error") return [];

  const filtering = props.filtering;

  let eventsArray = Object.values(events.value);

  const filterArray = eventsArray.filter((event) => {
    if (!filtering) return true;

    if (filtering.upcoming) {
      if (!event.date) return false;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (!(new Date(event.date) >= today)) return false;
    } else if (filtering.time) {
      const year = filtering.time?.year;
      const month = filtering.time?.month;

      if ((year !== undefined || month !== undefined) && !event.date)
        return false;
      if (event.date) {
        const eventDate = new Date(event.date);

        if (year !== undefined) {
          const eventYear = eventDate.getFullYear();
          if (eventYear !== year) return false;
        }

        if (month !== undefined) {
          const eventMonth = eventDate.getMonth();
          if (eventMonth !== month) return false;
        }
      }
    }

    if (filtering.type && event.type !== filtering.type) return false;

    return true;
  });

  const sortedArray = filterArray.sort((a, b) => {
    if (props.filtering.upcoming){
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    if (!a.date) return -1;
    if (!b.date) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const slicedArray = sortedArray.slice(
    0,
    props.filtering?.limit || sortedArray.length,
  );

  return slicedArray;
});

const getValidYears = () => {
  let eventsArray = Object.values(events.value);

  const validYears = eventsArray
    .map((event) => {
      if (!event.date) return null;
      return new Date(event.date).getFullYear();
    })
    .filter((year) => year !== null)
    .sort((a, b) => {
      return a - b;
    }) as number[];

  emit("validYears", Array.from(new Set(validYears)));
};

watch(events, getValidYears, { immediate: true });
</script>
