import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class HeroShellComponent extends Component {
  @service router;

  isIndexPage = this.router.currentRouteName === 'index';
  isFeaturesPage = this.router.currentRouteName === 'features';
}
