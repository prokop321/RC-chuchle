<template>
  <Page :title="[{ link: '/akce', text: 'Naše akce' }]">
    <template v-slot:leftHeader>
      <div class="flex items-center gap-4" v-if="!filtering.upcoming">
        <select
          v-model="filtering.time.year"
          class="mt-2 h-8 w-24 rounded-md border border-text bg-background text-text"
        >
          <option v-for="year in validYears" :key="year" :value="year">
            {{ year }}
          </option>
          <option :value="undefined">Všechny</option>
        </select>
        <select
          v-model="filtering.time.month"
          class="mt-2 h-8 w-24 rounded-md border border-text bg-background text-text"
        >
          <option v-for="(month, index) in months" :key="index" :value="index">
            {{ month }}
          </option>
          <option :value="undefined">Všechny</option>
        </select>
      </div>
    </template>
    <template v-slot:rightHeader>
      <div class="flex items-center gap-2">
        <button
          class="hover:text-primary"
          :class="{
            'text-textTransparent': !filtering.upcoming,
          }"
          @click="
            () => {
              filtering.upcoming = true;
            }
          "
        >
          <h4 class="text-lg">Nadcházející</h4>
        </button>
        <h4 class="text-lg opacity-40">/</h4>
        <button
          class="hover:text-primary"
          :class="{
            'text-textTransparent': filtering.upcoming,
          }"
          @click="
            () => {
              filtering.upcoming = false;
            }
          "
        >
          <h4 class="text-lg">Kronika</h4>
        </button>
      </div>
    </template>
    <EventGrid
      @validYears="validYears = $event"
      :filtering="filtering.upcoming ? { upcoming: true } : filtering"
    />
  </Page>
</template>

<script setup lang="ts">
const validYears = ref<number[]>([]);

const route = useRoute();

const filtering = reactive<{
  upcoming: boolean;
  time: {
    year?: number;
    month?: number;
  };
}>({
  upcoming: route.query.upcoming === "false" ? false : true,
  time: {
    year: parseInt(route.query.year as string) || undefined,
    month: parseInt(route.query.month as string) || undefined,
  },
});

watch(filtering, (val) => {
  useRouter().replace({
    query: {
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
</script>
