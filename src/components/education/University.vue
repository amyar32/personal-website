<template>
  <div class="flex flex-col w-full h-full md:flex-row-reverse">
    <!-- gambar uin  -->
    <div
      class="bg-background-2 bg-center bg-cover w-full h-3/6 rounded-t-3xl md:h-full md:w-6/12 md:rounded-r-3xl md:shadow-padat-md"
    ></div>

    <!-- green-bar di versi mobile  -->
    <div class="bg-gray-700 w-full h-1 md:hidden"></div>

    <!-- konten isi  -->
    <div
      class="flex flex-col items-center h-80 justify-center text-center text-gray-800 px-11 md:w-6/12 md:h-full"
    >
      <p class="mb-3 text-sm">I'm still majoring in</p>
      <div
        class="font-bold leading-none text-black text-2xl filter drop-shadow-md w-full mb-3 md:text-4xl"
      >
        INFORMATICS ENGINEERING
      </div>
      <p class="text-sm mb-3">
        at
        <span class="font-bold italic">UIN Sunan Gunung Djati Bandung</span>
      </p>
      <p class="text-xs italic text-center mb-4 md:mb-6">
        Becoming a Superior and Competitive Informatics Engineering Department
        in ASEAN in 2025 in the Frame of Akhlak Karimah.
      </p>
      <a
        class="hidden transition bg-gray-800 text-white px-4 py-1 rounded-xl md:px-8 md:py-2 md:block hover:bg-gray-600"
        href="https://if.uinsgd.ac.id/"
        target="_blank"
        >Learn More</a
      >
    </div>
  </div>
</template>
