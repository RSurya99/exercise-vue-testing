<template>
  <div class="home">
    <GithubCard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  components: {
    GithubCard: () => import('@/components/github-card.vue'),
  },
})
</script>
