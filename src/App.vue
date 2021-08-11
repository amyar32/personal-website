<template>
  <background-base>
    <router-view v-slot="slotProps">
      <transition
        enter-active-class="animate-slide-in-blurred-bottom"
        leave-active-class="animate-fade-in-back-rv"
        mode="out-in"
      >
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>

    <!-- my precious little box -->
    <player />
    <!-- end of my little box -->
  </background-base>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400,700;1,400&display=swap");
</style>
