<template>
  <section class="flex justify-center px-4 py-16">
    <div class="flex w-full max-w-7xl flex-col items-start gap-4">
      <h2>Nadcházející akce</h2>

      <div class="flex w-full flex-col items-start">
        <div class="flex w-full flex-col">
          <EventGrid :filtering="{ upcoming: true, limit: 2 }" />
        </div>
        <Button :href="'/akce'">Všechny akce</Button>
      </div>
    </div>
  </section>
</template>
