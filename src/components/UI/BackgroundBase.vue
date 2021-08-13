<template>
  <div
    class="bg-cover bg-right w-screen h-screen overflow-hidden"
    :class="backgroundControl"
  >
    <div
      class="transition delay-500 duration-300 justify-center items-center flex w-full h-full bg-black"
      :class="secondLayerControl"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    backgroundControl() {
      if (this.$route.path === "/") {
        return {
          "bg-background-1": true,
        };
      } else if (this.$route.path === "/education") {
        return {
          "bg-background-2": true,
        };
      }
      return { "bg-black": true };
    },
    secondLayerControl() {
      if (this.$route.path === "/") {
        return {
          "bg-opacity-60": true,
          "p-12": true,
        };
      } else if (this.$route.path === "/education") {
        return {
          "bg-opacity-80": true,
          "p-12": true,
        };
      }
      return { "py-10": true, "px-4": true };
    },
  },
};
</script>
