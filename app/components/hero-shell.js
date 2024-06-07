import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HeroShellComponent extends Component {
   @service router;

  @tracked isMobileMenuOpen = false;

  isIndexPage = this.router.currentRouteName === 'index';
  isFeaturesPage = this.router.currentRouteName === 'features';

  @action
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }  
}
