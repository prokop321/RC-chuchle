<template>
  <Page :title="[{ text: 'Členství oddílu všestranosti', link: '/clenstvi' }]">
    <div class="flex flex-col gap-10 pt-12">
      <div class="flex flex-col gap-1 leading-normal">
        <p class="leading-relaxed">
          Být členem TJ Sokol Chuchle znamená stát se součástí komunity s
          dlouhou tradicí, která podporuje zdravý životní styl, pohyb a
          přátelské vztahy napříč generacemi. Členství v oddílu všestrannosti
          nabízí možnost účastnit se pravidelných cvičení, sportovních akcí a
          dalších společenských aktivit. Každý člen přispívá k udržení a rozvoji
          naší organizace a podílí se na zachování sokolských hodnot - síly,
          jednoty a vzájemné podpory.
        </p>
        <p class="leading-relaxed">
          Platba se skládá ze dvou částí: oddílové příspěvky a členské
          příspěvky.
        </p>
        <p class="italic leading-relaxed">
          Výbor TJ Sokol Chuchle schválil dne 3. 9. 2024 nové příspěvky pro
          cvičební rok září 2024 - srpen 2025.
        </p>
      </div>
      <div class="flex flex-col gap-6 pb-5">
        <h2>Roční příspěvky - Oddíl všestrannosti</h2>

        <div
          class="grid max-w-xl gap-1 bg-textTransparent p-1"
          style="grid-template-columns: minmax(0, 3fr) minmax(0, 2fr)"
        >
          <div class="col-span-full p-4">
            <h2 class="text-background">září 2024 - srpen 2025</h2>
          </div>

          <div class="flex items-center bg-background p-4">
            <h4 class="flex items-end gap-2 text-2xl">
              Děti a mládež
              <span class="text-lg text-textTransparent">0 - 18 let</span>
            </h4>
          </div>
          <div class="flex items-center bg-background p-4 text-xl">
            <p>1 500 Kč</p>
          </div>
          <div class="flex gap-2 bg-background p-4">
            <h4 class="flex items-end gap-2 text-2xl">
              Dospělí
              <span class="text-lg text-textTransparent">19 - 64 let</span>
            </h4>
          </div>
          <div class="flex items-center bg-background p-4 text-xl">
            <p>2 000 Kč</p>
          </div>
          <div class="flex items-center bg-background p-4">
            <h4 class="flex items-end gap-2 text-2xl">
              Senioři
              <span class="text-lg text-textTransparent">65+ let</span>
            </h4>
          </div>
          <div class="flex items-center bg-background p-4 text-xl">
            <p>1 500 Kč</p>
          </div>
          <div class="flex items-center bg-background p-4">
            <h4 class="flex items-end gap-2 text-2xl">
              Oddíl věrné gardy
              <span class="text-lg text-textTransparent">Necničící</span>
            </h4>
          </div>
          <div class="flex items-center bg-background p-4 text-xl">
            <p>800 Kč</p>
          </div>
          <div class="flex items-center bg-background p-4">
            <h4 class="flex items-end gap-2 text-2xl">
              Zájemci
              <span class="text-lg text-textTransparent">Nečleni</span>
            </h4>
          </div>
          <div class="flex items-center bg-background p-4 text-xl">
            <p>200 Kč za hodinu</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6 pb-5">
        <h2>Roční členské příspěvky - T.J. Sokol</h2>

        <div
          class="grid max-w-xl gap-1 bg-textTransparent p-1"
          style="grid-template-columns: minmax(0, 3fr) minmax(0, 2fr)"
        >
          <div class="col-span-full p-4">
            <h2 class="text-background">2025</h2>
          </div>

          <div class="flex items-center bg-background p-4">
            <h4 class="flex items-end gap-2 text-2xl">
              Děti a mládež
              <span class="text-lg text-textTransparent">0 - 18 let</span>
            </h4>
          </div>
          <div class="flex items-center bg-background p-4 text-xl">
            <p>300 Kč</p>
          </div>
          <div class="flex gap-2 bg-background p-4">
            <h4 class="flex items-end gap-2 text-2xl">
              Dospělí
              <span class="text-lg text-textTransparent">19 - 64 let</span>
            </h4>
          </div>
          <div class="flex items-center bg-background p-4 text-xl">
            <p>600 Kč</p>
          </div>
          <div class="flex items-center bg-background p-4">
            <h4 class="flex items-end gap-2 text-2xl">
              Senioři
              <span class="text-lg text-textTransparent">65+ let</span>
            </h4>
          </div>
          <div class="flex items-center bg-background p-4 text-xl">
            <p>300 Kč</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 leading-snug">
        <h3>Jak se příspěvky platí</h3>
        <div class="flex flex-col gap-2">
          <p class="leading-relaxed">
            Oddílové a členské příspěvky uhraďte během cvičebních hodin nebo
            raději na účet:
          </p>
          <div class="flex flex-col">
            <p class="leading-relaxed">
              Číslo účtu: <span class="font-bold">214897765/0300</span>
            </p>
            <p class="leading-relaxed">
              Zpráva pro příjemce:
              <span class="font-bold">Jméno a příjmení cvičence</span>
            </p>
          </div>
          <p class="leading-relaxed">Prosíme o úhradu v září a říjnu 2024.</p>
        </div>
      </div>
    </div>
  </Page>
</template>
