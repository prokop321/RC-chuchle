<template>
  <Page :title="[{ link: '/akce', text: 'Naše akce' }]">
    <template v-slot:leftHeader>
      <div class="mt-5 flex flex-wrap items-end justify-center gap-3 sm:gap-6">
        <!-- Year Filter - only show when not upcoming -->
        <div class="flex flex-col" v-if="!filtering.upcoming">
          <label class="text-text-transparent mb-1 text-sm font-medium">
            Rok
          </label>
          <select
            v-model="filtering.time.year"
            class="focus:ring-primary/20 h-10 w-28 rounded-lg border border-gray-300 bg-white px-3 text-text shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2"
          >
            <option :value="undefined">Všechny</option>
            <option v-for="year in validYears" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>

        <!-- Month Filter - only show when not upcoming -->
        <div class="flex flex-col" v-if="!filtering.upcoming">
          <label class="text-text-transparent mb-1 text-sm font-medium">
            Měsíc
          </label>
          <select
            v-model="filtering.time.month"
            class="focus:ring-primary/20 h-10 w-32 rounded-lg border border-gray-300 bg-white px-3 text-text shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2"
          >
            <option :value="undefined">Všechny</option>
            <option
              v-for="(month, index) in months"
              :key="index"
              :value="index"
            >
              {{ month }}
            </option>
          </select>
        </div>

        <!-- Type Filter - always visible -->
        <div class="flex flex-col">
          <label class="text-text-transparent mb-1 text-sm font-medium">
            Typ akce
          </label>
          <select
            v-model="filtering.type"
            class="focus:ring-primary/20 h-10 w-32 rounded-lg border border-gray-300 bg-white px-3 text-text shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2"
          >
            <option :value="undefined">Všechny</option>
            <option value="senior">Pro seniory</option>
          </select>
        </div>

        <!-- Clear Filters Button -->
        <button
          @click="clearFilters"
          class="text-text-transparent flex h-10 items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium transition-all duration-200 hover:bg-gray-50 hover:text-primary"
          v-if="hasActiveFilters"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          Vymazat
        </button>
      </div>
    </template>
    <template v-slot:rightHeader>
      <div class="flex justify-center">
        <div class="flex items-center rounded-lg bg-gray-100 p-1">
          <button
            class="rounded-md px-4 py-2 text-sm font-medium transition-all duration-200"
            :class="{
              'bg-white text-primary shadow-sm': filtering.upcoming,
              'text-text-transparent hover:text-text': !filtering.upcoming,
            }"
            @click="filtering.upcoming = true"
          >
            Nadcházející
          </button>
          <button
            class="rounded-md px-4 py-2 text-sm font-medium transition-all duration-200"
            :class="{
              'bg-white text-primary shadow-sm': !filtering.upcoming,
              'text-text-transparent hover:text-text': filtering.upcoming,
            }"
            @click="filtering.upcoming = false"
          >
            Kronika
          </button>
        </div>
      </div>
    </template>
    <EventGrid @validYears="validYears = $event" :filtering="filtering" />
  </Page>
</template>

<script setup lang="ts">
const validYears = ref<number[]>([]);

const route = useRoute();

const filtering = reactive<{
  upcoming: boolean;
  type?: "senior" | "basic";
  time: {
    year?: number;
    month?: number;
  };
}>({
  upcoming: route.query.upcoming === "false" ? false : true,
  type: route.query.type as "senior" | "basic" | undefined,
  time: {
    year: parseInt(route.query.year as string) || undefined,
    month: parseInt(route.query.month as string) || undefined,
  },
});

watch(filtering, (val) => {
  useRouter().replace({
    query: {
      type: val.type,
      upcoming: val.upcoming ? "true" : "false",
      year: val.time.year ? val.time.year.toString() : undefined,
      month: val.time.month ? val.time.month.toString() : undefined,
    },
  });
});

const months = [
  "Leden",
  "Únor",
  "Březen",
  "Duben",
  "Květen",
  "Červen",
  "Červenec",
  "Srpen",
  "Září",
  "Říjen",
  "Listopad",
  "Prosinec",
];

// Clear all filters function
const clearFilters = () => {
  filtering.time.year = undefined;
  filtering.time.month = undefined;
  filtering.type = undefined;
};

// Check if any filters are active
const hasActiveFilters = computed(() => {
  return (
    filtering.time.year !== undefined ||
    filtering.time.month !== undefined ||
    filtering.type !== undefined
  );
});
</script>
