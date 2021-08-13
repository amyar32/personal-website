<template>
  <background-base>
    <div class="h-full w-full flex flex-col items-center md:flex-row">
      <div class="w-full md:flex md:h-full md:w-6/12">
        <transition
          enter-active-class="transform duration-700 ease-out"
          enter-from-class="opacity-0 translate-y-9"
          enter-to-class="opacity-100 translate-y-0"
          ><div
            v-if="showTitle"
            class="font-display text-4xl text-left sm:text-5xl md:text-7xl m-auto text-white"
          >
            <p>
              I'M
              <transition
                leave-active-class="transform duration-300 ease-out"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-9"
                enter-active-class="transform duration-700 ease-out"
                enter-from-class="opacity-0 translate-y-9"
                enter-to-class="opacity-100 translate-y-0"
                mode="out-in"
                ><span
                  v-if="showNot"
                  @click="handleNot"
                  class="transition text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 cursor-pointer hover:text-white"
                  >NOT</span
                ></transition
              >
            </p>
            <p class="leading-custom">EXPERIENCED</p>
            <transition
              leave-active-class="transform duration-300 ease-out"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-9"
              enter-active-class="transform duration-700 ease-out"
              enter-from-class="opacity-0 translate-y-9"
              enter-to-class="opacity-100 translate-y-0"
              mode="out-in"
              ><p v-if="showNot">
                ENOUGH
              </p>
              <p
                v-else
                @click="handleNot"
                class="transition text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 cursor-pointer hover:text-white"
              >
                MAYBE
              </p></transition
            >
          </div></transition
        >
      </div>

      <!-- bagian kanan -->

      <div
        class="delay-700 h-1 w-full my-5 md:h-4/6 md:w-1 bg-white rounded-full md:block"
      ></div>
      <transition
        enter-active-class="transform duration-700 ease-out"
        enter-from-class="opacity-0 translate-y-9"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transform duration-300 ease-out"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-9"
      >
        <div
          class="transform w-full flex md:pl-10 flex-col h-3/6 md:w-6/12 justify-between"
          v-if="!showNot"
        >
          <div>
            <div class="text-white font-bold text-2xl">Basic Tech</div>
            <ul class="text-white text-xs md:text-sm list-disc list-inside">
              <li>
                <span class="font-bold"> Programming Language :</span>
                JavaScript (Browser, NodeJs)
              </li>
              <li>
                <span class="font-bold"> Web Frameworks :</span>
                Express
              </li>
              <li>
                <span class="font-bold"> Front-End Frameworks :</span>
                React, Vue
              </li>
              <li>
                <span class="font-bold"> CSS Frameworks :</span>
                Tailwind
              </li>
              <li>
                <span class="font-bold"> Media Software :</span>
                Adobe Illustrator, Premiere
              </li>
              <li>
                <span class="font-bold"> Other Tech :</span>
                Docker, Git
              </li>
            </ul>
          </div>
          <div>
            <div class="text-white font-bold text-2xl">Graphic Designer</div>
            <ul class="text-white text-xs md:text-sm list-disc list-inside">
              <li>
                <a
                  href="https://www.instagram.com/humas_desakertamulya/"
                  target="_blank"
                  >Desa Kertamulya</a
                >
              </li>
              <li>
                <a
                  href="https://www.instagram.com/himapersiskbb/"
                  target="_blank"
                  >PD. Hima Persis Kab. Bandung Barat</a
                >
              </li>
            </ul>
          </div>
          <div>
            <div class="text-white font-bold text-2xl">Branding</div>
            <ul class="text-white text-xs md:text-sm list-disc list-inside">
              <li>
                <a
                  href="https://www.instagram.com/p/CPS4uZ7naow/"
                  target="_blank"
                  >PremiumFarm.id</a
                >
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mi_insancendekiagarut/"
                  target="_blank"
                  >MI Insan Cendekia</a
                >
              </li>
            </ul>
          </div>
          <div>
            <div class="text-white font-bold text-2xl">Web</div>
            <ul class="text-white text-xs md:text-sm list-disc list-inside">
              <li>
                <a href="https://hisabin.site/" target="_blank">Hisabin.Site</a>
              </li>
            </ul>
          </div>
          <div>
            <div class="text-white font-bold text-2xl">
              Weird Art
            </div>
            <ul class="text-white text-xs md:text-sm list-disc list-inside">
              <li>
                <a
                  href="https://www.instagram.com/techtiyar.art/"
                  target="_blank"
                  >My Gallery</a
                >
              </li>
            </ul>
          </div>
        </div></transition
      >
    </div>
  </background-base>
</template>

<script>
export default {
  data() {
    return {
      showTitle: false,
      showNot: true,
    };
  },
  methods: {
    handleNot() {
      this.showNot = !this.showNot;
    },
  },

  mounted() {
    setTimeout(() => {
      this.showTitle = true;
    }, 500);
    setTimeout(() => {
      this.showNot = false;
    }, 1500);
  },
};
</script>
