import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AppComponent extends Component {
    isMapsPage = this.args.page === 'map';
    isReportsPage = this.args.page === 'reports';
    isTurnPage = this.args.page === 'turns';

  @tracked isHamburgerMenuOpen = false;

  @action
  toggleHamburgerMenu() {
    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
  }
}
