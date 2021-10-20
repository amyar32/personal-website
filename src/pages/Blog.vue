<template>
  <div class="text-white">hi</div>
</template>

<script>
import { butter } from "@/buttercms";

export default {
  methods: {
    fetchPosts() {
      butter.post
        .list({
          page: 1,
          page_size: 10,
        })
        .then((res) => {
          console.log("Content from ButterCMS");
          console.log(res);
        });
    },
    fetchHeadline() {
      butter.content.retrieve(["homepage_headline"]).then((res) => {
        console.log("Headline from ButterCMS");
        console.log(res);
      });
    },
  },
  created() {
    this.fetchHeadline();
    // this.fetchPosts();
  },
};
</script>
