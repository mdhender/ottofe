import Route from '@ember/routing/route';

export default class MapsRoute extends Route {
  async model() {
    let response = await fetch('/api/maps.json');
    let { data } = await response.json();
    return data;
  }
}
