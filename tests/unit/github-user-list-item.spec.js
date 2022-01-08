import GithuUserListItem from '@/components/exercise/github-user-list-item.vue'
import { mount } from '@vue/test-utils'

let wrapper
const userData = {
  login: 'RSurya99',
  id: 73375663,
  node_id: 'MDQ6VXNlcjczMzc1NjYz',
  avatar_url: 'https://avatars.githubusercontent.com/u/73375663?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/RSurya99',
  html_url: 'https://github.com/RSurya99',
  followers_url: 'https://api.github.com/users/RSurya99/followers',
  following_url: 'https://api.github.com/users/RSurya99/following{/other_user}',
  gists_url: 'https://api.github.com/users/RSurya99/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/RSurya99/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/RSurya99/subscriptions',
  organizations_url: 'https://api.github.com/users/RSurya99/orgs',
  repos_url: 'https://api.github.com/users/RSurya99/repos',
  events_url: 'https://api.github.com/users/RSurya99/events{/privacy}',
  received_events_url: 'https://api.github.com/users/RSurya99/received_events',
  type: 'User',
  site_admin: false,
  name: 'Rafli Surya P',
  company: null,
  blog: '',
  location: 'Bandung, Indonesia',
  email: null,
  hireable: null,
  bio: null,
  twitter_username: 'RSurya99',
  public_repos: 29,
  public_gists: 0,
  followers: 38,
  following: 68,
  created_at: '2020-10-24T04:06:24Z',
  updated_at: '2022-01-07T01:23:43Z',
}

describe('Github User List Item', () => {
  beforeEach(() => {
    wrapper = mount(GithuUserListItem, {
      propsData: {
        user: userData,
      },
    })
  })
  it('duplicate the card of specific user when the Duplicate button is clicked', () => {
    const button = wrapper.find('[data-testid=duplicateButton]')

    button.trigger('click')
    const duplicateCalls = wrapper.emitted('duplicate')
    expect(duplicateCalls).toHaveLength(1)
    const expectedPayload = { user: userData }
    expect(wrapper.emitted('duplicate')[0][0]).toMatchObject(expectedPayload)
  })
  it('remove the card of specific user when the Remove button is clicked', () => {
    const button = wrapper.find('[data-testid=removeButton]')

    button.trigger('click')
    // 4. Assert event has been emitted
    const removeCalls = wrapper.emitted('remove')
    expect(removeCalls).toHaveLength(1)
    const expectedPayload = { user_id: 73375663 }
    expect(wrapper.emitted('remove')[0][0]).toMatchObject(expectedPayload)
  })
})
