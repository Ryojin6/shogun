<template>
  <TemplateDefault class="overflow-x-hidden">
    <div
      class="top-0 z-50 flex min-h-screen w-full items-end justify-center overflow-hidden bg-[#201f1f]"
    >
      <div class="absolute inset-0 z-40 bg-black opacity-80" />

      <div class="w-full">
        <div class="mx-auto max-w-3xl px-10 3xl:max-w-4xl">
          <img src="/11.png" alt="" class="relative z-40 w-full" />
        </div>
        <div class="absolute top-0 bottom-0 w-full">
          <img
            src="/bg.gif"
            alt=""
            class="relative z-20 h-full w-full object-cover"
          />
        </div>
        <a
          href="#content"
          class="absolute left-1/2 bottom-10 flex w-16 -translate-x-1/2 animate-bounce items-center justify-center"
          ><img src="/scroll-down.svg" alt=""
        /></a>
      </div>
    </div>
    <div class="NoiseBackground">
      <div class="NoiseBackground__Noise" />
    </div>
    <AtomSection
      tp="large"
      bp="large"
      class="relative z-10 bg-transparent text-white"
    >
      <AtomInner class="pt-24">
        <div
          class="flex w-full flex-col items-center space-y-10 py-10 lg:flex-row lg:space-x-10 lg:space-y-0 xl:space-x-16"
        >
          <div class="space-y-4 font-serif lg:w-1/2">
            <h1
              class="text-4xl font-bold uppercase text-n-pink sm:text-5xl md:text-6xl 2xl:text-7xl 2xl:leading-none"
            >
              道場は12月に<br />オープンします
            </h1>

            <div>
              <h3 class="text-xl">
                Train in the dojo with the bravest shogun, with unmissable
                strikes and razor edge hit area.
              </h3>
            </div>
          </div>
          <div class="lg:w-1/2">
            <img src="/images/12.jpg" />
          </div>
        </div>
      </AtomInner>
    </AtomSection>

    <AtomSection fullWidth>
      <AtomInner fullWidth>
        <OrganismSlider />
      </AtomInner>
    </AtomSection>
  </TemplateDefault>
</template>
