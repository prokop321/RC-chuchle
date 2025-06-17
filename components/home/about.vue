<template>
  <section class="flex justify-center bg-fill px-4 py-16">
    <div class="flex w-full max-w-7xl flex-col items-center gap-8">
      <h2>O nás</h2>

      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <!-- Left side - Image or visual element -->
        <div class="flex justify-center">
          <div class="relative">
            <img
              src="/logo.svg"
              alt="Rodinné centrum CHUCHLE"
              class="h-64 w-64 object-contain"
            />
          </div>
        </div>

        <!-- Right side - Text content -->
        <div class="flex flex-col gap-5">
          <div class="text-lg leading-relaxed">
            <p class="mb-2">
              Rodinné centrum CHUCHLE je zapsaným spolkem založeným v roce 2014.
              Jsme nezávislou organizací, která má za cíl reagovat na akutální
              potřeby občanů Velké a Malé Chuchle.
            </p>

            <p class="mb-2">
              Naším původním záměrem bylo vytvoření místa pro setkávání a
              seznamování nově přistěhovalých občanů a zároveň nabízení
              atraktivních volnočasových aktivit. Za dobu fungování centra jsme
              si ověřili, že tato myšlenka byla správná.
            </p>

            <p class="mb-2">
              Chceme z Chuchle vytvořit místo, kde budou lidé rádi žít a ne jen
              přežívat. Těší nás, že se díky pořádaným aktivitám podařilo
              navázat spoustu nových přátelství nejen mezi dětmi, ale hlavně
              mezi dospělými.
            </p>
          </div>

          <div class="flex flex-col gap-4 sm:flex-row">
            <Button color="primary" href="/o-nas"> Více o nás </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
