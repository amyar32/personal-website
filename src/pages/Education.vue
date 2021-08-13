<template>
  <base-card>
    <transition
      enter-active-class="animate-fade-in-back"
      leave-active-class="animate-fade-in-back-rv"
      mode="out-in"
    >
      <component :is="selectedComponent"></component>
    </transition>

    <button
      class="transition-all bg-white h-14 w-14 rounded-full shadow-padat-md text-gray-600 text-2xl flex justify-center items-center fixed top-5 hover:text-gray-900 hover:text-3xl"
      @click="setSelectedComponent"
    >
      <font-awesome-icon
        v-if="selectedComponent === 'university'"
        :icon="['fas', 'arrow-left']"
      />
      <font-awesome-icon v-else :icon="['fas', 'arrow-right']" />
    </button>
  </base-card>
</template>

<script>
import University from "../components/education/University.vue";
import HighSchool from "../components/education/HighSchool.vue";

export default {
  data() {
    return {
      selectedComponent: "university",
    };
  },
  components: {
    University,
    HighSchool,
  },
  methods: {
    setSelectedComponent() {
      if (this.selectedComponent === "high-school") {
        this.selectedComponent = "university";
      } else {
        this.selectedComponent = "high-school";
      }
    },
  },
};
</script>
