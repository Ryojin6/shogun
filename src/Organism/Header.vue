<template>
  <header
    class="pin-x-center bg-blur-2xl custom-transition fixed top-0 z-30 w-full bg-opacity-30 p-6 scrolled:bg-black"
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
        <AtomIconTwitter
          link="https://twitter.com/TheApeSamurai"
          class="text-white hover:text-n-pink"
        />

        <!-- <AtomIconEtherscan
          link="https://etherscan.io/address/0x7ac8D18d6FbE083008b615873004826AE5F35F15#code"
          class="text-white hover:text-n-pink"
        />
        <AtomIconOpensea
          link="https://opensea.io/collection/bored-apes-ai-club"
          class="text-white hover:text-n-pink"
        /> -->
      </div>
    </div>
  </header>
</template>
