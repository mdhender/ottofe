import Route from '@ember/routing/route';

export default class ReportsRoute extends Route {
  async model() {
    let response = await fetch('/api/reports.json');
    let { data } = await response.json();
    return data;
  }
}
