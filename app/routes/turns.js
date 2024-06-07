import Route from '@ember/routing/route';

export default class TurnsRoute extends Route {
  async model() {
    let response = await fetch('/api/turns.json');
    let { data } = await response.json();
    return data;
  }
}
