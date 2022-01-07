<template>
  <div style="text-align: left; width: 640px">
    <header style="display: flex; justify-content: space-between">
      <form class="form" @submit.prevent="fetchData">
        <label for="username">
          <input id="username" type="text" v-model="username" />
        </label>
        <button type="submit">Add</button>
      </form>
      <button type="button">Clear All</button>
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
      data: undefined,
      url: '',
      userLists: [
        {
          username: '',
          location: '',
          public_repos: 0,
          followers: 0,
          following: 0,
          created_at: '',
          avatar_url: '',
        },
      ],
    }
  },
  methods: {
    composeUrl(username: string): string {
      return `https://api.github.com/users/${username}`
    },

    async fetchData(): Promise<void> {
      this.url = this.composeUrl(this.username)
      const response = await fetch(this.url)
      this.data = await response.json()
    },
  },
})
</script>
