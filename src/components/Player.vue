<template>
  <div class="flex fixed justify-center bottom-2 h-16 w-full">
    <div
      class="bg-white h-4/6 w-36 rounded-2xl shadow-padat-md text-gray-400 text-md flex justify-evenly items-center absolute"
    >
      <button @click="handleClick">
        <router-link to="/"
          ><font-awesome-icon :icon="['fas', 'home']"
        /></router-link>
      </button>
      <button>
        <router-link to="/education"
          ><font-awesome-icon :icon="['fas', 'user-graduate']"
        /></router-link>
      </button>
      <button>
        <router-link to="/experience"
          ><font-awesome-icon :icon="['fas', 'book']"
        /></router-link>
      </button>
    </div>
  </div>
</template>

<script></script>

<style scoped>
a {
  @apply transition-all hover:text-gray-800;
}
.router-link-active {
  @apply text-2xl text-gray-600;
}
</style>
