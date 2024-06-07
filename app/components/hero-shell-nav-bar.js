import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HeroShellNavBarComponent extends Component {
  isIndexPage = this.args.page === 'index';
  isFeaturesPage = this.args.page === 'features';

  @tracked isHamburgerMenuOpen = false;

  @action
  toggleHamburgerMenu() {
    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
  }
}
