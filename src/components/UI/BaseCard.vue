<template>
  <div
    class="flex justify-center bg-white bg-right w-full h-full rounded-3xl shadow-padat-md md:w-9/12 md:bg-cover"
    :class="backgroundControl"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    backgroundControl() {
      if (this.$route.path === "/") {
        return {
          "md:bg-background-1": true,
          "bg-opacity-20": true,
          "flex-col": true,
        };
      } else if (this.$route.path === "/education") {
        return { "items-center": true };
      }
      return {};
    },
  },
};
</script>
