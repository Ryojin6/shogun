<template>
  <header
    class="pin-x-center bg-blur-2xl custom-transition fixed top-0 z-50 w-full bg-opacity-30 p-6 scrolled:bg-black"
  >
    <div class="x mx-auto flex w-full max-w-8xl justify-between">
      <g-link
        to="/"
        class="w-40 transition-all duration-300 ease-in-out scrolled:w-40 xl:w-56"
      >
        <object id="myObject" data="/logo.svg" class="w-full">
          <img src="/logo.svg" alt="" />
        </object>
      </g-link>

      <div class="flex w-full items-center justify-end space-x-4 md:w-auto">
        <a
          href="https://www.premint.xyz/shogun-ape-samurai-club/"
          target="_Blank"
          class="bg-n-pink px-6 py-2 font-bold hover:bg-white hover:text-n-pink"
          >Premint</a
        >
        <a
          href="https://mint.shogunapes.xyz/"
          target="_Blank"
          class="bg-white px-6 py-2 font-bold text-n-pink hover:bg-n-pink hover:text-white"
          >Mint Now</a
        >
        <AtomIconTwitter
          link="https://twitter.com/TheApeSamurai"
          class="text-white hover:text-n-pink"
        />

        <AtomIconEtherscan
          link="https://etherscan.io/address/0x97032cc8acb942626fe640fb2e73a123852ad451"
          class="text-white hover:text-n-pink"
        />
        <AtomIconOpensea
          link="https://opensea.io/collection/shogun-apes-samurai"
          class="text-white hover:text-n-pink"
        />
      </div>
    </div>
  </header>
</template>
