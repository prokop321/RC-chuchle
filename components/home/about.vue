<template>
  <section class="flex justify-center bg-fill px-4 py-16">
    <div class="flex w-full max-w-7xl flex-col items-center gap-8">
      <div class="relative">
        <!-- White background block with paper texture -->

        <div class="relative z-10 p-8">
          <h2 class="mb-8 text-center">O nás</h2>

          <div class="flex flex-col gap-8 lg:flex-row">
            <!-- Left side - Image or visual element -->
            <div class="relative flex flex-1 justify-center">
              <img
                src="/about.webp"
                alt="O nás"
                class="h-full max-h-96 w-full rounded-2xl bg-slate-400 object-cover shadow-lg"
              />
            </div>

            <!-- Right side - Text content -->
            <div class="flex flex-1 flex-col gap-5">
              <div class="text-lg leading-relaxed">
                <p class="mb-2">
                  Rodinné centrum CHUCHLE je zapsaným spolkem založeným v roce
                  2014. Jsme nezávislou organizací, která má za cíl reagovat na
                  akutální potřeby občanů Velké a Malé Chuchle.
                </p>

                <p class="mb-2">
                  Naším původním záměrem bylo vytvoření místa pro setkávání a
                  seznamování nově přistěhovalých občanů a zároveň nabízení
                  atraktivních volnočasových aktivit. Za dobu fungování centra
                  jsme si ověřili, že tato myšlenka byla správná.
                </p>

                <p class="mb-2">
                  Chceme z Chuchle vytvořit místo, kde budou lidé rádi žít a ne
                  jen přežívat. Těší nás, že se díky pořádaným aktivitám
                  podařilo navázat spoustu nových přátelství nejen mezi dětmi,
                  ale hlavně mezi dospělými.
                </p>
              </div>

              <div class="flex flex-col gap-4 sm:flex-row">
                <Button color="primary" href="/o-nas"> Více o nás </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
