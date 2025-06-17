<template>
  <div class="absolute top-0" id="uvod"></div>

  <section class="relative overflow-hidden px-4 pb-16 pt-48">
    <!-- Colorful geometric background pattern -->
    <img
      src="/patern.jpg"
      class="absolute inset-0 h-full w-full scale-105 object-cover opacity-80 blur-md"
    />

    <div
      class="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16"
    >
      <!-- Main heading -->
      <div class="relative">
        <!-- White background block -->
        <svg
          class="absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)] overflow-visible"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <filter
              id="paperTexture"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >              <feTurbulence baseFrequency="8 6" numOctaves="20" result="noise" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="0.5"
                result="displaced"
              />
              <feTurbulence baseFrequency="12 8" numOctaves="1" result="overlay" />
              <feComponentTransfer in="overlay" result="overlayMask">
                <feFuncA
                  type="discrete"
                  tableValues="0.92 0.96 0.98 1.0 0.88 0.94 0.97 1.0"
                />
              </feComponentTransfer>
              <feComposite in="displaced" in2="overlayMask" operator="in" />
            </filter>
          </defs>
          <path
            d="M 0 12 L 0 10 L 2 8 L 4 6 L 6 4 L 8 2 L 11 1 L 13 3 L 16 2 L 18 4 L 21 3 L 24 2 L 27 3 L 30 1 L 33 2 L 36 1 L 39 3 L 42 2 L 45 1 L 48 2 L 51 1 L 54 3 L 57 2 L 60 1 L 63 2 L 66 3 L 69 2 L 72 1 L 75 2 L 78 3 L 81 2 L 84 1 L 87 2 L 90 3 L 93 2 L 95 4 L 97 6 L 99 8 L 100 10 L 100 12 Q 100.3 30 99.7 50 Q 100.2 70 100 88 L 99 90 L 97 92 L 95 94 L 93 96 L 91 98 L 89 96 L 86 97 L 84 95 L 81 96 L 78 97 L 75 96 L 72 98 L 69 97 L 66 98 L 63 96 L 60 97 L 57 98 L 54 96 L 51 97 L 48 98 L 45 97 L 42 98 L 39 96 L 36 97 L 33 98 L 30 96 L 27 97 L 24 98 L 21 96 L 18 97 L 16 95 L 13 96 L 11 98 L 8 97 L 6 94 L 4 92 L 2 90 L 0 88 Q -0.2 70 0.3 50 Q -0.3 30 0 12 Z"
            fill="white"
            opacity="1.0"
            filter="url(#paperTexture)"
          />
        </svg>
        <h1
          class="relative z-10 text-center text-5xl font-bold text-text md:text-6xl"
        >
          Chuchleská komunita pro celou rodinu
        </h1>
        <svg
          class="relative z-10 h-6 w-full"
          viewBox="-15 -10 1030 44"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <filter
              id="pencilTexture"
              x="-30%"
              y="-100%"
              width="160%"
              height="300%"
            >
              <feTurbulence baseFrequency="7" numOctaves="4" result="noise" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="4"
                result="displaced"
              />
              <feTurbulence baseFrequency="3" numOctaves="1" result="overlay" />
              <feComponentTransfer in="overlay" result="overlayMask">
                <feFuncA
                  type="discrete"
                  tableValues="0.9 0.95 0.98 1.0 0.85 0.92 0.97 1.0"
                />
              </feComponentTransfer>
              <feComposite in="displaced" in2="overlayMask" operator="in" />
            </filter>
          </defs>

          <!-- Main thick line -->
          <path
            d="M 0 12 Q 50 8 100 14 T 200 10 Q 250 16 300 12 T 400 14 Q 450 9 500 13 T 600 11 Q 650 15 700 12 T 800 14 Q 850 10 900 13 T 1000 12"
            stroke="currentColor"
            stroke-width="12"
            fill="none"
            class="text-secondary"
            stroke-linecap="round"
            stroke-linejoin="round"
            filter="url(#pencilTexture)"
            opacity="1"
          />
        </svg>
      </div>

      <!-- Three blocks -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Kurzy block -->
        <div
          class="relative overflow-hidden rounded-2xl bg-background shadow-lg"
        >
          <div
            class="relative h-64 bg-gradient-to-br from-purple-300 to-pink-300"
          >
            <img
              src="/banner.webp"
              alt="Kurzy"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            ></div>
          </div>
          <div class="p-6">
            <h2 class="mb-2">Kurzy</h2>
            <p class="mb-5">
              Objevte naše různorodé sportovní kurzy pro všechny věkové
              kategorie a úrovně.
            </p>
            <Button color="primary" href="/rozvrh" class="w-full"
              >Zjistit více</Button
            >
          </div>
        </div>

        <!-- Akce block -->
        <div
          class="relative overflow-hidden rounded-2xl bg-background shadow-lg"
        >
          <div class="relative h-64 bg-gradient-to-br">
            <img
              src="/banner.webp"
              alt="Akce"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            ></div>
          </div>
          <div class="p-6">
            <h2 class="mb-2">Akce</h2>
            <p class="mb-5">
              Přidejte se k našim společenským akcím, turnajům a sportovním
              událostem.
            </p>
            <Button color="primary" :href="'/akce'" class="w-full"
              >Zjistit více</Button
            >
          </div>
        </div>

        <!-- Nejen pro seniory block -->
        <div
          class="relative overflow-hidden rounded-2xl bg-background shadow-lg"
        >
          <div
            class="relative h-64 bg-gradient-to-br from-gray-600 to-gray-800"
          >
            <img
              src="/banner.webp"
              alt="Nejen pro seniory"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            ></div>
          </div>
          <div class="p-6">
            <h2 class="mb-2">Nejen pro seniory</h2>
            <p class="mb-5">
              Specializované programy a aktivity přizpůsobené potřebám starších
              sportovců.
            </p>
            <Button color="primary" class="w-full">Zjistit více</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bg-shade {
  position: relative;
  * {
    z-index: 2;
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    background-color: black;
    opacity: 0.6;
    filter: blur(96px);
    top: -96px;
    left: -96px;
    right: -96px;
    bottom: -96px;
  }
}
</style>
