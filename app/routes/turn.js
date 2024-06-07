import Route from '@ember/routing/route';

export default class TurnRoute extends Route {
  async model(params) {
    let response = await fetch(`/api/turns/${params.turn_id}.json`);
    let { data } = await response.json();
    return data;
  }
}
