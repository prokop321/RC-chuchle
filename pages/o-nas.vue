<template>
  <Page :title="[{ text: 'O nás', link: '/o-nas' }]">
    <!-- Hero Section -->
    <section class="flex justify-center px-4 py-16">
      <div class="flex w-full max-w-7xl flex-col items-center gap-8">
        <!-- Full width image -->
        <img
          src="/about.webp"
          alt="Rodinné centrum CHUCHLE"
          class="w-full max-w-4xl rounded-2xl object-cover shadow-lg"
        />

        <!-- Single paragraph under the image -->
        <div class="text-center">
          <p class="text-xl font-semibold text-primary">
            Rodinné centrum CHUCHLE je zapsaným spolkem založeným v roce 2014.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="flex justify-center px-4 py-16">
      <div class="w-full max-w-4xl">
        <div class="prose prose-lg mx-auto">
          <div class="mb-12">
            <h2 class="mb-6 text-2xl font-bold">Naše poslání</h2>
            <p class="mb-4 text-lg leading-relaxed">
              Naším původním záměrem bylo vytvoření místa pro setkávání a
              seznamování nově přistěhovalých občanů a zároveň nabízení
              atraktivních volnočasových aktivit. Za dobu fungování centra jsme
              si ověřili, že tato myšlenka, kde se mohou lidé seznámit, byla
              správná. Dalším cílem rodinného centra Chuchle je rozhýbat
              komunitní dění v Chuchli a mezigenerační propojení obyvatel.
            </p>
          </div>

          <div class="mb-12">
            <h2 class="mb-6 text-2xl font-bold">Naše činnost</h2>
            <p class="mb-4 text-lg leading-relaxed">
              Kromě zaběhnutých sezónních akcí a kroužků, u kterých se snažíme
              nabídku stále rozšiřovat, připravujeme také pravidelné komunitní
              večery.
            </p>
            <p class="mb-4 text-lg leading-relaxed">
              Stále se orientujeme i na odpolední aktivity pro děti, ale mnohem
              více také pro dospělé. Chceme z Chuchle vytvořit místo, kde budou
              lidé rádi žít a ne jen přežívat. Těší nás, že se díky pořádaným
              aktivitám podařilo navázat spoustu nových přátelství a to nejen
              mezi dětmi, ale hlavně mezi dospělými, kteří již tolik prostor pro
              seznámení nemají.
            </p>
          </div>

          <div class="mb-12">
            <h2 class="mb-6 text-2xl font-bold">Přidejte se k nám</h2>
            <p class="mb-6 text-lg leading-relaxed">
              Přijďte mezi nás i vy. Jsme otevřenou organizací, kde lidé táhnou
              za jeden provaz. Pokud máte nápad, co v Chuchli chybí konkrétně
              vám, klidně nám to sdělte, třeba zjistíme, že nás je mnohem víc a
              podaří se nám zase něco nového realizovat.
            </p>

            <div
              class="from-primary/10 to-secondary/10 rounded-2xl bg-gradient-to-r p-8 text-center"
            >
              <p class="mb-6 text-xl font-semibold">
                Vaše komunitní rodinné centrum CHUCHLE, z. s.
              </p>

              <!-- CTA Section -->
              <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button color="primary" href="/lektori">
                  Poznejte naše lektory
                </Button>
                <Button color="secondary" href="/kurzy">
                  Prohlédněte si kurzy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Page>
</template>
