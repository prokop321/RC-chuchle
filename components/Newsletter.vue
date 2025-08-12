<template>
  <form
    @submit.prevent="onSubmit"
    class="flex flex-col items-center md:items-end"
  >
    <div class="flex w-full max-w-2xl flex-col gap-8">
      <h2 class="w-full text-center md:text-right">
        Zůstaň v obraze s<br />našimi novinkami
      </h2>

      <div class="flex w-full flex-col items-center gap-4 md:items-end">
        <p class="text-center text-lg md:text-right">
          {{
            !mailing
              ? "Zadej svůj email a my ti budeme posílat novinky o akcích a dění v Chuchli."
              : "Jste přihlášeni k odběru novinek. Na mail vám budeme posílat všechny důležité novinky."
          }}
        </p>
        <div
          class="flex w-full max-w-md flex-col justify-end gap-4 md:flex-row md:items-center"
        >
          <h4 class="font-h text-xl font-bold italic text-primary">
            Newsletter bude zprovozněn brzy.
          </h4>
          <!--
          <div v-if="!mailing">
            <input
              type="email"
              autocomplete="email"
              placeholder="Váš email"
              v-model="emil"
              class="header-font h-14 w-full px-4 focus:outline-none"
            />
            <svg
              class="-mt-3 h-6 w-full"
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
                  <feTurbulence
                    baseFrequency="7"
                    numOctaves="4"
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="4"
                    result="displaced"
                  />
                  <feTurbulence
                    baseFrequency="3"
                    numOctaves="1"
                    result="overlay"
                  />
                  <feComponentTransfer in="overlay" result="overlayMask">
                    <feFuncA
                      type="discrete"
                      tableValues="0.9 0.95 0.98 1.0 0.85 0.92 0.97 1.0"
                    />
                  </feComponentTransfer>
                  <feComposite in="displaced" in2="overlayMask" operator="in" />
                </filter>
              </defs>

         
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
          <p v-else>
            {{ mailing }}
          </p>

          <Button @click="onSubmit">{{
            mailLoading ? "Zpracovávám..." : mailing ? "Odhlásit" : "Přihlásit"
          }}</Button>
          -->
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
const mainStore = useMainStore();

const { mailing } = storeToRefs(mainStore);

const emil = ref("");
const mailLoading = ref(false);

const onSubmit = () => {
  if (mailing) {
    unsubscribe();
  } else {
    subscribe();
  }
};

const unsubscribe = async () => {
  if (mailLoading.value) return;
  emil.value = "";
  mailLoading.value = true;
  await mainStore.unsubscribe();
  mailLoading.value = false;
};

const subscribe = async () => {
  if (mailLoading.value) return;
  mailLoading.value = true;
  //regex for email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(emil.value)) {
    alert("Zadejte platný email");
    mailLoading.value = false;
    return;
  }
  //send email to backend
  await mainStore.subscribe(emil.value);

  mailLoading.value = false;
};

watch(mailing, (value) => {
  if (value) {
    emil.value = value;
  }
});
</script>
