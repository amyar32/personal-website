<template>
  <div
    class="bg-cover bg-right w-screen h-screen overflow-hidden"
    :class="backgroundControl"
  >
    <div
      class="transition-all delay-300 flex justify-center items-center w-full h-full p-12 bg-black"
      :class="secondLayerControl"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundType: "1",
    };
  },
  computed: {
    backgroundControl() {
      if (this.$route.path === "/") {
        return { "bg-background-1": true };
      } else if (this.$route.path === "/education") {
        return { "bg-background-2": true };
      }
      return {};
    },
    secondLayerControl() {
      if (this.$route.path === "/") {
        return { "bg-opacity-60": true };
      } else if (this.$route.path === "/education") {
        return { "bg-opacity-80": true };
      }
      return {};
    },
  },
};
</script>
