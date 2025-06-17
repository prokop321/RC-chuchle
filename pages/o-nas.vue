<template>
  <Page :title="[{ text: 'O nás', link: '/o-nas' }]">
    <div class="flex flex-col gap-8 pt-12">
      <div class="flex flex-col items-center gap-8 md:flex-row">
        <p class="text-center text-lg">
          Naše tělocvičná jednota Sokol Chuchle má za sebou více než 110 let
          historie. Přestože během okupace byly ztraceny záznamy o činnosti za
          první republiky, sokolové se vždy drželi ideálů zakladatelů – Tyrše a
          Fügnera. První veřejné cvičení proběhlo v roce 1909 a vlastní
          sokolovnu jsme otevřeli v roce 1922 díky rekonstrukci domu darovaného
          Josefem Czákem.
        </p>

        <img src="/banner.webp" alt="Sokol Chuchle" class="max-w-xl" />
      </div>
      <div class="flex flex-col items-center gap-8 md:flex-row-reverse">
        <img src="/banner.webp" alt="Sokol Chuchle" class="max-w-xl" />
        <p class="text-center text-lg">
          Během posledních let jsme výrazně rozšířili činnost. Kromě
          pravidelných cvičení pro všechny věkové kategorie pořádáme různé
          sportovní turnaje a akce pro děti i dospělé – například drakiády,
          pálení čarodějnic nebo netradiční olympiády. Aktivně se podílíme na
          komunitních akcích jako Dětský den či divadelní představení.
        </p>
      </div>
      <div class="flex flex-col items-center gap-8 md:flex-row">
        <p class="text-center text-lg">
          Naše sokolovna prošla několika rekonstrukcemi – zateplení, obnova
          podlah a vybavení prostor. V roce 2015 jsme díky sponzorům pořídili
          nový plynový kotel a dokončili úpravy pro větší akce.
        </p>

        <img src="/banner.webp" alt="Sokol Chuchle" class="max-w-xl" />
      </div>
    </div>
  </Page>
</template>
