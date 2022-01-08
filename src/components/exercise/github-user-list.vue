<template>
  <div style="text-align: left; width: 640px">
    <header style="display: flex; justify-content: space-between">
      <form class="form" @submit.prevent="fetchData">
        <label for="username">
          <input id="username" type="text" v-model="username" data-testid="username-input" />
        </label>
        <button type="submit" data-testid="btn-submit">Add</button>
      </form>
      <button type="button" @click="clearAll" data-testid="btn-clearall">Clear All</button>
    </header>
    <div>
      <GithubUserListItem />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'GithubUserList',
  components: {
    GithubUserListItem: () => import('./github-user-list-item.vue'),
  },
  data() {
    return {
      username: '',
      data: [],
      url: '',
    }
  },

  methods: {
    composeUrl(username: string): string {
      return `https://api.github.com/users/${username}`
    },

    async fetchData(): Promise<void> {
      this.url = this.composeUrl(this.username)
      const response = await fetch(this.url)
      this.data.push(await response.json())
    },

    clearAll() {
      this.data = []
    },
  },
})
</script>
