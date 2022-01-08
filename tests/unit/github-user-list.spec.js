import GithubUserList from '@/components/exercise/github-user-list.vue'
import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

describe('Github User List', () => {
  it('add new card when form username is filled and Add button clicked', async () => {
    const wrapper = shallowMount(GithubUserList)
    const input = wrapper.find('[data-testid=username-input]')
    const btn = wrapper.find('[data-testid=btn-submit]')

    input.setValue('rsurya99')
    const jsonMock = jest.fn().mockResolvedValue({
      login: 'RSurya99',
    })
    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock,
    })
    await btn.trigger('submit')
    await flushPromises()
    expect(window.fetch).toHaveBeenCalledWith('https://api.github.com/users/rsurya99')
    expect(wrapper.vm.data[0]).toEqual({
      login: 'RSurya99',
    })
  })

  it('clear all list of github user card when Clear All button clicked', async () => {
    const wrapper = shallowMount(GithubUserList)
    const btn = wrapper.find('[data-testid=btn-clearall]')

    await btn.trigger('click')
    expect(wrapper.vm.data).toEqual([])
  })
})
