<template>
  <div
    class="flex flex-col justify-center bg-white bg-right w-full h-full rounded-3xl shadow-padat-md md:bg-opacity-80 md:w-9/12 md:bg-cover"
    :class="backgroundControl"
  >
    <slot></slot>
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
        return { "md:bg-background-1": true, "bg-opacity-20": true };
      } else if (this.$route.path === "/education") {
        return { "md:bg-background-2": false, "bg-opacity-100": true };
      }
      return { "md:bg-background-2": true };
    },
  },
};
</script>
