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
              ? "Přihlaš se k odběru novinek a Sokol ti do mailu přinese čerství informace o našich akcích a další..."
              : "Jste přihlášeni k odběru novinek. Na mail vám budeme posílat všechny důležité novinky."
          }}
        </p>
        <div
          class="flex w-full max-w-md flex-col justify-end gap-4 md:flex-row md:items-center"
        >
          <input
            v-if="!mailing"
            type="email"
            autocomplete="email"
            placeholder="Váš email"
            v-model="emil"
            class="h-14 w-full border-b-4 border-text px-4 caret-text focus:border-primary focus:outline-none"
          />
          <p v-else>
            {{ mailing }}
          </p>

          <Button @click="onSubmit">{{
            mailLoading ? "Zpracovávám..." : mailing ? "Odhlásit" : "Přihlásit"
          }}</Button>
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
