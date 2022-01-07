import GithubUserList from '@/components/exercise/github-user-list.vue'
import { shallowMount } from '@vue/test-utils'

describe('Github User List', () => {
  it.only('shows list of github user card with the correct data', () => {
    const wrapper = shallowMount(GithubUserList)

    console.log(wrapper.html())
  })

  // it('add new card when form username is filled and Add button clicked', () => {})

  // it('clear all list of github user card when Clear All button clicked', () => {})

  // it('duplicate the card of specific user when the Duplicate button is clicked', () => {})

  // it('remove the card of specific user when the Remove button is clicked', () => {})
})
