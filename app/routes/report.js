import Route from '@ember/routing/route';

export default class ReportRoute extends Route {
  async model(params) {
    let response = await fetch(`/api/reports/${params.report_id}.json`);
    let { data } = await response.json();
    return data;
  }
}
