import Route from '@ember/routing/route';

export default class MapRoute extends Route {
  async model(params) {
    let response = await fetch(`/api/maps/${params.map_id}.json`);
    let { data } = await response.json();
    return data;
  }
}
