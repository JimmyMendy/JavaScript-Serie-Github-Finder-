class Github {
  constructor() {
    this.client_id = 'd4acd306e0dd22fbb98f';
    this.client_secret = '5442d2b262819a5b681ab03c483c58139bb1d3f6';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
