<template>
  <TemplateDefault class="min-h-screen overflow-x-hidden">
    <div class="NoiseBackground">
      <div class="NoiseBackground__Noise"></div>
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
              道場は12月にオープンします
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
